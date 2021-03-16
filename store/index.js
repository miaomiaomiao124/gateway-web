import Vue from 'vue'
import Vuex from 'vuex'

import product from './modules/product'
import device from './modules/device'
import commonality from './modules/commonality'


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    product,
    device,
    commonality
  }
})
