import { useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";
import { AuthContext } from "../../../contexts/AuthContext";
import { doUnfollowUser, editUserProfile } from "../../../services/UserService";

export default function FollowingList() {
  const {
    state: { token, user },
    dispatch,
  } = useContext(AuthContext);

  const {
    state: { allUsers },
  } = useContext(AppContext);

  const handleUnfollowUser = async (userId) => {
    const response = await doUnfollowUser(token, userId);
    console.log(response);
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
  };

  const filteredUsers = allUsers.filter(
    ({ username }) =>
      username !== user.username &&
      user?.following?.find((p) => p.username === username)
  );
  return (
    <div className="flex-col">
      {filteredUsers.map((user) => (
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
            className="h-8 w-8 rounded-full object-cover"
            height="120px"
            width="120px"
          />
          <div className="flex flex-col grow -mt-0.5">
            <span className="text-sm">
              {user.firstName} {user.lastName}
            </span>
            <span className="text-sm text-lightGrey -mt-1">
              @{user.username}
            </span>
          </div>

          <button
            className="bg-white text-sm hover:bg-red-600 text-black py-1 px-4 rounded-full"
            onClick={(e) => {
              e.stopPropagation();
              handleUnfollowUser(user._id);
            }}
          >
            Unfollow
          </button>
        </div>
      ))}
    </div>
  );
}
