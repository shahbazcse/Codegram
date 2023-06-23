import axios from "axios";

export const createPost = async (token, post) => {
  const response = await axios.post(
    `/api/posts`,
    {
      postData: post,
    },
    {
      headers: {
        authorization: token,
      },
    }
  );
  return response.data.posts;
};

export const getPostDetails = async (postId) => {
  const response = await axios.get(`/api/posts/${postId}`);
  return response.data.post;
};

export const doEditPost = async (postId, postData, token) => {
  const response = await axios.post(
    `/api/posts/edit/${postId}`,
    { postData },
    {
      headers: {
        authorization: token,
      },
    }
  );
  return response.data.posts;
};

export const doDeletePost = async (postId, token) => {
  const response = await axios.delete(`/api/posts/${postId}`, {
    headers: {
      authorization: token,
    },
  });
  return response.data.posts;
};
