import {createStore} from "vuex";

const store = createStore({
  state() {
    return {
      word: '',
    };
  },
  mutations: {
    update(state) {
      state.word = this.state.value;
    },
  },
  actions: {},
  getters: {
    oldValue(state) {
      return state.word;
    },
    updateValue(state, getters) {
      const oldValue = getters.oldValue;
      console.log(state)
      if (oldValue === '' ) return 1;
      return oldValue;
    },
  }
});

export default store
