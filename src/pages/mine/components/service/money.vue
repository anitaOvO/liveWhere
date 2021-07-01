<template>
  <div>
    <span class="iconfont back-icon" @click="backtoMine">&#xe641;</span>
    <div class="money">
      <span class="title">余额</span>
      <div class="qian" :money1="money1">{{ money1.money }}</div>
      <input class="input_money" type="text" v-model="money" />
      <div class="PG">
        <button class="post" @click="plus">充值</button>
        <button class="get" @click="down">提现</button>
      </div>
    </div>
    <ul class="historyPay">
      历史充值信息:
      <li v-for="(mes, index) in History" :key="index">
        {{ mes.time }} {{ mes.information }} {{ mes.changeMoney }}
      </li>
    </ul>
  </div>
</template>
<script>
import axios from "axios";
import { Message } from "element-ui";
export default {
  name: "Money",
  data() {
    return {
      userId: this.$store.state.userId,
      money: 0,
      money1: 0,
      flag: this.$store.state.flag,
      type: "",
      History: [],
    };
  },

  methods: {
    backtoMine: function () {
      this.flag === 0
        ? this.$router.replace("/Mine/HostOrder")
        : this.$router.replace("/Mine/UserOrder");
    },
    plus: function () {
      axios // /api
        .post("/api/plusMoney", {
          userId: this.userId,
          money: this.money,
        })
        .then((successResponse) => {
          this.responseResult = JSON.stringify(successResponse.data);
          if (successResponse.data.code === 1) {
            this.changeCount();
            this.showHistory();
            this.getmoney1();
            this.money = 0;
          } else if (successResponse.data.code === 0) {
            Message.info("充值失败");
          } else {
            Message.info("充值失败");
          }
        })
        .catch((failResponse) => {
          alert("不行咯(T_T)");
        });
    },
    changeCount() {
      axios
        .post("/api/insertAccount", {
          userId: this.userId,
          changeMoney: this.money,
          information: "充值",
        })
        .then((res) => {
          res.data.code === 1
            ? Message.info("充值成功")
            : Message.info("充值失败");
        });
    },
    down: function () {
      axios // /api
        .post("/api/spend", {
          userId: this.userId,
          money: this.money,
        })
        .then((successResponse) => {
          this.responseResult = JSON.stringify(successResponse.data);
          if (successResponse.data.code === 1) {
            Message.info("提现成功");
            this.showHistory();
            this.getmoney1();
            this.money = 0;
          } else if (successResponse.data.code === 0) {
            Message.info("提现失败");
          } else {
            Message.info("提现失败");
          }
        })
        .catch((failResponse) => {
          Message.info("不行咯(T_T)");
        });
    },
    getmoney1() {
      axios // /api
        .post("/api/showMoney", {
          userId: this.userId,
        })
        .then((successResponse) => {
          //this.responseResult = JSON.stringify(successResponse.data);
          this.money1 = successResponse.data;
        })
        .catch((failResponse) => {
          Message.info("获取不到余额咯(T_T)");
        });
    },
    showHistory() {
      //获取历史充值消息
      axios // /api
        .post("/api/selectAccount", {
          userId: this.userId,
        })
        .then((successResponse) => {
          //this.responseResult = JSON.stringify(successResponse.data);
          this.History = successResponse.data;
        })
        .catch((failResponse) => {
          Message.info("获取不到历史充值咯(T_T)");
        });
    },
  },
  mounted() {
    this.getmoney1();
    this.showHistory();
  },
};
</script>
<style scoped>
.back-icon {
  float: left;
  font-size: 0.7rem;
  margin-top: -1rem;
  margin-left: 0.5rem;
}
ul {
  float: right;
  font-size: 0.3rem;
  margin-top: -1rem;
  margin-right: 0.5rem;
  color: rgb(46, 185, 46);
  text-decoration: underline;
}
.money {
  margin: 20%;
  margin-left: 40%;
  font-size: 0.6rem;
}
.qian {
  margin-top: 0.4rem;
  margin-left: -1.5rem;
  height: 0.8rem;
  text-align: center;
  padding-top: 0.1rem;
  box-shadow: 0 8px 16px 0 rgba(163, 26, 26, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.input_money {
  margin-top: 1.5rem;
  margin-left: -1.5rem;

  border-bottom-color: rgba(84, 83, 87, 0.856);
  font-size: 0.4rem;
  text-align: center;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.PG {
  width: 4rem;
  margin-top: 2rem;
  margin-left: -1.2rem;
  font-size: 0.5rem;
}
.PG .post {
  float: left;
  border-radius: 0.2rem;
  padding: 0.1rem;
  color: rgb(46, 185, 46);
  background: white;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.PG .get {
  float: right;
  border-radius: 0.2rem;
  padding: 0.1rem;
  background: white;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.historyPay {
  float: left;
  font-size: 0.4rem;
  margin: 0.8rem 0.5rem;
  text-decoration: none;
}
.historyPay li {
  color: black;
  margin-top: 0.2rem;
}
</style>