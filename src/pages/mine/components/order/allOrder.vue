<template>
  <div class="dan">
    <span class="iconfont back-icon" @click="backtoMine">&#xe641;</span>
    <span class="title">已完成订单</span>
    <router-link
      v-for="item of DataList"
      :key="item.orderId"
      :to="'/OrderDetail/' + item.orderId"
    >
      <button class="list">
        <img :src="item.image1" />
        <span>{{ item.lable }}</span
        ><br />
        <span>{{ item.houseName }}</span
        ><br />
        <span>￥ {{ item.totalPrice }}</span
        ><br />
        <span class="status">{{ item.status }}</span
        ><br />
      </button>
    </router-link>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "allOrder",
  data() {
    return {
      DataList: [],
      orderId: this.orderId,
      userId: this.$store.state.userId,
      flag: this.$store.state.flag,
    };
  },
  methods: {
    backtoMine: function () {
      this.flag === 0
        ? this.$router.replace("/Mine/HostOrder")
        : this.$router.replace("/Mine/UserOrder");
    },
    getDataList() {
      axios // /api
        .post("/api/orderList", {
          userId: this.userId,
          status: "已完成",
        })
        .then((successResponse) => {
          //this.responseResult = JSON.stringify(successResponse.data);
          this.DataList = successResponse.data;
          console.log(this.DataList);
        })
        .catch((failResponse) => {
          alert("获取不到全部订单");
        });
    },
  },
  mounted() {
    this.getDataList();
    window.reload();
  },
};
</script>

<style scoped>
.dan {
  margin: 0.3rem;
  font-size: 0.5rem;
}
.back-icon {
  margin: 0.2rem;
}
button {
  clear: both;
  float: left;
  margin-top: 0.8rem;
  width: 100%;
  height: 2.5rem;
  font-size: 0.38rem;
  border-radius: 0.3rem;
  background: white;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
img {
  float: left;
  margin: 0.2rem;
  border-radius: 10px;
  width: 30%;
  height: 85%;
}
span {
  float: left;
  width: 60%;
  text-align: left;
  overflow: hidden;
  white-space: nowrap; /*文本不换行 */
  text-overflow: ellipsis; /*多出部分省略号 */
}
.status {
  text-align: right;
  margin-right: 0.2rem;
  color: green;
}
</style>