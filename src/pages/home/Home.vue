<template>
  <div class="home">
    <home-Swiper></home-Swiper>
    <home-Recommand></home-Recommand>
    <home-footer></home-footer>
  </div>
</template>
<script>
import HomeSwiper from "../home/components/Swiper";
import HomeRecommand from "../home/components/Recommand";
import HomeFooter from "./components/Footer.vue";
export default {
  name: "Home",
  components: {
    HomeFooter,
    HomeSwiper,
    HomeRecommand,
  },
};
</script>
<style scoped>
.home {
  max-width: 540px;
  min-width: 320px;
  margin: 0 auto;
  font: normal 14px/1.5 Tahoma, "Lucida Grande", Verdana, "Microsoft Yahei",
    STXihei, hei;
  color: #000;
  background-color: gray;
  overflow-x: hidden;
  -webkit-tap-highlight-color: transparent;
  height: 2000px;
}
</style>