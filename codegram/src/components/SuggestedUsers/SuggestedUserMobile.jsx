import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { AppContext } from "../../contexts/AppContext";
import { useNavigate } from "react-router-dom";
import {
  doFollowUser,
  editUserProfile,
  getAllUsers,
} from "../../services/UserService";

export default function SuggestedUserMobile() {
  const navigate = useNavigate();

  const {
    state: { user, token },
    dispatch,
  } = useContext(AuthContext);

  const {
    state: { allUsers },
    dispatch: AppDispatch,
  } = useContext(AppContext);

  const handleFollowUser = async (userId) => {
    const response = await doFollowUser(token, userId);
    const data = {
      ...user,
      following: [...user.following, response.followUser],
    };
    const { user: updatedUser } = await editUserProfile(token, data);
    dispatch({ type: "setUser", payload: updatedUser });
    const updatedUsers = await getAllUsers();
    AppDispatch({ type: "setAllUsers", payload: updatedUsers });
  };

  const filteredUsers = allUsers.filter(
    ({ username }) =>
      username !== user.username &&
      !user?.following?.find((p) => p.username === username)
  );

  return (
    <div className="md:hidden flex-col bg-[#25272ec2] p-2 m-4 mb-0 h-68 flex gap-3 rounded-md">
      <div className="text-[20px] sticky font-bold text-center">
        Suggested Users
      </div>
      <div className="flex gap-3 overflow-auto">
        {filteredUsers.length ? (
          <div className="flex gap-2">
            {filteredUsers.map((user) => (
              <div
                className="flex flex-col justify-center items-center gap-2 cursor-pointer p-3 mb-3 mx-auto border-solid rounded-[20px] bg-black h-48 w-36"
                key={user._id}
                onClick={() => navigate(`/profile/${user.username}`)}
              >
                <img
                  src={user.avatar}
                  alt=""
                  className="h-16 w-16 mt-2 rounded-full object-cover"
                  height="120px"
                  width="120px"
                />
                <div className="flex flex-col items-center grow -mt-0.5">
                  <span className="text-sm mt-2">{user.firstName} {user.lastName}</span>
                  <span className="text-sm text-lightGrey -mt-[1px]">
                    @{user.username}
                  </span>
                  <button
                    className="bg-blue-600 text-sm mt-3 py-1 px-4 rounded-full"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleFollowUser(user._id);
                    }}
                  >
                    Follow
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
