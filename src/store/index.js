import Vue from 'vue'
import Vuex from 'vuex'

import commonality from './modules/commonality'
import user from './modules/user'
import dict from "./modules/dict/dict";
import eventBus from "./modules/eventBus";
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    commonality,
    dict,
    eventBus
  }
})
