import Vue from 'vue'
import Vuex from 'vuex'

import timer from './timer-module'
import topic from './topic-module'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    timer,
    topic
  }
})
