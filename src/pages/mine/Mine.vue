<template>
  <div class="mine">
    我的
    <home-footer></home-footer>
  </div>
</template>
<script>
import HomeFooter from "../home/components/Footer";
export default {
  name: "Mine",
  components: {
    HomeFooter,
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
  background-color: greenyellow;
  overflow-x: hidden;
  -webkit-tap-highlight-color: transparent;
  height: 2000px;
}
</style>