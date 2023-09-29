import axios from 'axios';
// 39555816 - 71d9d7d5243ac5c8982fc1029
axios.defaults.baseURL = 'https://pixabay.com/api';

export const fetchItems = async (value, page) => {
  const resp = await axios.get(
    `?39555816 - 71d9d7d5243ac5c8982fc1029&q=${value}&page=${page}`
  );
  return resp.data;
};
