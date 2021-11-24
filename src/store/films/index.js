import actions from './actions';
import mutations from './mutations';
import getters from './getters';

export default {
  namespaced: true,
  state: {
    films: [],
    isLoading: false,
    isError: false,
    error: '',
  },
  actions,
  mutations,
  getters,
};
