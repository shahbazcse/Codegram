import styles from "../../Modals/Modal.module.css";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import "react-select-search/style.css";
import { useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";
import VerifiedIcon from "@mui/icons-material/Verified";
import { useNavigate } from "react-router-dom";
import { RiCloseLine } from "react-icons/ri";

export default function SearchModalMobile({ setSearchModal }) {
  const navigate = useNavigate();

  const [query, setQuery] = useState("");

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
    <>
      <div className={styles.darkBG} onClick={() => setSearchModal(false)} />
      <div className={styles.centered}>
        <div className={`h-[380px] w-[380px] ${styles.modal}`}>
          <div className={`${styles.modalHeader}`}>
            <div className={styles.heading}>Search User</div>
            <div
              onClick={() => setSearchModal(false)}
              className="mx-4 hover:bg-slate-700 cursor-pointer rounded-full"
            >
              <RiCloseLine className="text-3xl" />
            </div>
          </div>
          <div className="flex-col text-start p-2 mx-4 text-md gap-1">
            <div className="bg-[#16181C] flex gap-2 rounded-full py-2 px-4 text-white items-center text-[20px] sticky top-1 z-10">
              <SearchIcon />
              <input
                className="bg-transparent w-[100%] outline-none"
                type="text"
                placeholder="Search User"
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
            {query && (
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
                  >
                    <img
                      src={user.avatar}
                      alt=""
                      className="h-12 w-12 rounded-full object-cover cursor-pointer"
                      onClick={() => {
                        navigate(`/profile/${user.username}`);
                        setSearchModal(false);
                      }}
                    />
                    <div
                      onClick={() => {
                        navigate(`/profile/${user.username}`);
                        setSearchModal(false);
                      }}
                      className="flex flex-col grow my-1 cursor-pointer"
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
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
