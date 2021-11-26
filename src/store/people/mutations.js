import * as types from './mutationTypes';

export default {
  [types.ADD_PEOPLE](state, payload) {
    state.people = {
      ...state.people,
      [payload.page]: payload.people,
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
