import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import FastClick from 'fastclick'
import axios from '@/api/api.js'
Vue.config.productionTip = false
// FastClick
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
    FastClick.attach(document.body)
  }, false)
}
Vue.prototype.$http = axios
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
