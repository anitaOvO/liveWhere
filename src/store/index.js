import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex)
const state = {
    userName: '',
    userId: '',
    city: ' 深圳',
    orderId: '',
    flag: '',
}
export default new Vuex.Store({
    state,
    mutations,
    actions,
})