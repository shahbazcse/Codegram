import SidebarLink from "./SidebarLink";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function Sidebar() {

  return (
    <div className="hidden sm:flex flex-col items-center xl:items-start xl:w-[340px] p-2 fixed h-full border-r border-gray-400 pr-0 xl:pr-8">
      
      <div className="space-y-4 mt-4 mb-2.5 xl:ml-24">
        <SidebarLink to="/" text="Home" Icon={HomeIcon} />
        <SidebarLink to="/explore" text="Explore" Icon={ExploreIcon} />
        <SidebarLink to="/bookmarks" text="Bookmarks" Icon={BookmarksIcon} />
        <SidebarLink to="/liked" text="Liked Posts" Icon={FavoriteIcon}/>
        <button onClick={() => console.log("New Post Created")}>
          <SidebarLink
            className="hidden xl:inline ml-auto bg-[#1d9bf0] text-white rounded-full w-52 h-[52px] text-lg font-bold hover:bg-[#1a8cd8]"
            text="Post"
            Icon={AddCircleIcon}
          />
        </button>
        {/* <Link to="/home">Home</Link>
        <Link to="/explore">Explore</Link>
        <Link to="/bookmarks">Bookmarks</Link>
        <Link to="/liked">Liked Posts</Link> */}
      </div>
    </div>
  );
}
