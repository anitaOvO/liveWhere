<template>
  <div class="comment">
    <span class="iconfont back-icon" @click="backtoMine">&#xe641;</span>
    <span class="title">评论</span>
    <div class="upload" v-for="(item, index) in Detail" :key="index">
      <h1>{{ item.houseName }}</h1>
      <h1>订单日期：{{ item.time }}</h1>
      <img :src="item.image1" />
      <span class="price">￥{{ item.price }}</span
      ><br />
      <span class="wen">评论内容：{{ item.detail }}</span>
      <button
        class="delete"
        @click="deleteComment(item.houseId, item.detail)"
        v-if="show"
      >
        删除
      </button>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { Message } from "element-ui";
export default {
  name: "comment",
  data() {
    return {
      flag: this.$store.state.flag,
      userId: this.$store.state.userId,
      Detail: [],
      houseId: "",
      show: false,
    };
  },
  methods: {
    backtoMine: function () {
      this.flag === 0
        ? this.$router.replace("/Mine/HostOrder")
        : this.$router.replace("/Mine/UserOrder");
    },
    deleteComment(houseId, detail) {
      axios // /api
        .post("/api/deleteComment", {
          houseId: houseId,
          userId: this.userId,
          detail: detail,
        })
        .then((successResponse) => {
          this.responseResult = JSON.stringify(successResponse.data);
          if (successResponse.data.code === 1) {
            Message.info("删除评论成功");
            this.getDetail();
          } else if (successResponse.data.code === 0) {
            Message.info("删除评论失败");
          } else {
            Message.info("删除评论失败");
          }
        })
        .catch((failResponse) => {
          alert("不行咯！");
        });
    },
    getDetail() {
      if (this.flag == 0) {
        axios // /api
          .post("/api/selectUserComment", {
            userId: this.userId,
          })
          .then((successResponse) => {
            //this.responseResult = JSON.stringify(successResponse.data);
            this.Detail = successResponse.data;
          })
          .catch((failResponse) => {
            alert("获取不到评论");
          });
      } else if (this.flag == 1) {
        this.show = true;
        axios // /api
          .post("/api/selectUserComment2", {
            userId: this.userId,
          })
          .then((successResponse) => {
            //this.responseResult = JSON.stringify(successResponse.data);
            this.Detail = successResponse.data;
          })
          .catch((failResponse) => {
            alert("获取不到评论");
          });
      }
    },
  },
  mounted() {
    this.getDetail();
  },
};
</script>
<style scoped>
.back-icon {
  float: left;
  font-size: 0.65rem;
  margin-top: 10%;
  margin-left: 0.5rem;
}
.title {
  float: left;
  margin-top: 11%;
  margin-left: 25%;
  font-size: 0.5rem;
}
button {
  margin-top: 0.5rem;
  margin-right: 0.3rem;
  float: right;
  border-radius: 0.3rem;
  font-size: 0.3rem;
  padding: 0.1rem;
}
.select {
  clear: both;
  float: left;
  margin: 0.5rem;
  font-size: 0.4rem;
}
.upload {
  float: left;
  margin: 5%;
  width: 90%;
  border-radius: 0.3rem;
  box-shadow: 0 8px 16px 0 rgba(163, 26, 26, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.upload h1 {
  margin: 0.3rem;
  font-size: 0.4rem;
  color: rgb(131, 130, 130);
}
.upload .detail {
  margin: 0.3rem;
  background-color: rgb(235, 233, 227);
  width: 90%;
  height: 70%;
}
span {
  margin: 0.4rem;
}
.wen {
  float: left;
  margin: 0.5rem;
  font-size: 0.4rem;
}
.price {
  float: right;
  margin-top: 20%;
  font-size: 0.5rem;
  color: rgb(63, 150, 121);
}
.delete {
  float: right;
  font-size: 0.4rem;
  margin: 0.38rem;
  color: rgb(63, 150, 121);
}
img {
  margin-left: 0.3rem;
  width: 50%;
}
</style>