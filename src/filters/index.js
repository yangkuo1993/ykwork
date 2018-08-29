import Vue from 'vue'
Vue.filter('dataFormat', (data) => {
  return data + '[[['
})
