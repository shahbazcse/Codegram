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

export const doLikePost = async (token,postId) => {
  const response = await axios.post(
    `/api/posts/like/${postId}`,
    {},
    {
      headers: {
        authorization: token,
      },
    }
  );
  return response.data.posts;
};

export const doRemoveLike = async (token,postId) => {
  const response = await axios.post(
    `/api/posts/dislike/${postId}`,
    {},
    {
      headers: {
        authorization: token,
      },
    }
  );
  return response.data.posts;
}
