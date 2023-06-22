import { useContext, useEffect, useState } from "react";
import {
  doFollowUser,
  editUserProfile,
  getAllUsers,
} from "../../services/UserService";
import { AuthContext } from "../../contexts/AuthContext";
import { AppContext } from "../../contexts/AppContext";
import VerifiedIcon from "@mui/icons-material/Verified";

export default function SuggestedUsersList() {
  // const filteredUsers = [
  //   { _id: 1, fullName: "John Doe", username: "john" },
  //   { _id: 2, fullName: "Tony Stark", username: "tony" },
  //   { _id: 3, fullName: "Steve Rogers", username: "steve" },
  //   { _id: 4, fullName: "Bruce Wayne", username: "bruce" },
  //   { _id: 5, fullName: "Loki", username: "loki" },
  // ];

  const {
    state: { user, token },
    dispatch,
  } = useContext(AuthContext);

  const {
    state: { allUsers },
  } = useContext(AppContext);

  const handleFollowUser = async (userId) => {
    const response = await doFollowUser(token, userId);
    const data = {
      ...user,
      following: [...user.following, response.followUser],
    };
    const { user: updatedUser } = await editUserProfile(token, data);
    dispatch({ type: "setUser", payload: updatedUser });
  };

  const filteredUsers = allUsers.filter(
    ({ username }) =>
      username !== user.username &&
      !user?.following?.find((p) => p.username === username)
  );

  return (
    <>
      {filteredUsers.length ? (
        <div>
          {filteredUsers.slice(0, 5).map((user) => (
            <div
              key={user._id}
              className="flex items-start gap-2 cursor-pointer py-3 px-2"
              onClick={() => {
                console.log("Open User Profile");
              }}
            >
              <img
                src={user.avatar}
                alt=""
                className="h-14 w-14 rounded-full object-cover"
              />
              <div className="flex flex-col grow mt-2">
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

              <button
                className="bg-white text-sm hover:bg-gray-300 text-black py-1 px-4 mt-3 rounded-full"
                onClick={(e) => {
                  e.stopPropagation();
                  handleFollowUser(user._id);
                }}
              >
                Follow
              </button>
            </div>
          ))}
        </div>
      ) : null}
    </>
  );
}
