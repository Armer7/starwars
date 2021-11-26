import { getItems, getItem } from './base.api';

const ROUTE = 'people';

export const getPeople = async (params = {}) => {
  return await getItems(`${ROUTE}`, {
    ...params,
  });
};

export const getPerson = async (id = '', params = {}) => {
  return await getItem(`${ROUTE}`, id, {
    ...params,
  });
};
