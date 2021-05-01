<template>
  <div class="list">
    <nav>
      <form action="">
        <input type="search" placeholder="请输入城市名" />
      </form>
      <div class="icon">
        <a href="#" class="iconfont return" @click="handleOfReturn">
          &#xe61e;
        </a>
        <span>{{ this.$route.params.city }}</span>
      </div>
    </nav>

    <h2>300多处住宿</h2>
    <router-link
      tag="div"
      class="container"
      v-for="item of detaillist"
      :key="item.houseId"
      :to="'/detail/' + item.houseId"
    >
      <div class="show">
        <img
          src="https://z1.muscache.cn/im/pictures/prohost-api/Hosting-49133672/original/f7b599a8-74b6-420e-87b3-9b2fd5e27026.jpeg?aki_policy=large"
        />
      </div>
      <div class="detail">
        <p>{{ item.label }}</p>
        <h2>{{ item.houseName }}</h2>
        <div class="price">
          <span>￥{{ item.price }}</span>
          <span>每晚</span>
        </div>
      </div>
    </router-link>
    <div class="bottom">
      <img src="../../../assets/s1.png" alt="" />
      到底啦~
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "list",
  data() {
    return {
      detaillist: [],
      city: this.$route.params.city,
    };
  },
  methods: {
    getDetailList() {
      axios // /api
        .post("/api/list", {
          city: this.city,
        })
        .then((successResponse) => {
          //this.responseResult = JSON.stringify(successResponse.data);
          this.detaillist = successResponse.data;
          console.log(this.detaillist);
        })
        .catch((failResponse) => {
          alert("what the fuck???");
        });
    },
    handleOfReturn: function () {
      this.$router.replace("/");
    },
  },
  mounted: function () {
    this.getDetailList();
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
}
h2 {
  font-size: 20px;
  font-weight: 600;
  margin: 100px 10px 10px;
}
nav {
  position: relative;
  box-sizing: border-box;
  position: fixed;
  height: 60px;
  max-width: 540px;
  width: 100%;
  margin-top: 10px;
  padding: 10px;
}
nav input {
  height: 40px;
  width: 100%;
  border-radius: 4px;
  padding-left: 105px;
  font-size: 14px;
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%);
}
.container {
  margin: 0 10px 10px;
  background-color: white;
  border-radius: 8px;
}
.icon {
  position: absolute;
  top: 18px;
  left: 15px;
  width: 90px;
  color: #008489;
  font-weight: 600;

  border-right: 2px solid #e9e7e7;
}
.return {
  color: rgb(57, 87, 106);
  font-weight: 800;
  margin-right: 11px;
  vertical-align: middle;
}
.show {
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 8px;
}
.show img {
  width: 100%;
}
.detail {
  background-color: #fff;
  border-radius: 8px;
  color: rgb(57, 87, 106);
}
.detail h2 {
  margin: 5px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: rgb(72, 72, 72);
}
.price span:nth-child(1) {
  font-weight: 800;
  margin-right: 8px;
}
.bottom {
  width: 50%;
  margin: 0 auto;
  margin-bottom: 0px;
  text-align: center;
}
.bottom img {
  width: 100%;
  margin: 80px 0px 0px;
}
</style>