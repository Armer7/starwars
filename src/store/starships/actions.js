import { getStarships } from '../../api';
import { GetPageNumber, AddIdToData } from '../../utils';
import * as types from './mutationTypes';

export default {
  async requestStarships({ commit, rootGetters }, page = 1) {
    commit(types.FETCH_INIT);
    const filter = {
      page,
      search: rootGetters['search/getSearch'],
    };
    try {
      const result = await getStarships(filter);
      commit({
        type: types.ADD_STARSHIPS,
        starships: AddIdToData(result.results),
        numberOfPages: GetPageNumber(result.count),
        page,
      });
      commit(types.FETCH_SUCCESS);
    } catch (error) {
      commit(types.FETCH_FAILURE, error);
    }
  },
};
