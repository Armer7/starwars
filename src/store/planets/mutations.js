import * as types from './mutationTypes';

export default {
  [types.ADD_PLANETS](state, payload) {
    state.planets = {
      ...state.planets,
      [payload.page]: payload.planets,
      numberOfPages: payload.numberOfPages,
    };
  },
  [types.FETCH_INIT](state) {
    state.isLoading = true;
    state.isError = false;
    state.error = '';
  },
  [types.FETCH_SUCCESS](state) {
    state.isLoading = false;
    state.isError = false;
    state.error = '';
  },
  [types.FETCH_FAILURE](state, error) {
    state.isLoading = false;
    state.isError = true;
    state.error = error;
  },
};
