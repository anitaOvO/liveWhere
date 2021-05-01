import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../login/Login'
import Home from '../pages/home/Home'
import Discover from '../pages/discover/Discover'
import Favorite from '../pages/favorite/Favorite'
import Mail from '../pages/mail/Mail'
import Mine from '../pages/mine/Mine'
import Detail from '../pages/home/components/detail'
import List from '../pages/home/components/list'
import Register from '../login/register'
Vue.use(VueRouter)

const routes = [{
        path: '/Login',
        name: 'Login',
        component: Login
    },
    {
        path: '/Register',
        name: 'Register',
        component: Register
    },
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/Discover',
        name: 'Discover',
        component: Discover
    },
    {
        path: '/Favorite',
        name: 'Favorite',
        component: Favorite
    },
    {
        path: '/Mail',
        name: 'Mail',
        component: Mail
    },
    {
        path: '/Mine',
        name: 'Mine',
        component: Mine
    },
    {
        path: '/Detail/:houseId',
        name: 'Detail',
        component: Detail
    },
    {
        path: '/List/:city',
        name: 'List',
        component: List
    }


]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router