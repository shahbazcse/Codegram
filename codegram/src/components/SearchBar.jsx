import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import "react-select-search/style.css";
import SearchUserModal from "./Modals/SearchModal/SearchUserModal";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  return (
    <div className="flex-col text-white">
      <div className="bg-[#16181C] flex gap-2 rounded-full py-2 px-4 text-white items-center text-[20px] sticky top-1 z-10">
        <SearchIcon />
        <input
          className="bg-transparent w-[100%] outline-none"
          type="text"
          value={query}
          placeholder="Search User"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      {query && <SearchUserModal query={query} setQuery={setQuery} />}
    </div>
  );
}
