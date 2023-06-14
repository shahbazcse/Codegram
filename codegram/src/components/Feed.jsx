import { useContext } from "react";
import Post from "../components/Post";
import { AppContext } from "../contexts/AppContext";

export default function Feed() {
  const {
    state: { posts },
  } = useContext(AppContext);
  return (
    <>
      {posts.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </>
  );
}
