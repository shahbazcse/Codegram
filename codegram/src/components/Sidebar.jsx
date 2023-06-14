import { Link } from "react-router-dom";
import logo from "../assets/messages.png";
import SidebarLink from "./SidebarLink";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import LogoutIcon from "@mui/icons-material/Logout";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import SearchIcon from "@mui/icons-material/Search";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";

export default function Sidebar({ drawer, setDrawer }) {
  const { setIsLoggedIn } = useContext(AuthContext);
  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  return (
    <div className={`${drawer ? "ml-[8px] mt-0" : "hidden"} sm:flex flex-col items-center xl:items-start xl:w-[340px] p-4 fixed h-full pr-8 xl:pr-8`}>
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

        <div onClick={() => console.log("New Post Created")}>
          <SidebarLink
            className="hidden xl:inline ml-auto bg-[#1d9bf0] text-white rounded-full w-52 h-[52px] text-lg font-bold hover:bg-[#1a8cd8]"
            text="Create Post"
            Icon={AddCircleIcon}
          />
        </div>
        <div onClick={() => console.log("Search User")} className="md:hidden">
          <SidebarLink
            className="hidden xl:inline ml-auto bg-[#1d9bf0] text-white rounded-full w-52 h-[52px] text-lg font-bold hover:bg-[#1a8cd8]"
            text=""
            Icon={SearchIcon}
          />
        </div>
        <div className="">
          <div onClick={handleLogout} className="xl:mt-96 sm:mt-[800%]">
            <SidebarLink text="Logout" Icon={LogoutIcon} />
          </div>
          <Link
            to="/profile"
            className="text-[#d9d9d9] mt-4 flex items-center justify-center xl:justify-start hover:bg-slate-800 hover:rounded-full px-1 py-1 w-fit"
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS9Vu2kHRkEn3qBiH1szO1Qbxt4sP59Lt66Zu-O8tqpxqysYKfeyraCeAC1L0nLonfRjA&usqp=CAU"
              alt=""
              className="flex h-10 w-10 rounded-full xl:mr-2.5"
            />
            <div className="hidden mr-4 xl:inline leading-5">
              <h4 className="font-bold">
                {/*{session?.user?.name}*/}Shahbaz Ahmad
              </h4>
              <p className="text-[#6e767d]">
                {/*@{session?.user?.tag}*/}@shahbazahmad
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
