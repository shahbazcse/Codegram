import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";

export default function FollowersList() {
  const {
    state: { user },
    dispatch,
  } = useContext(AuthContext);

  const handleRemoveFollower = (userId) => {
    console.log("Removed follower");
    const updatedUser = {
      ...user,
      followers: user.followers.filter(({ _id }) => _id !== userId),
    };
    dispatch({ type: "setUser", payload: updatedUser });
  };

  const filteredUsers = user.followers;

  return (
    <div className="flex-col">
      {!filteredUsers.length && <div className="text-center">No followers</div>}
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
              handleRemoveFollower(user._id);
            }}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}
