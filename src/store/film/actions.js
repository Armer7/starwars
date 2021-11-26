import { getFilm } from '../../api';
import * as types from './mutationTypes';

export default {
  async requestFilm({ commit }, id) {
    commit(types.FETCH_INIT);
    try {
      const result = await getFilm(id);
      commit({
        type: types.ADD_FILM,
        film: result,
      });
      commit(types.FETCH_SUCCESS);
    } catch (error) {
      commit(types.FETCH_FAILURE, error);
    }
  },
};
