<template>
  <div class="host">
    成为房东/体验达人
    <div class="mood" @click="mood">
      发布房源
      <span class="iconfont host-icon">&#xe60d;</span>
    </div>
    <div class="output" @click="output">
      管理房源
      <span class="iconfont host-icon">&#xe60d;</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "Host",
  methods: {
    mood: function () {
      //console.log('开发体验')
      this.$router.push({ path: "/housing" });
    },
    output: function () {
      //console.log('发布房源')
      this.$router.push({ path: "/searchHouse" });
    },
  },
};
</script>
<style scoped>
.host {
  font-size: 0.35rem;
  margin: 0.2rem;
}
.mood {
  font-size: 0.3rem;
  margin-top: 0.7rem;
  color: gray;
}
.host-icon {
  float: right;
}
.output {
  font-size: 0.3rem;
  margin-top: 0.7rem;
  color: gray;
}
</style>