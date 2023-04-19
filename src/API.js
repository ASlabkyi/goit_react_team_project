import axios from 'axios';

export const userRefresh = async sid => {
  const { data } = await axios.post('auth/refresh', sid);
  return data;
};

export const userGetInfo = async () => {
  const { data } = await axios.get('/user');
  return data;
};

export const fetchDay = async dayToday => {
  const { data } = await axios.post('/day/info', dayToday);
  return data;
};

export const searchProduct = async value => {
  const res = await axios.get(`/product?search=${value}`);
  return res;
};

export const addProduct = async product => {
  const res = await axios.post('/day', product);
  return res;
};

export const deleteProduct = async product => {
  const { data } = await axios.delete('/day', { data: product });
  return data;
};
