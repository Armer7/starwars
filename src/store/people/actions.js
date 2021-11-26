import { getPeople } from '../../api';
import { GetPageNumber, AddIdToData } from '../../utils';
import * as types from './mutationTypes';

export default {
  async requestPeople({ commit, rootGetters }, page = 1) {
    commit(types.FETCH_INIT);
    const filter = {
      page,
      search: rootGetters['search/getSearch'],
    };
    try {
      const result = await getPeople(filter);
      commit({
        type: types.ADD_PEOPLE,
        people: AddIdToData(result.results),
        numberOfPages: GetPageNumber(result.count),
        page,
      });
      commit(types.FETCH_SUCCESS);
    } catch (error) {
      commit(types.FETCH_FAILURE, error);
    }
  },
};
