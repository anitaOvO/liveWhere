<template>
  <div class="Discover">
    <search></search>
    <discount></discount>
    <div class="foot"></div>
    <home-footer></home-footer>
  </div>
</template>
<script>
import HomeFooter from "../home/components/Footer";
import Search from "../discover/components/Search.vue";
import Discount from "./components/Discount.vue";
import LandMark from "./components/landMark.vue";
export default {
  name: "Discover",
  components: {
    HomeFooter,
    Search,
    Discount,
  },
};
</script>
<style scoped>
.Discover {
  max-width: 540px;
  min-width: 320px;
  margin: 0 auto;
  font: normal 14px/1.5 Tahoma, "Lucida Grande", Verdana, "Microsoft Yahei",
    STXihei, hei;
  color: #000;
  background-color: #fff;
  overflow-x: hidden;
  -webkit-tap-highlight-color: transparent;
}
.foot {
  height: 100px;
}
</style>