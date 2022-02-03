import client from '../../../helpers/ApiClient';

export const getUsers = async () => {
  return client.get('/users');
};

export const getCurrentUser = async (id) => {
  return client.get(`/users/${id}`);
}
