<template>
  <div class="order-header">
    <div class="iconfont return" @click="back">&#xe61e;</div>
    <div class="title">
      <h2>{{ title }}</h2>
    </div>
  </div>
</template>
<script>
export default {
  name: "order-header",
  props: {
    title: String,
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
};
</script>
<style scoped>
.order-header {
  position: relative;
  height: 50px;
  padding: 0 20px;
  border-bottom: 1px solid rgba(233, 231, 231, 0.877);

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
.return {
  position: absolute;
  top: 0px;
  line-height: 50px;
  color: #25a4bb;
  font-weight: bold;
}
.title {
  text-align: center;
  line-height: 50px;
  font-weight: bold;
}
</style>
