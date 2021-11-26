import * as types from './mutationTypes';

export default {
  [types.ADD_STARSHIPS](state, payload) {
    state.starships = {
      ...state.starships,
      [payload.page]: payload.starships,
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
