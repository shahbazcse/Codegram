import axios from "axios";

export const getAllPosts = async () => {
  const response = await axios.get("/api/posts");
  const allPosts = response.data.posts;
  return allPosts;
};

export const getBookmarks = async (header) => {
  const response = await axios.get("/api/users/bookmark", header);
  return response;
};