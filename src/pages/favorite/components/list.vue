<template>
  <div class="list">
    <h1>心愿单</h1>
    <div class="list-box">
      <a href="javascript:;" class="left">1个房源</a>
      <a href="javascript:;">分享/编辑</a>
    </div>
    <ul class="list-contain">
      <router-link
        tag="li"
        v-for="(item, index) of likeList"
        :key="index"
        :to="'/detail/' + item.houseId"
      >
        <div class="img">
          <img :src="item.image1" alt="" />
        </div>
        <div class="info">
          <p>{{ item.label }}</p>
          <h3>{{ item.houseName }}</h3>
          <div class="price">
            <span>￥</span>
            <span>{{ item.price }}每晚</span>
          </div>
        </div>
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {
  name: "list",
  props: {
    likeList: Array,
  },
};
</script>
<style scoped>
.list {
  max-width: 540px;
  min-width: 320px;
  margin: 0 auto;
  font: normal 14px/1.5 Tahoma, "Lucida Grande", Verdana, "Microsoft Yahei",
    STXihei, hei;
  color: #000;
  background-color: #fff;
  overflow-x: hidden;
  -webkit-tap-highlight-color: transparent;
  padding: 10px;
  box-sizing: border-box;
}
h1 {
  font-size: 28px;
  font-weight: 400;
}
.list-box {
  display: flex;
  justify-content: space-between;
  margin: 20px auto;
  font-size: 16px;
}
.left {
  color: #000;
}
.list-contain {
  box-sizing: border-box;
  width: 100%;
}
.list-contain li {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin: 20px 0;
  overflow: hidden;
  border-bottom: 1px solid #dddddd;
  padding-bottom: 18px;
}
.img {
  flex: 1;
  border-radius: 8px;
  overflow: hidden;
  min-width: 0;
}
img {
  width: 124px;
  height: 100%;
}
.info {
  box-sizing: border-box;
  flex: 2;
  padding-left: 5px;
  font-size: 14px;
  min-width: 0;
}
h3 {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 16px;
  margin: 5px 0;
}
</style>