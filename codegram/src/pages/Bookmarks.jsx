import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import Post from '../components/Post';

export default function Booksmarks() {
  const {
    state: { bookmarks },
  } = useContext(AppContext);

  const sortedPost = bookmarks.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );
  return (
    <div>
      <div className="sticky top-0 bg-black text-center justify-between font-medium text-[20px] px-4 py-2">
        Bookmarks
      </div>
      {sortedPost.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </div>
  );
}
