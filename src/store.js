import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        mostrarMain: true,
        color: 'teal'
    },
    mutations: {
      activado (state) {
        state.mostrarMain = true
      },
      desactivado(state) {
          state.mostrarMain = false
      }
    }
})

export default store