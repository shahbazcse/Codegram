import axios from "axios";

export const getAllPosts = async () => {
  const response = await axios.get("/api/posts");
  const allPosts = response.data.posts;
  return allPosts;
};
