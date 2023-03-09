import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://6404aa223bdc59fa8f3e7ed4.mockapi.io/molni/backend/contacts',
});

export const getAllContacts = async () => {
  const { data } = await instance.get('/');
  return data;
};

export const addContact = async data => {
  const { data: result } = await instance.post('/', data);
  return result;
};

export const deleteContact = async id => {
  const { data } = await instance.delete(`/${id}`);
  return data;
};
