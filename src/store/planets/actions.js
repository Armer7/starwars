import { getPlanets } from '../../api';
import { GetPageNumber, AddIdToData } from '../../utils';
import * as types from './mutationTypes';

export default {
  async requestPlanets({ commit, rootGetters }, page = 1) {
    commit(types.FETCH_INIT);
    const filter = {
      page,
      search: rootGetters['search/getSearch'],
    };
    try {
      const result = await getPlanets(filter);
      commit({
        type: types.ADD_PLANETS,
        planets: AddIdToData(result.results),
        numberOfPages: GetPageNumber(result.count),
        page,
      });
      commit(types.FETCH_SUCCESS);
    } catch (error) {
      commit(types.FETCH_FAILURE, error);
    }
  },
};
