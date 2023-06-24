import { useContext, useState } from "react";
import { createPost } from "../services/PostService";
import { AuthContext } from "../contexts/AuthContext";
import { AppContext } from "../contexts/AppContext";

export default function NewPost() {
  const [newPost, setNewPost] = useState("");

  const {
    state: { token },
  } = useContext(AuthContext);

  const { dispatch } = useContext(AppContext);

  const handlePost = async () => {
    const post = {
      content: newPost,
    };
    const posts = await createPost(token, post);
    dispatch({ type: "setPosts", payload: posts });
    setNewPost("");
  };

  return (
    <div className={`mt-4 flex flex-col gap-2 px-4`}>
      <div className="bg-[#16181C] flex gap-2 rounded-md py-2 px-4 text-white items-center text-[20px] sticky top-1 z-10">
        <textarea
          className="grow resize-none bg-transparent w-[100%] outline-none text-[16px] h-24"
          type="text"
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          placeholder="What's Happening?!"
        />
      </div>
      <div className="ml-auto flex items-center gap-4">
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-lg mt-2 py-1 px-6 rounded-full"
          onClick={() => {
            newPost.length && handlePost();
          }}
        >
          Post
        </button>
      </div>
    </div>
  );
}
