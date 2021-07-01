<template>
  <div class="pay">
    <div class="house-info">
      <div class="name">
        <p class="lable">{{ detailList[0].lable }}</p>
        <p class="housename">{{ detailList[0].houseName }}</p>
      </div>
      <div class="img">
        <img :src="detailList[0].image1" alt="" />
      </div>
    </div>
    <div class="date">
      <h2>入住日期</h2>
      <p>{{ dayStart }}——{{ dayEnd }}</p>
    </div>
    <div class="time">
      <h2>入住时间</h2>
      <p>下午2：00-下午11：00<span class="tips">(逾时不候)</span></p>
    </div>
    <div class="total">
      <div class="lef">
        <h2>总额<span>(CNY)</span></h2>
      </div>
      <div class="right">￥{{ orderList[0].totalPrice }}</div>
    </div>
    <button class="btn" @click="goToPay">去支付</button>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "pay",
  data() {
    return {
      orderId: this.$store.state.orderId,
      orderList: [],
      dayStart: "",
      dayEnd: "",
      userId: this.$store.state.userId,
    };
  },
  props: {
    detailList: Array,
  },
  methods: {
    goToPay() {
      axios
        .post("/api/spend", {
          userId: this.$store.state.userId,
          money: "200",
        })
        .then((res) => {
          if (res.data.code === 1) {
            console.log("支付成功");
            this.changeOrder();
            this.$router.push("/valueOrder"); //跳到已支付订单
          } else if (res.data.code === 2) {
            this.$router.push("/Money"); //跳到充值页面
            console.log("钱不够");
          }
        });
    },

    addOrder() {
      axios
        .post("/api/addOrder", {
          userId: this.orderList[0].ownerId,
          ownerId: this.userId,
          houseId: this.orderList[0].houseId,
          dayStart: this.orderList[0].dayStart,
          dayEnd: this.orderList[0].dayEnd,
          totalPrice: this.orderList[0].totalPrice,
          status: "被预订",
        })
        .then((res) => {
          if (res.data.code === 1) {
            console.log("添加成功");
          }
        });
    },
    changeOrder() {
      axios
        .post("/api/changeOrder", {
          orderId: this.$store.state.orderId,
        })
        .then((res) => {
          console.log("状态修改成功");
        });
      this.addOrder();
    },
    getOrder() {
      //console.log(this.detailList);
      axios
        .post("/api/OrderDetail", {
          orderId: this.orderId,
        })
        .then((res) => {
          this.orderList = res.data;
          this.dayStart = this.orderList[0].dayStart.substr(0, 11);
          this.dayEnd = this.orderList[0].dayEnd.substr(0, 11);
        });
    },
  },
  mounted() {
    this.getOrder();
  },
};
</script>
<style scoped>
.pay {
  box-sizing: border-box;
  max-width: 540px;
  min-width: 320px;
  margin: 0 auto;
  font: normal 14px/1.5 Tahoma, "Lucida Grande", Verdana, "Microsoft Yahei",
    STXihei, hei;
  color: #000;
  background-color: #fff;
  overflow-x: hidden;
  -webkit-tap-highlight-color: transparent;
  padding: 0 20px;
}
.house-info {
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid rgb(158, 157, 157);
}
.name {
  box-sizing: border-box;
  flex: 70%;
}
.lable {
  margin: 10px 0;
  color: grey;
}
.housename {
  margin: 10px 10px 10px 0;
  line-height: 30px;
  font-size: 18px;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.img {
  margin-top: 15px;
  flex: 30%;
  border-radius: 8px;
  overflow: hidden;
}
img {
  width: 100%;
  border-radius: 8px;
}
.date {
  font-size: 16px;
  margin-bottom: 20px;
}
.time {
  padding-bottom: 20px;
  border-bottom: 1px solid rgb(158, 157, 157);
}
.time h2,
.date h2,
.total h2 {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 20px;
}
.time p {
  font-size: 16px;
}
.tips {
  color: #25a4bb;
  font-weight: bold;
  font-size: 12px;
}
.total {
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
}
.total span {
  color: #25a4bb;
}
.right {
  font-weight: bold;
  font-size: 16px;
}
.btn {
  position: absolute;
  bottom: 10px;
  width: 90%;
  height: 50px;
  background-color: rgb(189, 89, 106);
  border-radius: 8px;
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  max-width: 540px;
}
</style>