import { useContext } from "react";
import Post from "../Post";
import { AppContext } from "../../contexts/AppContext";
import { AuthContext } from "../../contexts/AuthContext";

export default function UserFeed() {
  const {
    state: { posts },
  } = useContext(AppContext);

  const {
    state: { user },
  } = useContext(AuthContext);

  const userFeedPosts = [
    ...posts.filter(({ username }) => username === user.username),
  ];

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
