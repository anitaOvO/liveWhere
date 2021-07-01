<template>
  <div class="add">
    <header>
      <div class="show">
        <h3>{{ detailList[0].lable }}</h3>
        <span>￥{{ detailList[0].discountPrice }} /晚</span>
      </div>
      <div class="img">
        <img :src="detailList[0].image1" alt="" />
      </div>
    </header>
    <ul class="date">
      <li>
        <span class="title">入住日期</span>
        <!-- <a href="">5月23日</a> -->
        <div class="block">
          <el-date-picker
            v-model="value1"
            size="mini"
            type="date"
            placeholder="选择日期"
            format="MM / dd"
            value-format="yyyy-MM-dd"
            :picker-options="pickerOptions0"
            @focus="getDat"
          >
          </el-date-picker>
        </div>
      </li>
      <li>
        <span class="title">退房日期</span>
        <!-- <a href="">6月23日</a> -->
        <div class="block">
          <el-date-picker
            v-model="value2"
            size="mini"
            type="date"
            placeholder="选择日期"
            format="MM / dd "
            value-format="yyyy-MM-dd"
            @change="CountDay"
            @focus="getDat"
            :picker-options="pickerOptions1"
          >
          </el-date-picker>
        </div>
      </li>
      <li>
        <span class="title">房客位数</span>
        <a href="">1位</a>
      </li>
    </ul>
    <div class="fee">
      <h2>费用与税收明细</h2>
      <div class="fee-infon">
        <p>折扣：</p>
        <span>{{ discount }}折</span>
      </div>
      <div class="fee-infon">
        <p>服务费：</p>
        <span>￥10</span>
      </div>
      <div class="fee-infon">
        <p>优惠卷：</p>
        <span>-10</span>
      </div>
    </div>
    <div class="total">
      <div class="fee-infon">
        <h2>总额:<span class="discount">(已省90元）</span></h2>
        <span>￥{{ totalPrice | currency }}</span>
      </div>
    </div>
    <button class="btn" @click="add">预订</button>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "addOrder",
  props: {
    detailList: Array,
    discount: {},
  },
  data() {
    return {
      houseId: this.$route.params.houseId,

      pickerOptions0: {},
      pickerOptions1: {},
      value1: "",
      value2: "",
      days: 0,
      totalPrice: 0,
      timeList: [],
    };
  },
  filters: {
    currency(val) {
      if (!val) return "0.00";
      return val;
    },
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    CountDay() {
      let start = Date.parse(this.value1);
      let end = Date.parse(this.value2);
      if (start > end) {
        return 0;
      }
      if (start == end) {
        return 1;
      }
      this.days = (end - start) / (1 * 24 * 60 * 60 * 1000);
      this.totalPrice = this.days * this.detailList[0].discountPrice;
      console.log(this.days);
    },
    getHouse() {
      //console.log(typeof this.houseId),
    },
    add() {
      axios
        .post("/api/addOrder", {
          houseId: this.houseId,
          userId: this.$store.state.userId,
          ownerId: this.detailList[0].hostId,
          dayStart: this.value1 + " 14:00:00",
          dayEnd: this.value2 + " 14:00:00",
          totalPrice: this.totalPrice,
          status: "待支付",
        })
        .then((res) => {
          if (res.data.code === 1) {
            console.log("添加成功");
            this.getOrderId();
            this.$router.replace("/order/" + this.houseId + "/pay");
          } else {
            console.log("error");
          }
        });
    },
    getOrderId() {
      axios
        .post("/api/orderId", {
          houseId: this.houseId,
          userId: this.$store.state.userId,
          dayStart: this.value1 + " 14:00:00",
          dayEnd: this.value2 + " 14:00:00",
          totalPrice: this.totalPrice.toString(),
        })
        .then((res) => {
          console.log(res.data[0].orderId);
          this.$store.dispatch("saveOrderId", res.data[0].orderId);
        });
    },

    getDat() {
      axios
        .post("/api/disabledTime", {
          houseId: this.houseId,
        })
        .then((res) => {
          this.timeList = res.data;
          console.log(this.timeList);
          this.getTime(this.timeList, this.value1);
        });
    },

    getTime(list, value1) {
      this.pickerOptions0 = Object.assign({}, this.pickerOptions0, {
        disabledDate: (time) => {
          const today = new Date().toLocaleDateString();
          let disable = time < new Date(today);
          list.forEach((item) => {
            disable =
              disable ||
              (time.getTime() >= new Date(item.dayStart).getTime() - 8.64e7 &&
                time.getTime() < new Date(item.dayEnd).getTime()); //减去一天8.64e7
          });
          return disable;
        },
      });
      this.pickerOptions1 = Object.assign({}, this.pickerOptions1, {
        disabledDate: (time) => {
          const today = new Date().toLocaleDateString();

          let disable = time < new Date(today) || time < new Date(value1);
          list.forEach((item) => {
            disable =
              disable ||
              (time.getTime() >= new Date(item.dayStart).getTime() - 8.64e7 &&
                time.getTime() < new Date(item.dayEnd).getTime()); //减去一天8.64e7
          });
          return disable;
        },
      });
    },
  },
  mounted() {
    this.getHouse();
    this.getDat();
  },
};
</script>
<style scoped>
.add {
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

header {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  border-bottom: 1px solid rgb(158, 157, 157);
  padding-bottom: 20px;
}
.show {
  flex: 70%;
  font-size: 20px;
}
.show h3 {
  font-size: 12px;
  margin-bottom: 8px;
  font-weight: bold;
  color: rgb(182, 181, 181);
}
.img {
  flex: 30%;
  border-radius: 8px;
  overflow: hidden;
}
img {
  width: 100%;
}
.date {
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
  border-bottom: 1px solid rgb(182, 181, 181);
}
.date li {
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 20px;
}
.block {
  width: 100px;
}
.title {
  margin: 20px 0 10px;
  font-size: 14px;
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
.fee {
  padding: 20px 0;
  border-bottom: 1px solid rgb(182, 181, 181);
}
.fee h2 {
  font-size: 12px;
  font-weight: bold;
}
.fee-infon {
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
  font-size: 18px;
  font-weight: 200;
}
.total {
  padding: 20px 0;
  font-size: 18px;
  font-weight: bold;
}
.discount {
  color: #25a4bb;
  font-size: 12px;
  vertical-align: middle;
  font-weight: bold;
}
</style>
<style >
.el-input__inner {
  width: 100px;
}
.el-input--suffix .el-input__inner {
  padding-right: 0px;
}
.el-date-table td.disabled div span {
  text-decoration: line-through;
  text-decoration-color: rgb(97, 96, 96);
}
</style>