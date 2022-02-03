import client from '../../../helpers/ApiClient';

export const getArticles = async () => {
  return client.get('/articles');
};
