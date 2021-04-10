<template>
  <div class="Discover">
    搜索页面
    <home-footer></home-footer>
  </div>
</template>
<script>
import HomeFooter from "../home/components/Footer";
export default {
  name: "Discover",
  components: {
    HomeFooter,
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
  background-color: gray;
  overflow-x: hidden;
  -webkit-tap-highlight-color: transparent;
  height: 2000px;
}
</style>