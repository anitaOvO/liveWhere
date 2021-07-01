<template>
  <div class="HomeService">
    <span class="iconfont back-icon" @click="backtoMine">&#xe9e2;</span>
    <span class="title">家政服务</span>
  </div>
</template>
<script>
export default {
  name: "ContactService",
  data() {
    return {
      flag: this.$store.state.flag,
    };
  },
  methods: {
    backtoMine: function () {
      this.flag === 0
        ? this.$router.replace("/Mine/HostOrder")
        : this.$router.replace("/Mine/UserOrder");
    },
  },
};
</script>
<style scoped>
.back-icon {
  float: left;
  font-size: 25px;
  margin-top: 0.5rem;
  margin-left: 0.5rem;
}
.title {
  float: left;
  margin-top: 10%;
  margin-left: 20%;
  font-size: 0.5rem;
}
</style>