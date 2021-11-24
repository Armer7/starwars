import actions from './actions';
import mutations from './mutations';
import getters from './getters';

export default {
  namespaced: true,
  state: {
    film: {},
    isLoading: false,
    isError: false,
    error: '',
  },
  actions,
  mutations,
  getters,
};
