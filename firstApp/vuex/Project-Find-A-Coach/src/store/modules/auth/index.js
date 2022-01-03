import actions from './actions';
import mutations from './mutations.js';
import getters from './getters.js';

export default {
  state() {
    return {
      userId: null,
      token:null,
      tokenExpiration:null
    };
  },
  mutations,
  actions,
  getters,
};
