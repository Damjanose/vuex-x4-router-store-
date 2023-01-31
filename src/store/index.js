import {createStore} from "vuex";

const store = createStore({
  state: () => ({
    text: ''
  }),
  mutations: {
    SET_TEXT(state, payload) {
      state.text = payload
    },
  },
  actions: {
    setText({ commit }, payload) {
      localStorage.setItem('text', payload)
      commit('SET_TEXT', payload)
    },
  },
  getters: {
    text({ text }) {
      return text || ''
    },
  }
});

export default store
