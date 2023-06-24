import styles from "../../Modals/Modal.module.css";
import { useContext, useEffect, useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import { doEditPost, getPostDetails } from "../../../services/PostService";
import { AppContext } from "../../../contexts/AppContext";
import { AuthContext } from "../../../contexts/AuthContext";

export function EditPostModal({ setEditModal, post }) {
  const [changePost, setChangePost] = useState(post);

  const {
    state: { token },
  } = useContext(AuthContext);

  const { dispatch } = useContext(AppContext);

  const handleEditPost = async () => {
    setEditModal(false);
    const posts = await doEditPost(post._id, changePost, token);
    changePost.content.length && dispatch({ type: "setPosts", payload: posts });
  };

  return (
    <>
      <div className={styles.darkBG} onClick={() => setEditModal(false)} />
      <div className={styles.centered}>
        <div className={`h-[324px] w-[512px] ${styles.modal}`}>
          <div className={`ml-40 ${styles.modalHeader}`}>
            <div className={`${styles.heading}`}>Edit Post</div>
            <div
              onClick={() => setEditModal(false)}
              className="mx-4 hover:bg-slate-700 cursor-pointer rounded-full"
            >
              <RiCloseLine className="text-3xl" />
            </div>
          </div>
          <div className="flex flex-col justify-center text-center px-8 py-1 mx-4 text-md gap-1">
            <textarea
              type="text"
              value={changePost.content}
              placeholder="What's Happening?!"
              className="flex mb-4 h-44 p-6 text-white text-md rounded border border-slate-700 bg-black focus:border-blue-400 focus:outline"
              onChange={(e) =>
                setChangePost({ ...changePost, content: e.target.value })
              }
            />
            <div
              onClick={() => {
                handleEditPost();
              }}
              className="m-auto mt-2 py-2 px-6 text-lg bg-white text-black hover:bg-slate-300 cursor-pointer rounded-full"
            >
              Save
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
