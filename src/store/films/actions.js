import { getFilms } from '../../api/films';
import * as types from './mutationTypes';

const addId = (data) =>
  data.map((item) => {
    const id = Number(item.url.match(/\d+/)[0]);
    return { ...item, id };
  });

export default {
  async requestFilms({ commit, state }) {
    if (!state.films.length) {
      commit(types.FETCH_INIT);
      try {
        const result = await getFilms();
        commit({
          type: types.ADD_FILMS,
          films: addId(result.results),
        });
        commit(types.FETCH_SUCCESS);
      } catch (error) {
        commit(types.FETCH_FAILURE, error);
      }
    }
  },
};
