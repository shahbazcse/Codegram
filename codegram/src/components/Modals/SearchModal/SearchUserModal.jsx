import { useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";
import VerifiedIcon from "@mui/icons-material/Verified";
import { useNavigate } from "react-router-dom";

export default function SearchUserModal({ query, setQuery }) {
  const navigate = useNavigate();

  const {
    state: { allUsers },
  } = useContext(AppContext);

  const filteredUsers = allUsers.filter(
    ({ firstName, lastName, username }) =>
      firstName.toLowerCase().includes(query.toLowerCase()) ||
      lastName.toLowerCase().includes(query.toLowerCase()) ||
      username.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="flex-col bg-[#16181C] mt-2 h-56 p-2 overflow-auto rounded-[16px]">
      {!filteredUsers.length && (
        <div className="flex m-auto my-24 text-center font-bold text-xl justify-center">
          No Users Found
        </div>
      )}
      {filteredUsers.map((user) => (
        <div
          key={user._id}
          className="flex items-start justify-start gap-2 p-3 hover:bg-gray-800 rounded-[20px]"
          onClick={() => {
            console.log("Open User Profile");
          }}
        >
          <img
            src={user.avatar}
            alt=""
            className="h-12 w-12 rounded-full object-cover cursor-pointer"
            onClick={() => {
              navigate(`/profile/${user.username}`);
              setQuery("");
            }}
          />
          <div
            onClick={() => {
              navigate(`/profile/${user.username}`);
              setQuery("");
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
        </div>
      ))}
    </div>
  );
}
