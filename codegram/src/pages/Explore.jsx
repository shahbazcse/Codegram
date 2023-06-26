import ExploreFeed from "../components/Feeds/ExploreFeed";
import SearchBar from "../components/SearchBar";

export default function Explore() {
  return (
    <div >
      <div className="sm:sticky top-0 bg-black text-center justify-between font-medium text-[20px] px-4 py-2">
        Explore
      </div>
      <div className="sm:hidden mx-4">
        <SearchBar />
      </div>
      <ExploreFeed />
    </div>
  );
}
