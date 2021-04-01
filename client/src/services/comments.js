import api from "./api-config";

export const getAllComments = async () => {
  const resp = await api.get(`/posts/${post_id}/comments`);
  return resp.data;
};

export const getOneComment = async () => {
  const resp = await api.get(`/posts/${post_id}/comments/${id}`);
  return resp.data;
};

export const postComment = async (commentData) => {
  const resp = await api.post(`/posts/${post_id}/comments`, {
    comment: commentData,
  });
  return resp.data;
};

export const putComment = async (id, commentData) => {
  const resp = await api.put(`/posts/${post_id}/comments/${id}`, {
    comment: commentData,
  });
  return resp.data;
};

export const destroyComment = async (id) => {
  const resp = await api.delete(`/posts/${post_id}/comments/${id}`);
  return resp.data;
};
