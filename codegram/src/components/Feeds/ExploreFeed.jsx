import { useContext } from "react";
import Post from "../Post";
import { AppContext } from "../../contexts/AppContext";

export default function ExploreFeed() {
  const {
    state: { posts },
  } = useContext(AppContext);

  const exploreFeedPosts = [...posts];

  const sortedPost = exploreFeedPosts.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  return (
    <>
      {sortedPost.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </>
  );
}
