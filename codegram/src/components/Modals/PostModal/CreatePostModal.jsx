import styles from "../../Modals/Modal.module.css";
import { useContext, useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import { createPost } from "../../../services/PostService";
import { AuthContext } from "../../../contexts/AuthContext";
import { AppContext } from "../../../contexts/AppContext";

export function CreatePostModal({ setCreateModal }) {
  const [newPost, setNewPost] = useState("");

  const {
    state: { token },
  } = useContext(AuthContext);

  const { dispatch } = useContext(AppContext);

  const handlePost = async () => {
    setCreateModal(false);
    const post = {
      content: newPost,
    };
    const posts = await createPost(token, post);
    dispatch({ type: "setPosts", payload: posts });
  };

  return (
    <>
      <div className={styles.darkBG} onClick={() => setCreateModal(false)} />
      <div className={styles.centered}>
        <div className={`h-[336px] w-[512px] ${styles.modal}`}>
          <div className={`ml-40 ${styles.modalHeader}`}>
            <div className={`${styles.heading}`}>New Post</div>
            <div
              onClick={() => setCreateModal(false)}
              className="mx-4 hover:bg-slate-700 cursor-pointer rounded-full"
            >
              <RiCloseLine className="text-3xl" />
            </div>
          </div>
          <div className="flex flex-col justify-center text-center p-8 mx-4 text-md gap-1">
            <textarea
              type="text"
              value={newPost}
              placeholder="What's Happening?!"
              className="flex mb-4 py-2 px-6 text-lg text-white rounded border border-slate-700 bg-black focus:border-blue-400 focus:outline"
              onChange={(e) => setNewPost(e.target.value)}
            />
            <div
              onClick={handlePost}
              className="m-auto mt-2 py-2 px-6 text-lg bg-white text-black hover:bg-slate-300 cursor-pointer rounded-full"
            >
              Post
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
