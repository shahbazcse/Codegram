import Feed from "../components/Feed";
import NewPost from "../components/NewPost";

export default function Home() {
  return (
    <div>
      <div className="sticky top-0 bg-black text-center justify-between font-medium text-[20px] px-4 py-2">
        Home
      </div>
      <NewPost />
        <div className="bg-[#25272ec2] p-2 m-4 flex gap-4 justify-evenly rounded-md">
          <div onClick={() => console.log("Displaying Latest Posts")} className="hover:text-blue-600 mt-1 cursor-pointer">Latest</div>
          <div className="text-2xl">|</div>
          <div onClick={() => console.log("Displaying Trending Posts")} className="hover:text-red-400 mt-1 cursor-pointer">Trending</div>
        </div>
      <Feed />
    </div>
  );
}
