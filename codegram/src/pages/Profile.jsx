import UserFeed from "../components/Feeds/UserFeed";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../contexts/AppContext";
import VerifiedIcon from "@mui/icons-material/Verified";
import { AuthContext } from "../contexts/AuthContext";
import EditProfileModal from "../components/Modals/UserProfileModals/EditProfileModal";
import male from "../assets/avatars/male.png";
import axios from "axios";

export default function Profile() {
  const {
    state: { isVerified },
  } = useContext(AppContext);

  const {
    state: {
      user: { _id },
    },
  } = useContext(AuthContext);

  const [openModal, setOpenModal] = useState(false);

  const [user, setUser] = useState(null);

  const handleEditProfile = () => {
    setOpenModal(!openModal);
  };

  const getUserDetails = async () => {
    const response = await axios.get(`/api/users/${_id}`);
    setUser(response.data.user);
  };

  useEffect(() => {
    getUserDetails();
  });

  const userAbout = !user?.about
    ? "Write something about yourself"
    : user.about;
  const userDP = !user?.avatar ? male : user.avatar;

  return (
    <div className="">
      <div className="sticky top-0 bg-black text-center justify-between font-medium text-[20px] px-4 py-2">
        User Profile
      </div>
      <div className=" flex items-center justify-center m-4 mt-2 p-4 border-solid border-[1px] rounded-[8px] border-gray-400 text-white">
        <div className="text-[#d9d9d9] flex-col">
          <div className="flex mb-2 items-center justify-center">
            <img src={userDP} alt="" className="h-20 w-20 rounded-full" />
          </div>
          <div className="items-center justify-center flex-col">
            <h4 className="font-bold flex items-center justify-center">
              {user?.firstName} {user?.lastName}
              {isVerified && (
                <VerifiedIcon
                  className="text-blue-500 ml-1"
                  fontSize="medium"
                />
              )}
            </h4>
            <p className="text-[#6e767d] flex items-center justify-center">
              @{user?.username}
            </p>
          </div>
          <div
            onClick={() => handleEditProfile()}
            className="bg-blue-700 m-auto w-24 rounded-md p-1.5  mt-3 flex items-center justify-center cursor-pointer"
          >
            Edit Profile
          </div>
          {openModal && (
            <EditProfileModal
              setOpenModal={setOpenModal}
              userDP={userDP}
              about={user?.about}
              link={user?.portfolioURL}
              getUserDetails={getUserDetails}
            />
          )}
          <h1 className="m-2 font-bold">About</h1>
          <div className="bg-[#16181C] p-2 rounded-md">{userAbout}</div>
          <h1 className="m-2 font-bold">Link</h1>
          <div className="bg-[#16181C] p-2 rounded-md m-auto flex items-center justify-center">
            {user?.portfolioURL ? (
              <a href="#" className="text-red-600 hover:underline">
                {user?.portfolioURL}
              </a>
            ) : (
              <span>Add your portfolio link</span>
            )}
          </div>
          <div className="flex p-2 mt-2 rounded-md text-center justify-evenly">
            <div className="items-center justify-center flex-col">
              <h4 className="font-bold flex items-center justify-center">0</h4>
              <p className="text-white flex items-center justify-center">
                Following
              </p>
            </div>
            <div className="items-center justify-center flex-col">
              <h4 className="font-bold flex items-center justify-center">2K</h4>
              <p className="text-white flex items-center justify-center">
                Posts
              </p>
            </div>
            <div className="items-center justify-center flex-col">
              <h4 className="font-bold flex items-center justify-center">
                37.3K
              </h4>
              <p className="text-white flex items-center justify-center">
                Followers
              </p>
            </div>
          </div>
        </div>
      </div>
      <h1 className="m-4 font-medium text-lg">Your Posts</h1>
      <UserFeed />
    </div>
  );
}
