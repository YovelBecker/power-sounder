import Vue from 'vue'
import Vuex from 'vuex'

import soundStore from './soundStore'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    soundStore
  }
})
