import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

export default function SortPostsBar() {
  const { dispatch } = useContext(AppContext);
  return (
    <div className="bg-[#25272ec2] p-2 m-4 flex gap-4 justify-evenly rounded-md">
      <div
        onClick={() => dispatch({ type: "sortPosts", payload: "latest" })}
        className="hover:text-blue-600 mt-1 cursor-pointer"
      >
        Latest
      </div>
      <div className="text-2xl">|</div>
      <div
        onClick={() => dispatch({ type: "sortPosts", payload: "trending" })}
        className="hover:text-red-400 mt-1 cursor-pointer"
      >
        Trending
      </div>
    </div>
  );
}
