import { Link, Navigate } from "react-router-dom";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import logo from "../assets/messages.png";
import SidebarLink from "./SidebarLink";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import LogoutIcon from "@mui/icons-material/Logout";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddCircleIcon from "@mui/icons-material/AddCircle";

export default function Sidebar() {
  const signOut = console.log("Signed Out");
  return (
    <div className="hidden sm:flex flex-col items-center xl:items-start xl:w-[340px] p-4 fixed h-full border-r border-gray-400 pr-8 xl:pr-8">
      <div className="flex items-center justify-center w-14 h-14 hoverEffect p-0 xl:mb-10 xl:ml-28">
        <Link to="/">
          <div className="flex pt-22">
            <img src={logo} alt="" height="44px" width="44px" />
            <span className="hidden lg:inline text-white text-3xl font-logo1 ml-3">Codegram</span>
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

        <div onClick={() => console.log("Logged Out")}>
          <SidebarLink
            className="hidden xl:inline ml-auto bg-[#1d9bf0] text-white rounded-full w-52 h-[52px] text-lg font-bold hover:bg-[#1a8cd8]"
            text="Logout"
            Icon={LogoutIcon}
          />
        </div>
        <Link to="/profile">
          <div className="text-[#d9d9d9] flex items-center justify-center mt-auto hover:bg-slate-800 hover:rounded-full cursor-pointer md:p-2 md:mt-4 xl:ml-auto xl:-mr-5 xl:mt-3 xl:pr-0 px-4 py-2">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS9Vu2kHRkEn3qBiH1szO1Qbxt4sP59Lt66Zu-O8tqpxqysYKfeyraCeAC1L0nLonfRjA&usqp=CAU"
              alt=""
              className="h-10 w-10 rounded-full xl:mr-2.5"
            />
            <div className="hidden mr-24 xl:inline leading-5">
              <h4 className="font-bold">{/*{session?.user?.name}*/}User</h4>
              <p className="text-[#6e767d]">{/*@{session?.user?.tag}*/}@user</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
