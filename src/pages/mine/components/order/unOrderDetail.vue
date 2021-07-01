<template>
  <div class="dan">
    <span class="iconfont back-icon" @click="backtoMine">&#xe641;</span><br />
    <span class="order">待支付订单</span>
    <div class="list">
      <span>订单号: {{ this.$route.params.orderId }}</span
      ><br />
      <span
        >开始时间: <a>{{ Detail[0].dayStart }}</a></span
      ><br />
      <span>结束时间: {{ Detail[0].dayEnd }}</span
      ><br />
      <span>买家ID: {{ Detail[0].userId }}</span
      ><br />
      <span>房主ID: {{ Detail[0].ownerId }}</span
      ><br />
      <span>房号: {{ Detail[0].houseId }}</span>
      <br />
      <span>标签: {{ Detail[0].lable }}</span
      ><br />
      <span>房名: {{ Detail[0].houseName }}</span
      ><br />
      <span>总价: {{ Detail[0].totalPrice }}</span
      ><br />
      <span>房屋交易状态: {{ Detail[0].status }}</span
      ><br />
    </div>
    <button class="pay" @click="pay">去支付</button>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "unOrderDetail",
  data() {
    return {
      Detail: [],
      orderId: this.$route.params.orderId,
      houseId: "",
    };
  },
  methods: {
    backtoMine: function () {
      this.$router.replace({ path: "/unOrder" });
    },
    pay: function () {
      this.$router.replace("/order/" + this.houseId + "/pay");
      console.log("去支付");
    },
    getDetail() {
      axios // /api
        .post("/api/OrderDetail", {
          orderId: this.orderId,
        })
        .then((successResponse) => {
          //this.responseResult = JSON.stringify(successResponse.data);
          this.Detail = successResponse.data;
          this.houseId = this.Detail[0].houseId;
          console.log(this.Detail);
        })
        .catch((failResponse) => {
          alert("获取不到详情页");
        });
    },
  },
  mounted() {
    this.getDetail();
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
.order {
  float: left;
  margin-top: 0.5rem;
}
.list {
  clear: both;
  float: left;
  font-size: 0.35rem;
  padding: 0.3rem;
  margin: 0.4rem;
  line-height: 0.6rem;
  border-radius: 0.3rem;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
button {
  width: 100%;
  border-radius: 0.3rem;
  background: rgb(189, 89, 106);
  padding: 0.3rem;
  color: #fff;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
button:hover {
  color: white;
}
.setting {
  background-color: aqua;
}
</style>