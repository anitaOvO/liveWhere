import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/iconfont.css'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/swiper-bundle.css'
Vue.use(VueAwesomeSwiper)
require('../public/mock')
var axios = require('axios')
//axios.defaults.baseURL = 'https://localhost:8888'
// 将API方法绑定到全局
Vue.prototype.$axios = axios
Vue.config.productionTip = false
fastClick.attach(document.body);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
