import { getFilms } from '../../api';
import { AddIdToData } from '../../utils';
import * as types from './mutationTypes';

export default {
  async requestFilms({ commit, rootGetters }) {
    commit(types.FETCH_INIT);
    const filter = {
      search: rootGetters['search/getSearch'],
    };
    try {
      const result = await getFilms(filter);
      commit({
        type: types.ADD_FILMS,
        films: AddIdToData(result.results),
      });
      commit(types.FETCH_SUCCESS);
    } catch (error) {
      commit(types.FETCH_FAILURE, error);
    }
  },
};
