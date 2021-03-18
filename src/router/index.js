import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../login/Login'
import Home from '../home/Home'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path:'/Home',
    name:'Home',
    component:Home
  }
  
]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
