import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
import { dummyPosts } from "./dummyData";
var rn = require("random-number");

var randomNumber = {
  min: 0,
  max: 1000,
  integer: true,
};

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  ...dummyPosts.shahbaz.map((post) => ({
    _id: uuid(),
    content: post,
    likes: {
      likeCount: rn(randomNumber),
      likedBy: [],
      dislikedBy: [],
    },
    username: "shahbazcse",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  })),

  ...dummyPosts.bruce.map((post) => ({
    _id: uuid(),
    content: post,
    likes: {
      likeCount: rn(randomNumber),
      likedBy: [],
      dislikedBy: [],
    },
    username: "bruce",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  })),

  ...dummyPosts.eren.map((post) => ({
    _id: uuid(),
    content: post,
    likes: {
      likeCount: rn(randomNumber),
      likedBy: [],
      dislikedBy: [],
    },
    username: "eren",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  })),

  ...dummyPosts.mikasa.map((post) => ({
    _id: uuid(),
    content: post,
    likes: {
      likeCount: rn(randomNumber),
      likedBy: [],
      dislikedBy: [],
    },
    username: "mikasa",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  })),

  ...dummyPosts.syeda.map((post) => ({
    _id: uuid(),
    content: post,
    likes: {
      likeCount: rn(randomNumber),
      likedBy: [],
      dislikedBy: [],
    },
    username: "fatima",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  })),

  ...dummyPosts.peter.map((post) => ({
    _id: uuid(),
    content: post,
    likes: {
      likeCount: rn(randomNumber),
      likedBy: [],
      dislikedBy: [],
    },
    username: "peter",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  })),

  ...dummyPosts.tony.map((post) => ({
    _id: uuid(),
    content: post,
    likes: {
      likeCount: rn(randomNumber),
      likedBy: [],
      dislikedBy: [],
    },
    username: "tony",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  })),

  ...dummyPosts.steve.map((post) => ({
    _id: uuid(),
    content: post,
    likes: {
      likeCount: rn(randomNumber),
      likedBy: [],
      dislikedBy: [],
    },
    username: "steve",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  })),

  ...dummyPosts.mary.map((post) => ({
    _id: uuid(),
    content: post,
    likes: {
      likeCount: rn(randomNumber),
      likedBy: [],
      dislikedBy: [],
    },
    username: "mary",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  })),

  ...dummyPosts.gwen.map((post) => ({
    _id: uuid(),
    content: post,
    likes: {
      likeCount: rn(randomNumber),
      likedBy: [],
      dislikedBy: [],
    },
    username: "gwen",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  })),
];
