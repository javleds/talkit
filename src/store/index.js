import Vue from 'vue'
import Vuex from 'vuex'

import { retrieveState, storeState } from '../repositories/talk-it-repository'

import timer from './timer-module'
import topic from './topic-module'

Vue.use(Vuex)

const store = new Vuex.Store({
  mutations: {
    retrieveStore (state) {
      const storedState = retrieveState()
      if (!storedState) {
        return
      }

      this.replaceState({
        ...state,
        ...storedState
      })
    }
  },
  modules: {
    timer,
    topic
  }
})

store.subscribe((mutation, state) => {
  storeState(state)
})

export default store
