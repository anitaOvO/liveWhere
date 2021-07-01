<template>
  <div class="comment">
    <span class="iconfont back-icon" @click="backtoMine">&#xe641;</span>
    <span class="title">评论</span>
    <button @click="output">发布评价</button>
    <div class="upload">
      <h1>{{ Detail[0].houseName }}</h1>
      <textarea
        class="detail"
        placeholder="满意你就夸一夸"
        id="t1"
        onkeyup="check()"
        maxlength="60"
        v-model="detail"
      ></textarea>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { Message } from "element-ui";
export default {
  name: "NewComment",
  data() {
    return {
      flag: this.$store.state.flag,
      userId: this.$store.state.userId,
      orderId: this.$route.params.orderId,
      //houseId: this.$route.params.houseId,
      Detail: [],
    };
  },
  methods: {
    backtoMine: function () {
      this.flag === 0
        ? this.$router.replace("/Mine/HostOrder")
        : this.$router.replace("/Mine/UserOrder");
    },
    check() {
      t1.value.substr(0, 60);
    },
    getDetail() {
      axios // /api
        .post("/api/OrderDetail", {
          orderId: this.orderId,
        })
        .then((successResponse) => {
          //this.responseResult = JSON.stringify(successResponse.data);
          this.Detail = successResponse.data;
        })
        .catch((failResponse) => {
          alert("获取不到详情页");
        });
    },
    output() {
      //发布评价
      axios // /api
        .post("/api/insertComment", {
          userId: this.userId,
          orderId: this.orderId,
          houseId: this.Detail[0].houseId,
          detail: this.detail,
        })
        .then((successResponse) => {
          this.responseResult = JSON.stringify(successResponse.data);
          if (successResponse.data.code === 1) {
            Message.info("发布评论成功");
            this.$router.replace({ path: "/Mine/UserOrder" });
          } else if (successResponse.data.code === 0) {
            Message.info("发布评论失败");
          } else {
            Message.info("发布评论失败");
          }
        })
        .catch((failResponse) => {
          alert("不行咯！");
        });
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
  font-size: 25px;
  margin-top: 0.5rem;
  margin-left: 0.5rem;
}
.title {
  float: left;
  margin-top: 10%;
  margin-left: 30%;
  font-size: 0.5rem;
}
button {
  margin-top: 0.5rem;
  margin-right: 0.3rem;
  float: right;
  border-radius: 0.3rem;
  font-size: 0.3rem;
  padding: 0.1rem;
  box-shadow: 0 5px 10px 0 rgba(163, 26, 26, 0.2),
    0 5 px 10px 0 rgba(0, 0, 0, 0.19);
}
.select {
  clear: both;
  float: left;
  margin: 0.5rem;
  font-size: 0.4rem;
}
.upload {
  float: left;
  margin: 10%;
  width: 80%;
  height: 6rem;
  box-shadow: 0 8px 16px 0 rgba(163, 26, 26, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.upload h1 {
  margin: 0.3rem;
  font-size: 0.4rem;
  height: 0.4rem;
  width: 3rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.upload .detail {
  margin: 0.3rem;
  background-color: rgb(235, 233, 227);
  width: 90%;
  height: 70%;
}
</style>