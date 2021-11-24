import { getPlanets } from '../../api/planets';
import * as types from './mutationTypes';

const addId = (data) =>
  data.map((item) => {
    const id = Number(item.url.match(/\d+/)[0]);
    return { ...item, id };
  });

export default {
  async requestFilms({ commit, state }) {
    if (!state.planets.length) {
      commit(types.FETCH_INIT);
      try {
        const result = await getPlanets();
        commit({
          type: types.ADD_PLANETS,
          planets: addId(result.results),
        });
        commit(types.FETCH_SUCCESS);
      } catch (error) {
        commit(types.FETCH_FAILURE, error);
      }
    }
  },
};
