<template>
  <div class="detail">
    <header>
      <div class="return">
        <a href="#" class="iconfont return" @click="handleOfReturn">
          &#xe61e;
        </a>
        <a href="#" class="iconfont like"> &#xe83f; </a>
      </div>
    </header>
    <div class="container">
      <img
        src="https://z1.muscache.cn/im/pictures/d1ed3c3a-ac42-4b7c-b883-1130ae3bd30b.jpg?aki_policy=large"
        alt=""
      />
    </div>
    <div class="title">
      <p>{{ detail[0].lable }}</p>
      <h2>{{ detail[0].houseName }}</h2>
    </div>
    <div class="view">
      <h2>房源概览</h2>

      <ul class="icon">
        <li>
          <span class="iconfont">&#xe83f;</span>
          {{ detail[0].room }}间卧室
        </li>
        <li>
          <span class="iconfont">&#xe83f;</span> {{ detail[0].people }}位房客
        </li>
        <li>
          <span class="iconfont">&#xe83f;</span> {{ detail[0].toilet }}间卫生间
        </li>
        <li>
          <span class="iconfont">&#xe83f;</span> {{ detail[0].area }}平方米
        </li>
      </ul>
      <div class="part">
        <div class="space">
          <h3>整个房源</h3>
          <p>独享所有空间，无需与其他人共享</p>
        </div>
        <div class="room">
          <h3>卧室</h3>
          <span>1</span>
          <p>{{ detail[0].room }}张1.8宽床</p>
        </div>
      </div>
    </div>
    <div class="introduce">
      <h2>房源介绍</h2>
      <p>{{ detail[0].information }}</p>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "detail",
  data() {
    return {
      detail: [],
      houseId: this.$route.params.houseId,
    };
  },
  methods: {
    handleOfReturn: function () {
      this.$router.go(-1);
    },

    getHouse() {
      console.log(typeof this.houseId),
        axios //
          .post("/api/house", {
            houseId: this.houseId,
          })
          .then((successResponse) => {
            this.detail = successResponse.data;
            console.log(this.detail);
          })
          .catch((failResponse) => {
            alert("no house");
          });
    },
  },
  mounted: function () {
    this.getHouse();
  },
};
</script>
<style scoped>
.detail {
  max-width: 540px;
  min-width: 320px;
  margin: 0 auto;
  font: normal 14px/1.5 Tahoma, "Lucida Grande", Verdana, "Microsoft Yahei",
    STXihei, hei;
  color: #000;
  background-color: #fff;
  overflow-x: hidden;
  -webkit-tap-highlight-color: transparent;
  height: 2000px;
}
header {
  position: relative;
  position: fixed;
  width: 100%;
  height: 40px;
  background-color: rgba(233, 231, 231, 0);
}
.return {
  position: absolute;
  top: 4px;
  left: 6px;
  color: #008489;
}
.like {
  position: absolute;
  top: 4px;
  left: 368px;
  color: #008489;
  font-weight: 800;
  width: 20px;
  height: 28px;
}
.container {
  width: 100%;
}
.container img {
  width: 100%;
}
.title {
  background-color: #fff;
  color: #008489;
  margin-top: 12px;
  border-bottom: 7px solid rgb(230, 230, 230);
  padding: 0 10px;
}
.title h2 {
  font-size: 16px;
  font-weight: 800;
  color: #000;
  padding: 2px 0px;
}
.view,
.introduce {
  padding: 12px 10px;
  border-bottom: 1px solid rgb(230, 230, 230);
}
h2 {
  font-size: 16px;
  font-weight: 600;
}
.icon {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}
.icon li {
  display: flex;
  flex-direction: column;
  background-color: khaki;
  text-align: center;
}
.part {
  display: flex;
  margin-top: 17px;
  background-color: #fff;
  justify-content: space-between;
}
.space,
.room {
  position: relative;
  flex: 1;
  border: 1px solid rgb(230, 230, 230);
  height: 80px;
  border-radius: 4px;
  margin: 2px 20px;
  padding: 5px 10px;
}
h3 {
  font-size: 12px;
  font-weight: 600;
  padding-bottom: 16px;
}
.space p,
.room p {
  color: rgb(72, 72, 72);
}
.room h3 {
  padding-bottom: 37px;
}
.room span {
  position: absolute;
  top: 30px;
  left: 18px;
  background-color: aqua;
}
</style>
