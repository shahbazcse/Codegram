import {
  doLikePost,
  doRemoveLike,
  getBookmarks,
} from "../services/UserService";
import { useContext, useState } from "react";
import { BsChat } from "react-icons/bs";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaRegBookmark } from "react-icons/fa";
import { BsFillBookmarkFill } from "react-icons/bs";
import VerifiedIcon from "@mui/icons-material/Verified";
import EditNoteIcon from "@mui/icons-material/EditNote";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import { AuthContext } from "../contexts/AuthContext";
import axios from "axios";
import { AppContext } from "../contexts/AppContext";
import { useNavigate } from "react-router-dom";
import { EditPostModal } from "./Modals/PostModal/EditPostModal";
import { doDeletePost } from "../services/PostService";
import male from "../assets/avatars/male.png";
var rn = require("random-number");

var randomNumber = {
  min: 0,
  max: 1000,
  integer: true,
};

export default function Post({ post }) {
  const navigate = useNavigate();

  const {
    state: { token, user: authUser },
  } = useContext(AuthContext);

  const {
    state: { bookmarks, liked, allUsers },
    dispatch,
  } = useContext(AppContext);

  const [editModal, setEditModal] = useState(false);

  const likePost = async () => {
    const posts = await doLikePost(token, post._id);
    dispatch({ type: "setPosts", payload: posts });
    dispatch({ type: "setLikes" });
  };

  const removeLike = async () => {
    const posts = await doRemoveLike(token, post._id);
    dispatch({ type: "setPosts", payload: posts });
    dispatch({ type: "setLikes" });
  };

  const setBookmarks = async () => {
    const response = await getBookmarks({
      headers: { authorization: token },
    });
    dispatch({ type: "setBookmarks", payload: response.data.bookmarks });
  };

  const saveBookmark = async () => {
    axios.post(
      `/api/users/bookmark/${post._id}`,
      {},
      {
        headers: {
          authorization: token,
        },
      }
    );
    setBookmarks();
  };

  const removeBookmark = () => {
    axios.post(
      `/api/users/remove-bookmark/${post._id}`,
      {},
      {
        headers: {
          authorization: token,
        },
      }
    );
    setBookmarks();
  };

  const handleDeletePost = async () => {
    const posts = await doDeletePost(post._id, token);
    dispatch({ type: "setPosts", payload: posts });
  };

  const openModal = () => {
    console.log("opening model ");
  };

  const bookmarked = bookmarks.find(({ _id }) => _id === post._id);
  const isLiked = liked.find(({ _id }) => _id === post._id);

  const user =
    post.username === authUser.username
      ? authUser
      : allUsers.find(({ username }) => username === post.username);

  return (
    <div className="mt-4 border-t border-gray-500 px-4 pt-6 pb-4">
      {editModal && <EditPostModal setEditModal={setEditModal} post={post} />}
      <div className="grid grid-cols-[48px,1fr] gap-4">
        <div
          onClick={() => navigate(`/profile/${post.username}`)}
          className="cursor-pointer"
        >
          <img
            className="h-12 w-12 rounded-full object-cover"
            src={user?.avatar || male}
            alt=""
          />
        </div>

        <div>
          <div className="flex justify-between sm:flex gap-2">
            <div
              onClick={() => navigate(`/profile/${post.username}`)}
              className="flex gap-1 cursor-pointer"
            >
              <h1 className="font-medium">
                {user?.firstName} {user?.lastName}
                {user.isVerified && (
                  <VerifiedIcon
                    className="text-blue-500 ml-1 mb-1"
                    fontSize="small"
                  />
                )}
              </h1>
              <h1 className="hidden xl:inline text-gray-500">
                @{post?.username}
              </h1>
              <span className="hidden sm:block text-gray-500 text-[12px] mt-[4px]">
                •
              </span>
              <p className="text-gray-500">{post?.createdAt}</p>
            </div>

            {authUser.username === post.username && (
              <div
                className="flex gap-1 hover:bg-slate-700 rounded-md cursor-pointer p-[1px]"
                onClick={(e) => {
                  e.stopPropagation();
                  setEditModal(true);
                }}
              >
                <EditNoteIcon className="hoverEffect w-7 h-7" />
              </div>
            )}
          </div>
          <div className="mr-6">{post?.content}</div>
          <img
            className="max-h-[450px] object-cover rounded-[20px] mt-2"
            src=""
            alt=""
          />

          <div className="flex justify-between text-[20px] mt-4 w-[80%]">
            <div className="flex gap-1 items-center hover:bg-slate-700 rounded-full cursor-pointer">
              <BsChat
                className="hoverEffect w-7 h-7 p-1"
                onClick={(e) => {
                  e.stopPropagation();
                  openModal();
                }}
              />
            </div>

            <div
              className="flex gap-1 items-center pr-1 hover:bg-slate-700 rounded-full cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                !isLiked ? likePost() : removeLike();
              }}
            >
              {isLiked ? (
                <AiFillHeart className="hoverEffect w-7 h-7 p-1 text-pink-700" />
              ) : (
                <AiOutlineHeart className="hoverEffect w-7 h-7 p-1" />
              )}

              {post.likes.likeCount.length > 0 && (
                <span className={`${liked && "text-pink-700"} text-sm`}>
                  {post.likes.likeCount.length}
                </span>
              )}
              <span className="text-sm">{post.likes.likeCount}</span>
            </div>

            <div
              className="flex gap-1 items-center hover:bg-slate-700 rounded-md cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                !bookmarked ? saveBookmark() : removeBookmark();
              }}
            >
              {bookmarked ? (
                <BsFillBookmarkFill className="hoverEffect w-7 h-7 p-1 text-blue-500" />
              ) : (
                <FaRegBookmark className="hoverEffect w-7 h-7 p-1" />
              )}
            </div>

            <div className="flex gap-1 items-center hover:bg-slate-700 rounded-md pr-1 cursor-pointer">
              <SignalCellularAltIcon className="text-slate-500" />
              <span className="text-sm">{rn(randomNumber)}K</span>
            </div>

            {authUser.username === post.username && (
              <RiDeleteBin5Line
                className="hoverEffect w-7 h-7 p-1 hover:bg-slate-700 rounded-md cursor-pointer"
                onClick={handleDeletePost}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
