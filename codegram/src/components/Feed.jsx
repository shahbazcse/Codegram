import { posts } from "../backend/db/posts";
import Post from "../components/Post";

export default function Feed() {
  return (
    <>
      {posts.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </>
  );
}
