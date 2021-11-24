import { getItems, getItem } from './base.api';

const ROUTE = 'planets';

export const getPlanets = async (params = {}) => {
  return await getItems(`${ROUTE}`, {
    ...params,
  });
};

export const getPlanet = async (id = '', params = {}) => {
  return await getItem(`${ROUTE}`, id, {
    ...params,
  });
};
