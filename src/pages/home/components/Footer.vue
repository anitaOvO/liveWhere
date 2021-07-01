<template>
  <ul class="footer-nav">
    <li>
      <a href="#" @click="handlesearch">
        <span class="iconfont footer-icon">&#xe634;</span>
        <span>搜索</span>
      </a>
    </li>
    <li>
      <a href="#" @click="handlefavorite">
        <span class="iconfont footer-icon">&#xe83f;</span>
        <span>心愿单</span>
      </a>
    </li>
    <li>
      <a href="#" @click="handlehome">
        <span class="iconfont footer-icon">&#xe619;</span>
        <span>主页面</span>
      </a>
    </li>
    <li>
      <a href="#" @click="handlemail">
        <span class="iconfont footer-icon">&#xe6f5;</span>
        <span>消息</span>
      </a>
    </li>
    <li>
      <a href="#" @click="handlemine">
        <span class="iconfont footer-icon">&#xe626;</span>
        <span>我的</span>
      </a>
    </li>
  </ul>
</template>
<script>
export default {
  name: "HomeFooter",
  data() {
    return {
      flag: this.$store.state.flag,
    };
  },
  methods: {
    handlesearch: function () {
      this.$router.replace({ path: "/Discover" });
    },
    handlefavorite: function () {
      this.$router.replace({ path: "/Favorite" });
    },
    handlehome: function () {
      this.$router.replace({ path: "/" });
    },
    handlemail: function () {
      this.$router.replace({ path: "/Mail" });
    },
    handlemine: function () {
      this.flag === 0
        ? this.$router.replace({ path: "/Mine/HostOrder" })
        : this.$router.replace({ path: "/Mine/UserOrder" });
    },
  },
};
</script>
<style scoped>
.footer-nav {
  display: flex;
  position: fixed;
  bottom: -1px;
  min-width: 320px;
  max-width: 540px;
  height: 67px;
  width: 100%;
  border-top: 1px solid #dbdbdb;
  background-color: #fff;
  z-index: 9;
}
.footer-nav li {
  flex: 1;
}
.footer-nav a {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
  font-size: 12px;
}
.footer-icon {
  width: 42px;
  height: 27px;
  font-size: 25px;
  margin-top: 7px;
  margin-bottom: 5px;
  text-align: center;
}
</style>