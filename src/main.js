import Vue from 'vue'
import axios from './plugins/axios.js'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
