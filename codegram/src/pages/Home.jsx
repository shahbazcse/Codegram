import Feed from "../components/Feed";
import NewPost from "../components/NewPost";
import SortPostsBar from "../components/SortPostsBar";

export default function Home() {
  return (
    <div>
      <div className="sticky top-0 bg-black text-center justify-between font-medium text-[20px] px-4 py-2">
        Home
      </div>
      <NewPost />
      <div className="md:hidden flex-col bg-[#25272ec2] p-2 m-4 mb-0 h-64 flex gap-3 rounded-md">
        <div className="text-[20px] font-bold text-center">Suggested Users</div>
        <div className="flex gap-3">
          <div className="flex border-solid rounded-[20px] bg-[#16181C] h-48 w-36 p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            dolorem autem eveniet enim ipsam
          </div>
          <div className="flex border-solid rounded-[20px] bg-[#16181C] h-48 w-36 p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            dolorem autem eveniet enim ipsam
          </div>
          <div className="flex border-solid rounded-[20px] bg-[#16181C] h-48 w-36 p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            dolorem autem eveniet enim ipsam
          </div>
        </div>
      </div>
      <SortPostsBar />
      <Feed />
    </div>
  );
}
