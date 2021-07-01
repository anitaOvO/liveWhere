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
import City from '../pages/city/City'
import addOrder from '../pages/home/components/addOrder'
import Order from "../pages/home/components/order"
import Pay from "../pages/home/components/pay"
import MailNews from '../pages/mail/components/News'
import allOrder from '../pages/mine/components/order/allOrder'
import valueOrder from '../pages/mine/components/order/valueOrder'
import unOrder from '../pages/mine/components/order/unOrder'
import Setting from '../pages/setting/Setting'
import Manage from "../pages/setting/components/Manage/Manage"
import Message from "../pages/setting/components/Message"
import Logout from "../pages/setting/components/Logout"
import Send from "../pages/setting/components/Send"
import PayStyle from "../pages/setting/components/PayStyle"
import Money from '../pages/mine/components/service/money'
import ContactService from '../pages/mine/components/service/ContactService'
import comment from '../pages/mine/components/service/comment'
import NewComment from '../pages/mine/components/service/NewComment'
import HostMain from '../pages/mine/components/host/HostMain'
import housing from '../pages/mine/components/host/House/housing'
import updateHouse from '../pages/mine/components/host/House/updateHouse'
import searchHouse from '../pages/mine/components/host/House/searchHouse'
import experience from '../pages/mine/components/host/experience'
import updatePhone from '../pages/setting/components/Manage/updatePhone'
import updateMail from '../pages/setting/components/Manage/updateMail'
import updatePassword from '../pages/setting/components/Manage/updatePassword'
import OrderDetail from "../pages/mine/components/order/OrderDetail"
import unOrderDetail from "../pages/mine/components/order/unOrderDetail"
import HostOrder from "../pages/mine/components/order/HostOrder"
import UserOrder from "../pages/mine/components/order/UserOrder"
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
        path: '/MailNews',
        name: 'MailNews',
        component: MailNews
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
        component: Mine,
        children: [{
                path: 'HostOrder',
                name: 'HostOrder',
                component: HostOrder
            },
            {
                path: 'UserOrder',
                name: 'UserOrder',
                component: UserOrder
            },
        ]
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
    },
    {
        path: '/City',
        name: 'City',
        component: City
    },
    {
        path: '/order/:houseId',
        name: 'Order',
        component: Order,
        children: [{
                path: 'addOrder',
                name: 'addOrder',
                component: addOrder
            },
            {
                path: 'pay',
                name: 'Pay',
                component: Pay
            },
        ]
    },
    {
        path: '/allOrder',
        name: 'allOrder',
        component: allOrder
    },
    {
        path: '/OrderDetail/:orderId',
        name: 'OrderDetail',
        component: OrderDetail
    },
    {
        path: '/valueOrder',
        name: 'valueOrder',
        component: valueOrder
    },
    {
        path: '/unOrder',
        name: 'unOrder',
        component: unOrder
    },
    {
        path: '/unOrderDetail/:orderId',
        name: 'unOrderDetail',
        component: unOrderDetail
    },
    {
        path: '/Setting',
        name: 'Setting',
        component: Setting
    },
    {
        path: '/Manage',
        name: 'Manage',
        component: Manage
    },
    {
        path: '/Message',
        name: 'Message',
        component: Message
    },
    {
        path: '/Logout',
        name: 'Logout',
        component: Logout
    },
    {
        path: '/Send',
        name: 'Send',
        component: Send
    },
    {
        path: '/PayStyle',
        name: 'PayStyle',
        component: PayStyle
    },
    {
        path: '/Money',
        name: 'Money',
        component: Money
    },
    {
        path: '/ContactService',
        name: 'ContactService',
        component: ContactService
    },
    {
        path: '/comment',
        name: 'comment',
        component: comment
    },
    {
        path: '/HostMain',
        name: 'HostMain',
        component: HostMain
    },
    {
        path: '/updateHouse/:houseId',
        name: 'updateHouse',
        component: updateHouse
    },
    {
        path: '/searchHouse',
        name: 'searchHouse',
        component: searchHouse
    },
    {
        path: '/housing',
        name: 'housing',
        component: housing
    },
    {
        path: '/experience',
        name: 'experience',
        component: experience
    },
    {
        path: '/MailNews',
        name: 'MailNews',
        component: MailNews
    },
    {
        path: '/updatePassword',
        name: 'updatePassword',
        component: updatePassword
    },
    {
        path: '/updateMail',
        name: 'updateMail',
        component: updateMail
    },
    {
        path: '/updatePhone',
        name: 'updatePhone',
        component: updatePhone
    },
    {
        path: '/NewComment/:orderId',
        name: 'NewComment',
        component: NewComment
    },



]

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
    /* 记录滚动条当前位置信息 */
    scrollBehavior() {
        return { x: 0, y: 0 }
    }
});
/* router.beforeEach((to, from, next) => {
    if(to.path="/")
}) */

export default router