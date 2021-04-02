import api from "./api-config";

export const getAllComments = async (post_id) => {
  const resp = await api.get(`/posts/${post_id}/comments`);
  return resp.data;
};

export const getOneComment = async (post_id, id) => {
  const resp = await api.get(`/posts/${post_id}/comments/${id}`);
  return resp.data;
};

export const postComment = async (post_id, commentData) => {
  const resp = await api.post(`/posts/${post_id}/comments`, {
    comment: commentData,
  });
  return resp.data;
};

export const putComment = async (post_id, id, commentData) => {
  const resp = await api.put(`/posts/${post_id}/comments/${id}`, {
    comment: commentData,
  });
  return resp.data;
};

export const destroyComment = async (post_id, id) => {
  const resp = await api.delete(`/posts/${post_id}/comments/${id}`);
  return resp.data;
};
