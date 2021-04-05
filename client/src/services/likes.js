import api from "./api-config";

export const getAllLikes = async (post_id) => {
  const resp = await api.get(`/posts/${post_id}/likes`);
  return resp.data;
};

export const createLike = async (post_id) => {
  const resp = await api.post(`/posts/${post_id}/likes`);
  return resp.data;
};

export const getOneLike = async (id) => {
  const resp = await api.get(`/likes/${id}`);
  return resp.data;
};
export const deleteLike = async id => {
  const resp = await api.delete(`/likes/${id}`);
  return resp;
};