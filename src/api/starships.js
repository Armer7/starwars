import { getItems, getItem } from './base.api';

const ROUTE = 'starships';

export const getStarships = async (params = {}) => {
  return await getItems(`${ROUTE}`, {
    ...params,
  });
};

export const getStarship = async (id = '', params = {}) => {
  return await getItem(`${ROUTE}`, id, {
    ...params,
  });
};
