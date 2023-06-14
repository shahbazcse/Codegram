import { useContext } from "react";
import Post from "../Post";
import { AppContext } from "../../contexts/AppContext";

export default function UserFeed() {
  const {
    state: { posts },
  } = useContext(AppContext);

  const userFeedPosts = [...posts];

  const sortedPost = userFeedPosts.sort(
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