import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../../../contexts/AppContext";
import VerifiedIcon from "@mui/icons-material/Verified";
import { getAllUsers } from "../../../services/UserService";

export default function FollowersList({ setFollowModal }) {
  const { username: paramsUsername } = useParams();

  const navigate = useNavigate();

  const {
    state: { token, user: authUser },
    dispatch,
  } = useContext(AuthContext);

  const {
    state: { allUsers },
    dispatch: AppDispatch,
  } = useContext(AppContext);

  const currentUser =
    paramsUsername === authUser.username
      ? authUser
      : allUsers.find(({ username }) => username === paramsUsername);

  const handleRemoveFollower = async (userId) => {
    console.log("Removed follower");
    const updatedUser = {
      ...authUser,
      followers: authUser.followers.filter(({ _id }) => _id !== userId),
    };
    dispatch({ type: "setUser", payload: updatedUser });
    const updatedUsers = await getAllUsers();
    AppDispatch({ type: "setAllUsers", payload: updatedUsers });
  };

  const filteredUsers = currentUser.followers;

  return (
    <div className="flex-col">
      {!filteredUsers.length && <div className="text-center">No followers</div>}
      {filteredUsers.map(
        (user) =>
          user.username !== paramsUsername && (
            <div
              key={user._id}
              className="flex items-start justify-start gap-2 cursor-pointer p-3"
              onClick={() => {
                console.log("Open User Profile");
              }}
            >
              <img
                src={user.avatar}
                alt=""
                className="h-12 w-12 rounded-full object-cover"
                onClick={() => {
                  setFollowModal({ open: false, type: "" });
                  navigate(`/profile/${user.username}`);
                }}
              />
              <div
                className="flex flex-col grow my-1"
                onClick={() => {
                  setFollowModal({ open: false, type: "" });
                  navigate(`/profile/${user.username}`);
                }}
              >
                <span className="text-sm">
                  {user.firstName} {user.lastName}
                  {user.isVerified && (
                    <VerifiedIcon
                      className="text-blue-500 ml-1"
                      fontSize="small"
                    />
                  )}
                </span>
                <span className="text-sm text-lightGrey -mt-1">
                  @{user.username}
                </span>
              </div>

              {currentUser === authUser && (
                <button
                  className="bg-white text-sm hover:bg-red-600 text-black py-1 px-4 my-2 rounded-full"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRemoveFollower(user._id);
                  }}
                >
                  Remove
                </button>
              )}
            </div>
          )
      )}
    </div>
  );
}
