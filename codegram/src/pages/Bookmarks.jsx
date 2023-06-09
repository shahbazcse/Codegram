import { useContext, useEffect } from "react";
import { AppContext } from "../contexts/AppContext";
import Post from "../components/Post";

export default function Booksmarks() {
  const {
    state: { bookmarks },
  } = useContext(AppContext);

  const sortedPost = bookmarks.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="">
      <div className="sm:sticky top-0 bg-black text-center justify-between font-medium text-[20px] px-4 py-2">
        Bookmarks
      </div>
      {!sortedPost.length && (
        <div className="flex items-center justify-center h-[52rem] sm:h-0 sm:mt-[20rem] m-auto font-bold text-2xl">
          No Posts
        </div>
      )}
      <div>
        {sortedPost.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
}
