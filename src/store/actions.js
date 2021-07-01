export default {
    saveUserName(context, userName) {
        context.commit('saveUserName', userName);
    },
    saveUserId(context, userId) {
        context.commit('saveUserId', userId);
    },
    changeCity(context, city) {
        context.commit('changeCity', city);
    },
    saveOrderId(context, orderId) {
        context.commit('saveOrderId', orderId);
    },
    saveFlag(context, flag) {
        context.commit('saveFlag', flag);
    }

}