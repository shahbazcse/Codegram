export default function SortPostsBar({ sortBy, setSortBy }) {
  const byLatest = sortBy === "latest";
  const byTrending = sortBy === "trending";
  return (
    <div className="bg-[#25272ec2] m-4 flex py-2 justify-evenly rounded-md">
      <div
        onClick={() => setSortBy("latest")}
        className={`hover:bg-slate-700 ${
          byLatest && "font-bold bg-slate-700"
        } cursor-pointer py-1 px-4 rounded-full`}
      >
        Latest
      </div>
      <div className="flex items-center justify-center text-2xl">|</div>
      <div
        onClick={() => setSortBy("trending")}
        className={`hover:bg-slate-700 ${
          byTrending && "font-bold bg-slate-700"
        }  cursor-pointer py-1 px-4 rounded-full`}
      >
        Trending
      </div>
    </div>
  );
}
