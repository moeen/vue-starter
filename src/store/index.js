import Vue from 'vue'
import Vuex from 'vuex'

import authModule from './modules/authModule'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    authModule
  },
  strict: debug
})
