import api from "./api-config";

export const getAllComments = async (postId) => {
  const resp = await api.get(`/posts/${postId}/comments`);
  return resp.data;
};
//change name above soon 

export const getOneComment = async (postId, id) => {
  const resp = await api.get(`/posts/${postId}/comments/${id}`);
  return resp.data;
};

export const postComment = async (postId, commentData) => {
  const resp = await api.post(`/posts/${postId}/comments`, {
    comment: commentData,
  });
  return resp.data;
};

export const putComment = async (postId, id, commentData) => {
  const resp = await api.put(`/posts/${postId}/comments/${id}`, {
    comment: commentData,
  });
  return resp.data;
};

export const destroyComment = async (id) => {
  const resp = await api.delete(`/comments/${id}`);
  return resp.data;
};
