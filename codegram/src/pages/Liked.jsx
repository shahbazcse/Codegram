import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import Post from "../components/Post";

export default function Liked() {
  const {
    state: { liked },
  } = useContext(AppContext);

  const sortedPost = liked.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );
  return (
    <div>
      <div className="sm:sticky top-0 bg-black text-center justify-between font-medium text-[20px] px-4 py-2">
        Liked Posts
      </div>
      {!sortedPost.length && (
        <div className="flex items-center justify-center h-[52rem] sm:h-0 sm:mt-[20rem] m-auto font-bold text-2xl">
          No Posts
        </div>
      )}
      <div className="overflow-auto h-screen">
        {sortedPost.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
}
