import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import Post from "../Post";
import { AuthContext } from "../../contexts/AuthContext";

export default function Feed({ sortBy }) {
  const {
    state: { user },
  } = useContext(AuthContext);

  const {
    state: { posts },
  } = useContext(AppContext);

  const currentUserPosts = posts.filter(
    ({ username }) => username === user.username
  );

  const followingUserPosts = posts.filter(({ username }) =>
    user.following.find((p) => p.username === username)
  );

  const homeFeedPosts = [...currentUserPosts, ...followingUserPosts];

  const byLatest = sortBy === "latest";
  const byTrending = sortBy === "trending";
  const sortedPost = byLatest
    ? homeFeedPosts.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      )
    : byTrending
    ? homeFeedPosts.sort((a, b) => b.likes.likeCount - a.likes.likeCount)
    : homeFeedPosts;

  return (
    <>
      {sortedPost.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </>
  );
}
