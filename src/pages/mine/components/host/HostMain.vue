<template>
  <div class="dan">
    <span class="iconfont back-icon" @click="backtoSetting">&#xe641;</span
    ><br />
    <span class="title">房源管理</span>

    <button class="housing" @click="housing">
      <p class="plus">去发布</p>
      发布房源<br />
    </button>
    <button class="search" @click="searchHouse">
      <p class="update">查询</p>
      查询所发布房源
    </button>
  </div>
</template>
<script>
export default {
  name: "HostMain",
  data() {
    return {};
  },
  methods: {
    backtoSetting: function () {
      this.$router.replace({ path: "/Mine/HostOrder" });
    },
    housing: function () {
      this.$router.replace({ path: "/housing" });
    },
    // updateHouse: function () {
    //   this.$router.replace({ path: "/updateHouse" });
    // },
    searchHouse: function () {
      //删除房源包含在内
      this.$router.replace({ path: "/searchHouse" });
    },
  },
};
</script>
<style scoped>
.dan {
  margin: 0.4rem;
}
.back-icon {
  margin: 0.2rem;
  font-size: 0.7rem;
}
.title {
  float: left;
  margin-top: 0.5rem;
  font-size: 0.6rem;
}
p {
  clear: both;
  float: left;
  margin-top: 0.3rem;
}
button {
  clear: both;
  float: left;
  margin-top: 0.8rem;
  width: 100%;
  height: 2rem;
  font-size: 0.4rem;
  text-align: left;
  padding: 0.2rem;
  border-radius: 0.3rem;
  background: white;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.plus {
  padding-right: 0.3rem;
  float: right;
  color: rgb(42, 190, 86);
}
.update {
  padding-right: 0.3rem;
  float: right;
  color: rgb(42, 190, 86);
}
.phone {
  clear: both;
}
</style>