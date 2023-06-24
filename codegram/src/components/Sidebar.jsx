import { Link } from "react-router-dom";
import logo from "../assets/logos/messages.png";
import SidebarLink from "./SidebarLink";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import LogoutIcon from "@mui/icons-material/Logout";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import SearchIcon from "@mui/icons-material/Search";
import MovingIcon from "@mui/icons-material/Moving";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import { useContext, useState } from "react";
import VerifiedIcon from "@mui/icons-material/Verified";
import { AuthContext } from "../contexts/AuthContext";
import { CreatePostModal } from "./Modals/PostModal/CreatePostModal";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import male from "../assets/avatars/male.png";
import SearchModalMobile from "./Modals/SearchModal/SearchModalMobile";

export default function Sidebar({ drawer, setDrawer }) {
  const {
    state: { user },
    dispatch,
  } = useContext(AuthContext);

  const [createModal, setCreateModal] = useState(false);
  const [searchModal, setSearchModal] = useState(false);

  const handleLogout = () => {
    dispatch({ type: "setToken", payload: null });
  };

  const userAvatar = user.avatar ? user.avatar : male;

  return (
    <div
      className={`${
        drawer ? "ml-[8px] mt-0" : "hidden"
      } sm:flex flex-col items-center xl:items-start xl:w-[380px] p-4 fixed h-full pr-8 xl:pr-8`}
    >
      {createModal && <CreatePostModal setCreateModal={setCreateModal} />}
      {searchModal && <SearchModalMobile setSearchModal={setSearchModal} />}
      {drawer && (
        <div
          className="sm:hidden mb-8 font-light text-6xl px-2 cursor-pointer text-red-500"
          onClick={() => setDrawer(false)}
        >
          &times;
        </div>
      )}
      <div className="flex items-center justify-center w-14 h-14 hoverEffect p-0 xl:mb-10 xl:ml-28">
        <Link to="/">
          <div className="flex pt-22">
            <img src={logo} alt="" height="44px" width="44px" />
            <span className="hidden xl:inline text-white text-3xl font-logo1 ml-3">
              Codegram
            </span>
          </div>
        </Link>
      </div>
      <div className="space-y-4 mt-4 mb-2.5 xl:ml-24">
        <SidebarLink to="/" text="Home" Icon={HomeIcon} />
        <SidebarLink to="/explore" text="Explore" Icon={ExploreIcon} />
        <SidebarLink to="/bookmarks" text="Bookmarks" Icon={BookmarksIcon} />
        <SidebarLink to="/liked" text="Liked Posts" Icon={FavoriteIcon} />
        <SidebarLink text="Trending" to="/trending" Icon={MovingIcon} />
        <SidebarLink
          text="Verified"
          to="/verified"
          Icon={VerifiedOutlinedIcon}
        />
        <SidebarLink text="About" to="/about" Icon={InfoOutlinedIcon} />

        <div onClick={() => setCreateModal(true)}>
          <Link className="text-[#d9d9d9] flex items-center justify-center xl:justify-start text-xl space-x-3 px-4 xl:py-2 pb-3 w-fit">
            <span className="xl:hidden">
              <AddCircleIcon />
            </span>
            <span className="hidden xl:inline px-12 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-full">
              Post
            </span>
          </Link>
        </div>

        <div onClick={() => setSearchModal(true)} className="md:hidden">
          <SidebarLink text="" Icon={SearchIcon} />
        </div>
        <div className="">
          <div
            onClick={() => handleLogout()}
            className="xl:mt-48 md:mt-[500%] sm:mt-[400%] mt-[260%]"
          >
            <SidebarLink text="Logout" Icon={LogoutIcon} />
          </div>
          <Link
            to={`/profile/${user?.username}`}
            className="text-[#d9d9d9] mt-4 flex items-center justify-center xl:justify-start hover:bg-slate-800 hover:rounded-full px-1 py-1 w-fit"
          >
            <img
              src={userAvatar}
              alt=""
              className="flex h-10 w-10 rounded-full xl:mr-2.5"
            />
            <div className="hidden mr-4 xl:inline leading-5">
              <div className="flex">
                <h4 className="font-bold">
                  {user?.firstName} {user?.lastName}
                </h4>
                {user?.isVerified && (
                  <VerifiedIcon
                    className="text-blue-500 ml-1"
                    fontSize="small"
                  />
                )}
              </div>
              <p className="text-[#6e767d]">@{user?.username}</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
