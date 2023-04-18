// import axios from 'axios';

import axios from 'axios';

// const instance = axios.create({
//   baseURL: process.env.REACT_APP_BASE_URL,
// });

// const setAuthHeader = token => {
//   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// };

// const clearAuthHeader = () => {
//   axios.defaults.headers.common.Authorization = '';
// };

// Верхнє закоментував щоб не було попереджень в консолі vsCode (кому треба буде розкоментуєте)
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
