import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/iconfont.css'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import { DatePicker, Message } from 'element-ui'
require('../public/mock')
var axios = require('axios')
    //axios.defaults.baseURL = '/api'
    // 将API方法绑定到全局
Vue.prototype.$axios = axios
Vue.config.productionTip = false
fastClick.attach(document.body);
Vue.use(VueAwesomeSwiper);
Vue.use(DatePicker, Message);
//Vue.prototype.$message = Message;
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')