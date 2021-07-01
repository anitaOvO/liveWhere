<template>
  <div class="mine">
    <mine-header :userName="userName"></mine-header>
    <home-footer></home-footer>
    <router-view></router-view>
    <user-service v-if="flag === 1"></user-service>
    <host-service v-else></host-service>
    <host v-if="flag === 0"></host>
    <div class="end">
      <img src="../../assets/s2.png" alt="" />
      <p>住哪儿@1.0</p>
    </div>
  </div>
</template>
<script>
import HomeFooter from "../home/components/Footer";
import MineHeader from "./components/Header";
import UserService from "./components/service/UserService";
import HostService from "./components/service/HostService";
import HostOrder from "./components/order/HostOrder";
import UserOrder from "./components/order/UserOrder";
import Host from "./components/host/Host";
export default {
  name: "Mine",
  components: {
    HomeFooter,
    MineHeader,
    UserService,
    HostOrder,
    UserOrder,
    HostService,
    Host,
  },
  data() {
    return {
      userName: this.$store.state.userName,
      flag: this.$store.state.flag,
    };
  },
};
</script>
<style scoped>
.mine {
  max-width: 540px;
  min-width: 320px;
  margin: 0 auto;
  font: normal 14px/1.5 Tahoma, "Lucida Grande", Verdana, "Microsoft Yahei",
    STXihei, hei;
  color: #000;
  /* background-color: greenyellow; */
  overflow-x: hidden;
  -webkit-tap-highlight-color: transparent;
}
.end {
  box-sizing: border-box;
  margin-top: 100px;
  text-align: center;
  color: #c5c5c5;
}
.end img {
  width: 60%;
}
</style>