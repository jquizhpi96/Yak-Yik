import api from "./api-config";

export const getAllLikes = async (id) => {
  const resp = await api.get(`/posts/${id}/likes`);
  return resp.data;
};

export const createLike = async (post_id) => {
  const resp = await api.post(`/posts/${post_id}/likes`);
  return resp.data;
};

export const getLikesForOnePost = async (post_id) => {
  const resp = await api.get(`/posts/${post_id}/likes`);
  return resp.data;
};