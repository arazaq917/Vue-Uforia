import counterMutations from './mutations.js';
import counterActions from './actions.js';
import counterGetter from './getter.js';

export default {
  state() {
    return {
      counter: 0,
    };
  },
  mutations: counterMutations,
  actions: counterActions,
  getters: counterGetter,
};
