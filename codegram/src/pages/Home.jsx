import { useState } from "react";
import HomeFeed from "../components/Feeds/HomeFeed";
import NewPost from "../components/NewPost";
import SortPostsBar from "../components/SortPostsBar";
import SuggestedUserMobile from "../components/SuggestedUsers/SuggestedUserMobile";

export default function Home({ drawer, setDrawer }) {
  const [sortBy, setSortBy] = useState("");
  return (
    <div>
      <div className="flex sticky top-0 bg-black text-center justify-between font-medium text-[20px] px-4 py-2">
        {!drawer && (
          <div
            className="sm:hidden pt-2 pl-4 text-4xl cursor-pointer"
            onClick={() => setDrawer(true)}
          >
            &#9776;
          </div>
        )}
        <div className="flex justify-center items-center m-auto">Home</div>
      </div>
      <NewPost />
      <SuggestedUserMobile />
      <SortPostsBar sortBy={sortBy} setSortBy={setSortBy} />
      <HomeFeed sortBy={sortBy} />
    </div>
  );
}
