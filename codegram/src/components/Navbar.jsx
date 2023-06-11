import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import AdbIcon from '@mui/icons-material/Adb';

export default function Navbar() {
  const signOut = console.log("Signed Out");
  return (
    <div className="flex bg-blue-800 p-3">
      <div className="flex-start p-2 font-bold">
        <Link to="/">
          <AdbIcon fontSize="large" />
          <span>Codegram</span>
        </Link>
      </div>
      <div className="bg-[#16181C] flex gap-4 rounded-full py-2 px-4 text-white items-center text-[15px] sticky top-1 z-10">
        <SearchIcon />
        <input
          className="bg-transparent w-[100%] outline-none"
          type="text"
          placeholder="Search User"
        />
      </div>
      <div
        className="text-[#d9d9d9] flex items-center justify-center mt-auto hoverEffect xl:ml-auto xl:-mr-5 px-10 py-2 md: justifyContent-end"
        onClick={signOut}
      >
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS9Vu2kHRkEn3qBiH1szO1Qbxt4sP59Lt66Zu-O8tqpxqysYKfeyraCeAC1L0nLonfRjA&usqp=CAU"
          alt=""
          className="h-10 w-10 rounded-full xl:mr-2.5"
        />
        <div className=" xl:inline leading-5 pl-2">
          <h4 className="font-bold">{/*{session?.user?.name}*/}User</h4>
          <p className="text-[#6e767d]">{/*@{session?.user?.tag}*/}@user</p>
        </div>
      </div>
    </div>
  );
}
