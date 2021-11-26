import * as types from './mutationTypes';

export default {
  async changeSearch({ dispatch, commit }, value) {
    commit({
      type: types.SET_SEARCH,
      search: value,
      isSearch: Boolean(value),
    });
    dispatch('films/requestFilms', 1, { root: true });
    dispatch('people/requestPeople', 1, { root: true });
    dispatch('planets/requestPlanets', 1, { root: true });
    dispatch('starships/requestStarships', 1, { root: true });
  },
};
