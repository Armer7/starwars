import { getItems, getItem } from './base.api';

const ROUTE = 'films';

export const getFilms = async (params = {}) => {
  return await getItems(`${ROUTE}`, {
    ...params,
  });
};

export const getFilm = async (id = '', params = {}) => {
  return await getItem(`${ROUTE}`, id, {
    ...params,
  });
};
