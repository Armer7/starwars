import actions from './actions';
import mutations from './mutations';
import getters from './getters';

export default {
  namespaced: true,
  state: {
    starships: {},
    isLoading: false,
    isError: false,
    error: '',
  },
  actions,
  mutations,
  getters,
};
