import {
  doLikePost,
  doRemoveLike,
  getBookmarks,
} from "../services/UserService";
import { useContext } from "react";
import { BsChat } from "react-icons/bs";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaRegBookmark } from "react-icons/fa";
import { BsFillBookmarkFill } from "react-icons/bs";
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import { AuthContext } from "../contexts/AuthContext";
import axios from "axios";
import { AppContext } from "../contexts/AppContext";
import { useNavigate } from "react-router-dom";
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

  const openModal = () => {
    console.log("opening model ");
  };

  const bookmarked = bookmarks.find(({ _id }) => _id === post._id);
  const isLiked = liked.find(({ _id }) => _id === post._id);

  const user = allUsers.find(({ username }) => username === post.username);

  return (
    <div className="mt-4 border-t border-gray-500 px-4 pt-6 pb-4">
      <div className="grid grid-cols-[48px,1fr] gap-4">
        <div
          onClick={() => navigate(`/profile/${post.username}`)}
          className="cursor-pointer"
        >
          <img
            className="h-12 w-12 rounded-full object-cover"
            src={user?.avatar}
            alt=""
          />
        </div>

        <div>
          <div className="block sm:flex gap-2">
            <div
              onClick={() => navigate(`/profile/${post.username}`)}
              className="flex gap-1 cursor-pointer"
            >
              <h1 className="font-medium">
                {user?.firstName} {user?.lastName}
              </h1>
              <h1 className="text-gray-500">@{post?.username}</h1>
            </div>
            <span className="hidden sm:block text-gray-500 text-[12px] mt-[4px]">
              •
            </span>
            <p className="text-gray-500">{post?.createdAt}</p>
          </div>
          <p>{post?.content}</p>
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
                onClick={(e) => {
                  e.stopPropagation();
                  console.log("Post Deleted");
                }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
