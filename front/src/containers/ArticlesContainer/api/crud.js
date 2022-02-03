import client from "../../../helpers/ApiClient";

export const getArticles = async () => {
  return client.get("/articles");
};

export const getCurrentArticle = async (id) => {
  return client.get(`/articles/${id}`);
};

export const updateArticle = async (id, data) => {
  return client.put(`/articles/${id}`, data);
};

export const createArticle = async (data) => {
  return client.post('/articles', data);
};
