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
        <span class="iconfont footer-icon">&#xe9e2;</span>
        <span>邮箱</span>
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
      this.$router.replace({ path: "/Mine" });
    },
  },
};
</script>
<style scoped>
.footer-nav {
  display: flex;
  position: fixed;
  bottom: 0;
  min-width: 320px;
  max-width: 540px;
  height: 66px;
  width: 100%;
  border-top: 1px solid #dbdbdb;
  background-color: #fff;
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