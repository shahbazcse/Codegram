import { useContext } from "react";
import Post from "../Post";
import { AppContext } from "../../contexts/AppContext";

export default function ExploreFeed() {
  const {
    state: { posts },
  } = useContext(AppContext);

  const sortedPost = posts.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  return (
    <>
      {!sortedPost.length && (
        <div className="flex items-center justify-center h-[18rem] sm:h-0 sm:mt-[20rem] m-auto font-bold text-2xl">
          No Posts
        </div>
      )}
      {sortedPost.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </>
  );
}
