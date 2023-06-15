import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar() {
  return (
    <div className="bg-[#16181C] flex gap-2 rounded-full py-2 px-4 text-white items-center text-[20px] sticky top-1 z-10">
      <SearchIcon />
      <input
        className="bg-transparent w-[100%] outline-none"
        type="text"
        placeholder="Search User"
      />
    </div>
  );
}
