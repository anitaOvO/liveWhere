<template>
  <div class="order">
    <order-header :title="title"></order-header>
    <router-view :detailList="detailList" :discount="discount"></router-view>
  </div>
</template>
<script>
import axios from "axios";
import OrderHeader from "../components/OrderHeader.vue";
import addOrder from "../components/addOrder.vue";
import Pay from "../components/pay.vue";
export default {
  name: "order",
  components: {
    addOrder,
    Pay,
    OrderHeader,
  },
  data() {
    return {
      title: "",
      houseId: this.$route.params.houseId,
      detailList: [],
      discount: "0",
    };
  },
  methods: {
    getHouse() {
      axios //
        .post("/api/house", {
          houseId: this.houseId,
        })
        .then((successResponse) => {
          this.detailList = successResponse.data;
          this.discount = (
            this.detailList[0].discountPrice / this.detailList[0].price
          ).toFixed(2);
          console.log(this.detailList);
        })
        .catch((failResponse) => {
          alert("no house");
        });
    },
  },
  mounted() {
    let path = this.$route.path;
    console.log(path);
    if (path == "/order/" + this.houseId + "/addOrder") {
      this.title = "添加订单";
    } else {
      this.title = "支付订单";
    }
    this.getHouse();
  },
};
</script>
<style scoped>
</style>
