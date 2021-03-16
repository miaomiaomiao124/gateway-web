// import '@babel/polyfill'
import Vue from 'vue'
import App from './App.vue'
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import iconPicker from '@/assets/icon'
import router from '@/route'
import store from '@/store'
import api from '@/api'
import '@/static/css/clear.css'
import '@/static/css/index.css'
Vue.prototype.$api = api;
Element.Dialog.props.closeOnClickModal.default = false;

Vue.use(Element, { size: 'small', zIndex: 3000 });
Vue.config.productionTip = false;
Vue.use(iconPicker)

Vue.prototype.$delayTime = (function () {
  let timer = 0
  return function (callback, ms) {
    clearTimeout(timer)
    timer = setTimeout(callback, ms)
  }
})();


new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
