import { useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";
import { AuthContext } from "../../../contexts/AuthContext";
import {
  doUnfollowUser,
  editUserProfile,
  getAllUsers,
} from "../../../services/UserService";
import { useNavigate, useParams } from "react-router-dom";
import VerifiedIcon from "@mui/icons-material/Verified";

export default function FollowingList({ setFollowModal }) {
  const { username: paramsUsername } = useParams();

  const navigate = useNavigate();

  const {
    state: { token, user },
    dispatch,
  } = useContext(AuthContext);

  const {
    state: { allUsers },
    dispatch: AppDispatch,
  } = useContext(AppContext);

  const currentUser =
    paramsUsername === user.username
      ? user
      : allUsers.find(({ username }) => username === paramsUsername);

  const handleUnfollowUser = async (userId) => {
    const response = await doUnfollowUser(token, userId);
    const data = {
      ...user,
      following: [
        ...user.following.filter(
          ({ username }) => username !== response.followUser.username
        ),
      ],
    };
    const { user: updatedUser } = await editUserProfile(token, data);
    dispatch({ type: "setUser", payload: updatedUser });
    const updatedUsers = await getAllUsers();
    AppDispatch({ type: "setAllUsers", payload: updatedUsers });
  };

  const filteredUsers = allUsers.filter(
    ({ username }) =>
      username !== currentUser.username &&
      currentUser?.following?.find((p) => p.username === username)
  );

  return (
    <div className="flex-col">
      {!filteredUsers.length && <div className="text-center">No following</div>}
      {filteredUsers.map((user) => (
        <div
          key={user._id}
          className="flex items-start justify-start gap-2 p-3"
        >
          <img
            src={user.avatar}
            alt=""
            className="h-12 w-12 rounded-full object-cover cursor-pointer"
            onClick={() => {
              setFollowModal({ open: false, type: "" });
              navigate(`/profile/${user.username}`);
            }}
          />
          <div
            onClick={() => {
              setFollowModal({ open: false, type: "" });
              navigate(`/profile/${user.username}`);
            }}
            className="flex flex-col grow my-1 cursor-pointer"
          >
            <span className="text-sm">
              {user.firstName} {user.lastName}
              {user.isVerified && (
                <VerifiedIcon className="text-blue-500 ml-1" fontSize="small" />
              )}
            </span>
            <span className="text-sm text-lightGrey -mt-1">
              @{user.username}
            </span>
          </div>

          {currentUser.username === paramsUsername && (
            <button
              className="bg-white text-sm hover:bg-red-600 text-black py-1 px-4 my-2 rounded-full"
              onClick={(e) => {
                e.stopPropagation();
                handleUnfollowUser(user._id);
              }}
            >
              Unfollow
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
