import axios from 'axios';

const apiUrl = 'https://swapi.dev/api';

const axiosBaseUrl = axios.create({
  baseURL: apiUrl,
});

export const getItems = async (route, params) => {
  const { data } = await axiosBaseUrl.get(`/${route}/`, { params });
  return data;
};

export const getItem = async (route, id = '', params) => {
  const { data } = await axiosBaseUrl.get(`/${route}/${id}/`, {
    params,
  });
  return data;
};
