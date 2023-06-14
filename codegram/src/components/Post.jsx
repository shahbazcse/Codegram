import React, { useContext, useEffect, useState } from "react";
import { BsChat } from "react-icons/bs";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaRegBookmark } from "react-icons/fa";
import {BsFillBookmarkFill} from "react-icons/bs"

export default function Post ({ post }){
  const [likes, setLikes] = useState([]);
  const [liked, setLiked] = useState(false);
  const [comments, setComments] = useState([]);

  const likePost = async () => {
    console.log("Liked Post");
  };

  const openModal = () => {
    console.log("opening model ");
  };

  const bookmarked = false;

  const dummyImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS9Vu2kHRkEn3qBiH1szO1Qbxt4sP59Lt66Zu-O8tqpxqysYKfeyraCeAC1L0nLonfRjA&usqp=CAU";

  return (
    <div className="mt-4 border-t border-gray-500 px-4 pt-6 pb-4 cursor-pointer">
      <div className="grid grid-cols-[48px,1fr] gap-4">
        <div>
          <img className="h-12 w-12 rounded-full object-cover" src={dummyImg} alt="" />
        </div>

        <div>
          <div className="block sm:flex gap-1">
            <h1 className="font-medium">{post?.username}</h1>

            <div className="flex">
              <p className="text-gray-500">{post?.createdAt}</p>
            </div>
          </div>
          <p>{post?.content}</p>
          <img
            className="max-h-[450px] object-cover rounded-[20px] mt-2"
            src=""
            alt=""
          />

          <div className="flex justify-between text-[20px] mt-4 w-[80%]">
            <div className="flex gap-1 items-center">
              <BsChat
                className="hoverEffect w-7 h-7 p-1"
                onClick={(e) => {
                  e.stopPropagation();
                  openModal();
                }}
              />
            </div>

            <div
              className="flex gap-1 items-center"
              onClick={(e) => {
                e.stopPropagation();
                likePost();
              }}
            >
              {liked ? (
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
              className="flex gap-1 items-center"
              onClick={(e) => {
                e.stopPropagation();
                likePost();
              }}
            >
              {bookmarked ? (
                <BsFillBookmarkFill className="hoverEffect w-7 h-7 p-1 text-blue-500" />
              ) : (
                <FaRegBookmark className="hoverEffect w-7 h-7 p-1" />
              )}
            </div>

            <RiDeleteBin5Line
              className="hoverEffect w-7 h-7 p-1"
              onClick={(e) => {
                e.stopPropagation();
                console.log("Post Deleted");
              }}
            />

          </div>
        </div>
      </div>
    </div>
  );
};
