import Feed from "../components/Feed";
import NewPost from "../components/NewPost";

export default function Home() {
  return (
    <div>
      <div className="sticky top-0 bg-black text-center justify-between font-medium text-[20px] px-4 py-2">
        Home
      </div>
      <NewPost />
      <Feed />
    </div>
  );
}
