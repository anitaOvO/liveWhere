<template>
  <div class="experience">
    <span class="iconfont back-icon" @click="backtoMine">&#xe641;</span>
    <span class="title">开发体验</span>
  </div>
</template>
<script>
export default {
  name: "experience",
  data() {
    return {};
  },
  methods: {
    backtoMine: function () {
      this.$router.go(-1);
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
