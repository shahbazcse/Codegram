import UserFeed from "../components/Feeds/UserFeed";
import { useContext, useState, useEffect } from "react";
import { AppContext } from "../contexts/AppContext";
import VerifiedIcon from "@mui/icons-material/Verified";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { AuthContext } from "../contexts/AuthContext";
import EditProfileModal from "../components/Modals/UserProfileModals/EditProfileModal";
import male from "../assets/avatars/male.png";
import FollowModal from "../components/Modals/FollowModal/FollowModal";
import { useParams, Link } from "react-router-dom";
import {
  doFollowUser,
  doUnfollowUser,
  editUserProfile,
  getAllUsers,
} from "../services/UserService";
import OptionsModal from "../components/Modals/UserProfileModals/OptionsModal";

export default function Profile() {
  const { username: paramsUsername } = useParams();

  const {
    state: { token, user: authUser },
    dispatch,
  } = useContext(AuthContext);

  const {
    state: { posts, allUsers },
    dispatch: AppDispatch,
  } = useContext(AppContext);

  const currentUser =
    paramsUsername === authUser.username
      ? authUser
      : allUsers.find(({ username }) => username === paramsUsername);

  const userFeedPosts = [
    ...posts.filter(({ username }) => username === currentUser.username),
  ];

  const [openModal, setOpenModal] = useState(false);
  const [followModal, setFollowModal] = useState({ open: false, type: "" });
  const [optionsModal, setOptionsModal] = useState(false);

  const handleEditProfile = () => {
    setOpenModal(!openModal);
  };

  const handleFollowUser = async (userId) => {
    const response = await doFollowUser(token, userId);
    const data = {
      ...authUser,
      following: [...authUser.following, response.followUser],
    };
    const { user: updatedUser } = await editUserProfile(token, data);
    dispatch({ type: "setUser", payload: updatedUser });
    const updatedUsers = await getAllUsers();
    AppDispatch({ type: "setAllUsers", payload: updatedUsers });
  };

  const handleUnfollowUser = async (userId) => {
    const response = await doUnfollowUser(token, userId);
    const data = {
      ...authUser,
      following: [
        ...authUser?.following?.filter(
          ({ username }) => username !== response.followUser.username
        ),
      ],
    };
    const { user: updatedUser } = await editUserProfile(token, data);
    dispatch({ type: "setUser", payload: updatedUser });
    const updatedUsers = await getAllUsers();
    AppDispatch({ type: "setAllUsers", payload: updatedUsers });
  };

  const userAbout = !currentUser?.about ? (
    <span className="text-slate-600">Write something about yourself</span>
  ) : (
    currentUser.about
  );
  const userDP = !currentUser?.avatar ? male : currentUser.avatar;

  const isFollowing = authUser.following.find(
    (p) => p.username === currentUser.username
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="">
      <div className="sm:sticky top-0 bg-black text-center justify-between font-medium text-[20px] px-4 py-2">
        User Profile
      </div>
      <div className=" flex items-center justify-center m-4 mt-2 p-4 border-solid border-[1px] rounded-[8px] border-gray-400 text-white">
        <div className="text-[#d9d9d9] flex-col">
          <div className="flex mb-2 items-center justify-center">
            <img src={userDP} alt="" className="h-20 w-20 rounded-full" />
          </div>
          <div className="items-center justify-center flex-col">
            <h4 className="font-bold flex items-center justify-center">
              {currentUser?.firstName} {currentUser?.lastName}
              {currentUser.isVerified && (
                <VerifiedIcon
                  className="text-blue-500 ml-1"
                  fontSize="medium"
                />
              )}
            </h4>
            <p className="text-[#6e767d] flex items-center justify-center">
              @{currentUser?.username}
            </p>
          </div>
          {currentUser.username === authUser.username ? (
            <div className="flex-col items-center justify-center">
              <div className="flex items-center justify-center">
                <div
                  onClick={() => handleEditProfile()}
                  className="bg-blue-600 hover:bg-blue-700 rounded-md p-1.5  mt-3 cursor-pointer"
                >
                  Edit Profile
                </div>
                <div
                  onClick={() => setOptionsModal(true)}
                  className="sm:hidden ml-4 mt-3 p-1 bg-slate-800 rounded-full"
                >
                  <MoreVertIcon />
                </div>
                {optionsModal && (
                  <OptionsModal setOptionsModal={setOptionsModal} />
                )}
              </div>
              <div className="sm:hidden flex items-center justify-center mt-4">
                <Link
                  to="/verified"
                  className="px-3 py-2 text-black text-lg bg-blue-600 hover:bg-blue-700 rounded-full"
                >
                  Get Verified
                </Link>
              </div>
            </div>
          ) : (
            <button
              className="bg-white hover:bg-gray-300 text-black m-auto w-24 rounded-full p-1.5  mt-3 flex items-center justify-center cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                !isFollowing
                  ? handleFollowUser(currentUser._id)
                  : handleUnfollowUser(currentUser._id);
              }}
            >
              {!isFollowing ? "Follow" : "Unfollow"}
            </button>
          )}
          {openModal && (
            <EditProfileModal
              setOpenModal={setOpenModal}
              userDP={userDP}
              about={currentUser?.about}
              link={currentUser?.portfolioURL}
            />
          )}
          <div className="">
            <h1 className="m-2 font-bold">About</h1>
            <div className="bg-[#16181C] w-[20rem] sm:w-[30rem] p-2 rounded-md">
              {userAbout}
            </div>
            <h1 className="m-2 font-bold">Link</h1>
            <div className="bg-[#16181C] p-2 rounded-md m-auto flex items-center justify-center">
              {currentUser?.portfolioURL ? (
                <a
                  href={currentUser?.portfolioURL}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {currentUser?.portfolioURL}
                </a>
              ) : (
                <span className="text-slate-600">Add your portfolio link</span>
              )}
            </div>
          </div>
          <div className="flex p-2 mt-2 rounded-md text-center justify-evenly">
            <div className="items-center justify-center flex-col">
              <h4 className="font-bold flex items-center justify-center">
                {currentUser?.following?.length | "0"}
              </h4>
              <div
                onClick={() =>
                  setFollowModal({ open: true, type: "Following" })
                }
                className="text-white flex items-center justify-center hover:underline cursor-pointer"
              >
                Following
              </div>
              {followModal.open && (
                <FollowModal
                  setFollowModal={setFollowModal}
                  type={followModal.type}
                />
              )}
            </div>
            <div className="items-center justify-center flex-col">
              <h4 className="font-bold flex items-center justify-center">
                {userFeedPosts.length}
              </h4>
              <p className="text-white flex items-center justify-center">
                Posts
              </p>
            </div>
            <div className="items-center justify-center flex-col">
              <h4 className="font-bold flex items-center justify-center">
                {currentUser.followers.filter(
                  (p) => p.username !== paramsUsername && { ...p }
                ).length | "0"}
              </h4>
              <div
                onClick={() =>
                  setFollowModal({ open: true, type: "Followers" })
                }
                className="text-white flex items-center justify-center hover:underline cursor-pointer"
              >
                Followers
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className="m-4 font-medium text-lg">Latest Posts</h1>
      <UserFeed userFeedPosts={userFeedPosts} />
    </div>
  );
}
