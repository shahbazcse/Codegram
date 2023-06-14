export default function SortPostsBar({ sortBy, setSortBy }) {
  const byLatest = sortBy === "latest";
  const byTrending = sortBy === "trending";
  return (
    <div className="bg-[#25272ec2] p-2 m-4 flex gap-4 justify-evenly rounded-md">
      <div
        onClick={() => setSortBy("latest")}
        className={`hover:text-blue-600 ${
          byLatest && "font-bold text-blue-600 underline"
        } mt-1 cursor-pointer`}
      >
        Latest
      </div>
      <div className="text-2xl">|</div>
      <div
        onClick={() => setSortBy("trending")}
        className={`hover:text-red-400 ${
          byTrending && "font-bold text-red-400 underline"
        } mt-1 cursor-pointer`}
      >
        Trending
      </div>
    </div>
  );
}
