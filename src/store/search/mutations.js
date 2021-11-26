import * as types from './mutationTypes';

export default {
  [types.SET_SEARCH](state, payload) {
    state.search = payload.search;
    state.isSearch = payload.isSearch;
  },
};
