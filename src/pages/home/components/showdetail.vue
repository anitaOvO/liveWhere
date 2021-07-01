<template>
  <div class="detail">
    <header>
      <div :class="{ is_White: isWhite }">
        <a href="#" class="iconfont return" @click="handleOfReturn">
          &#xe61e;
        </a>
        <a
          href="#"
          class="like"
          @click="addTolike(detailList[0].hostId)"
          v-if="!like"
        >
          <img src="../../../assets/collect.jpg" alt="" />
        </a>
        <a
          href="#"
          class="like"
          @click="addTolike(detailList[0].hostId)"
          v-if="like"
        >
          <img src="../../../assets/collected.jpg" alt="" />
        </a>
      </div>
    </header>
    <div class="container">
      <img :src="detailList[0].image1" alt="" />
    </div>
    <div class="title">
      <p>{{ detailList[0].lable }}</p>
      <h2>{{ detailList[0].houseName }}</h2>
    </div>
    <div class="view">
      <h2>房源概览</h2>

      <ul class="icon">
        <li>
          <span class="iconfont">&#xe623;</span>
          {{ detailList[0].room }}间卧室
        </li>
        <li>
          <span class="iconfont">&#xe6fe;</span>
          {{ detailList[0].people }}位房客
        </li>
        <li>
          <span class="iconfont">&#xe603;</span>
          {{ detailList[0].toilet }}间卫生间
        </li>
        <li>
          <span class="iconfont">&#xe657;</span> {{ detailList[0].area }}平方米
        </li>
      </ul>
      <div class="part">
        <div class="space">
          <h3>整个房源</h3>
          <p>独享所有空间，无需与其他人共享</p>
        </div>
        <div class="room">
          <h3>卧室</h3>
          <span class="iconfont bed">&#xe689;</span>
          <p class="room-title">{{ detailList[0].room }}间卧室 1.8大床</p>
        </div>
      </div>
    </div>
    <div class="introduce">
      <h2>房源介绍</h2>
      <p>{{ detailList[0].information }}</p>
    </div>
    <div class="comment">
      <h2>房屋评价</h2>
      <div class="show-count">
        <span>共{{ count }}条评价</span>
        <span>5分</span>
      </div>
      <div
        class="comment-info"
        v-for="(item, index) of commentList"
        :key="index"
      >
        <div class="user">
          <div class="user-img">
            <img src="../../../assets/tx.jpg" alt="" />
          </div>
          <div class="user-info">
            <p>{{ commentList[index].userName }}</p>
            <p>{{ commentList[index].time }}</p>
          </div>
        </div>
        <div class="context">{{ commentList[index].detail }}</div>
      </div>
    </div>
    <div class="contact">
      <a href="#" @click="goContact">联系房东进一步了解></a>
    </div>
    <div class="tips"></div>
  </div>
</template>
<script>
import axios from "axios";
import { Message } from "element-ui";
export default {
  name: "showdetail",
  props: {
    houseId: String,
    detailList: Array,
  },
  data() {
    return {
      isWhite: false,
      userName: this.$store.state.userName,
      userId: this.$store.state.userId,
      commentList: [],
      count: "",
      like: false,
    };
  },

  methods: {
    handleOfReturn: function () {
      this.$router.go(-1);
    },
    isLike() {
      axios
        .post("/api/ifInLike", {
          houseId: this.houseId,
          userId: this.userId,
        })
        .then((res) => {
          this.like = res.data;
        });
    },
    addTolike(hostId) {
      //console.log(this.userName);
      let userName = this.userName,
        houseId = this.houseId,
        userId = this.userId;
      this.like = !this.like;
      console.log(this.like);
      if (this.like) {
        axios
          .post("/api/addLike", {
            userName,
            houseId,
            hostId,
            userId,
          })
          .then((res) => {
            console.log(res.data.code);
            if (res.data.code === 1) {
              //console.log("添加成功");
              Message({
                message: "已收藏",
              });
            } else {
              console.log("添加失败");
            }
          });
      } else {
        axios
          .post("/api/deleteWish", {
            houseId,
            userId,
          })
          .then((res) => {
            if (res.data.code === 1) {
              console.log("删除成功");
              Message({
                message: "已移除",
              });
            }
          });
      }
    },
    getComment() {
      let houseId = this.houseId;

      axios
        .post("/api/selectComment", {
          houseId,
        })
        .then((res) => {
          this.commentList = res.data;
          this.count = this.commentList.length;
          console.log(this.count);
        });
    },
    initHeight() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      this.isWhite = scrollTop > 280 ? true : false;
    },
    goContact() {
      this.$router.replace("/Mail");
    },
  },
  mounted() {
    window.addEventListener("scroll", this.initHeight);
    this.getComment();
    this.isLike();
  },
};
</script>
<style scoped>
.detail {
  position: relative;
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
header {
  position: relative;
  position: fixed;
  width: 100%;
  height: 50px;
  /* background-color: rgb(243, 235, 235); */
  z-index: 9;
}
.return {
  position: absolute;
  top: 8px;
  left: 20px;
  color: #008489;
  font-weight: bold;
  text-align: center;
  line-height: 35px;
  width: 35px;
  height: 35px;
  background-color: #fff;

  border-radius: 50%;
}

.like {
  box-sizing: border-box;
  position: absolute;
  top: 8px;
  right: 20px;
  /* left: 328px; */
  width: 35px;
  height: 35px;
}
.like img {
  width: 100%;
  height: 100%;
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
  margin: 12px 10px;
  padding-bottom: 10px;
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
}
.comment {
  margin: 10px;
  padding-bottom: 10px;
}
.comment-info {
  margin: 20px 0;
  border-bottom: 1px solid rgb(230, 230, 230);
}
.show-count {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #008489;
  font-weight: 600;
  margin-top: 10px;
}
.user {
  display: flex;
  height: 60px;
}
.user-img {
  flex: 20%;
}
.user-img img {
  width: 100%;
  height: 100%;
}
.user-info {
  flex: 80%;
  padding: 10px;
}
.context {
  padding: 10px;
}
.order {
  position: fixed;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  bottom: 0;
  background-color: #fff;
  border-top: 2px solid rgb(230, 230, 230);
}
.btn {
  height: 70%;
  width: 37%;
  margin: 10px;
  border-radius: 10px;
  color: #fff;
  background-color: rgb(189, 89, 106);
  font-size: 20px;
}
.order-infon {
  margin: 20px;
  font-size: 18px;
  font-weight: bold;
}
.none {
  height: 100px;
}
.order-infon span {
  font-size: 12px;
  color: gray;
  text-decoration: line-through;
}
.is_White {
  background-color: rgba(230, 229, 229, 0.863);
  height: 100%;
  max-width: 540px;
}
.tips {
  height: 200px;
}
.contact {
  margin-left: 10px;
  color: #008489;
}
.room-title {
  padding-left: 8px;
}
</style>

