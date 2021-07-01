<template>
  <div class="setting">
    <span class="iconfont back-icon" @click="backtoMine">&#xe61e;</span>
    <div class="title">设置</div>
    <div class="list">
      <ul @click="manage">
        账号管理
      </ul>
      <ul @click="message">
        通知
      </ul>
      <ul @click="pay">
        收款方式
      </ul>
      <ul @click="Logout">
        账号注销
      </ul>
      <ul @click="send">
        发送反馈
      </ul>
      <setting-exit></setting-exit>
    </div>
  </div>
</template>
<script>
import SettingExit from "./components/Exit";
export default {
  name: "Setting",
  data() {
    return {
      flag: this.$store.state.flag,
    };
  },
  components: {
    SettingExit,
  },
  methods: {
    backtoMine: function () {
      this.flag === 0
        ? this.$router.replace("/Mine/HostOrder")
        : this.$router.replace("/Mine/UserOrder");
    },
    manage: function () {
      this.$router.replace({ path: "/Manage" });
    },
    message: function () {
      this.$router.replace({ path: "/Message" });
    },
    pay: function () {
      this.$router.replace({ path: "/PayStyle" });
    },
    Logout: function () {
      this.$router.replace({ path: "/Logout" });
    },
    send: function () {
      this.$router.replace({ path: "/Send" });
    },
  },
};
</script>
<style scoped>
.setting .back-icon {
  line-height: 1.2rem;
  margin: 0.4rem;
  font-size: 0.4rem;
}
.title {
  margin: 0.4rem;
  font-size: 0.5rem;
}
.list {
  margin: 0.4rem;
  font-size: 0.4rem;
  line-height: 0.9rem;
}
</style>