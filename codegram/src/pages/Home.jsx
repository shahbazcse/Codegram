import { useState } from "react";
import HomeFeed from "../components/Feeds/HomeFeed";
import NewPost from "../components/NewPost";
import SortPostsBar from "../components/SortPostsBar";
import SuggestedUserMobile from "../components/SuggestedUsers/SuggestedUserMobile";

export default function Home() {
  const [sortBy, setSortBy] = useState("latest");
  return (
    <div >
      <div className="sm:sticky top-0 bg-black text-center justify-between font-medium text-[20px] px-4 py-2">
        Home
      </div>
      <NewPost />
      <SuggestedUserMobile />
      <SortPostsBar sortBy={sortBy} setSortBy={setSortBy} />
      <HomeFeed sortBy={sortBy} />
    </div>
  );
}
