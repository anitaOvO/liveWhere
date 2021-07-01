<template>
  <div class="detail">
    <show-detail :houseId="houseId" :detailList="detailList"></show-detail>
    <div class="order">
      <div class="order-infon">
        ￥{{ detailList[0].discountPrice }} /晚
        <span>{{ detailList[0].price }}/晚</span>
      </div>
      <button class="btn" @click="addOrder">预订</button>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import ShowDetail from "../components/showdetail.vue";
export default {
  name: "detail",
  components: {
    ShowDetail,
  },
  data() {
    return {
      houseId: this.$route.params.houseId,
      detailList: [],
    };
  },
  methods: {
    getHouse() {
      //console.log(typeof this.houseId),
      axios //
        .post("/api/house", {
          houseId: this.houseId,
        })
        .then((successResponse) => {
          this.detailList = successResponse.data;
          console.log(this.detailList);
        })
        .catch((failResponse) => {
          alert("no house");
        });
    },
    addOrder() {
      this.$router.push("/order/" + this.houseId + "/addOrder");
    },
  },
  mounted() {
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
}
.order {
  position: fixed;
  max-width: 540px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  bottom: 0;
  background-color: #fff;
  border-top: 2px solid rgb(230, 230, 230);
}
.btn {
  height: 50px;
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
.order-infon span {
  font-size: 12px;
  color: gray;
  text-decoration: line-through;
}
</style>