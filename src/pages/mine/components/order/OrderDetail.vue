<template>
  <div class="dan">
    <span class="iconfont back-icon" @click="backtoMine">&#xe641;</span><br />
    <span class="order">订单详情</span>
    <div class="list">
      <span>订单号: {{ this.$route.params.orderId }}</span
      ><br />
      <span
        >开始时间: <a>{{ Detail[0].dayStart }}</a></span
      ><br />
      <span>结束时间: {{ Detail[0].dayEnd }}</span
      ><br />
      <span>标签: {{ Detail[0].lable }}</span
      ><br />
      <span>房名: {{ Detail[0].houseName }}</span
      ><br />
      <span>总价: {{ Detail[0].totalPrice }}</span
      ><br />
      <span>房屋交易状态: {{ Detail[0].status }}</span
      ><br />
      <button class="comment" @click="comment(Detail[0].orderId)" v-if="show">
        去评论
      </button>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "OrderDetail",
  data() {
    return {
      Detail: [],
      orderId: this.$route.params.orderId,
      show: false,
      flag: this.$store.state.flag,
    };
  },
  methods: {
    // getDetail() {//获取json
    //   console.log(this.orderId)
    //   axios.get("/allOrder.json",{
    //     params: {
    //       orderId: this.orderId
    //     }
    //     }).then(this.handleGetDataSucc);
    // },
    // handleGetDataSucc(res) {
    //   res = res.data;
    //   if (res.ret && res.data) {
    //     const data = res.data;
    //     this.Detail = data.DataList;
    //   }
    // },
    backtoMine: function () {
      if (
        this.Detail[0].status == "待出行" ||
        this.Detail[0].status == "被预订"
      ) {
        this.$router.replace({ path: "/valueOrder" });
      } else {
        this.$router.replace({ path: "/allOrder" });
      }
    },
    getDetail() {
      axios // /api
        .post("/api/OrderDetail", {
          orderId: this.orderId,
        })
        .then((successResponse) => {
          //this.responseResult = JSON.stringify(successResponse.data);
          this.Detail = successResponse.data;
          if (this.Detail[0].status == "已完成" && this.flag == 1) {
            this.show = true;
          }
        })
        .catch((failResponse) => {
          alert("获取不到详情页");
        });
    },
    comment(orderId) {
      this.$router.push("/NewComment/" + orderId);
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
  font-size: 0.6rem;
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
  margin-top: 0.3rem;
  margin-bottom: 0.2rem;
  width: 100%;
  height: 0.8rem;
  border-radius: 0.2rem;
  background: lightgreen;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>