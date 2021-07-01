<template>
  <div class="dan">
    <span class="iconfont back-icon" @click="backtoMine">&#xe641;</span><br />
    <span class="title">收款方式</span>
    <p>添加常用的收款方式，确保及时收款。</p>
    <button class="wechat" type="submit">
      <img
        class="we-img"
        src="https://img.sj33.cn/uploads/allimg/201402/7-140223103130591.png"
      />
      微信支付
    </button>
    <button class="zhifubao">
      <img
        class="zh-img"
        src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1683440168,2286570410&fm=26&gp=0.jpg"
      />
      支付宝支付
    </button>
  </div>
</template>
<script>
export default {
  name: "PayStyle",
  methods: {
    allOrder: function () {
      console.log("收款方式");
    },
    backtoMine: function () {
      this.$router.replace({ path: "/Setting" });
    },
  },
  created() {
    console.log("收款方式");
  },
};
</script>

<style scoped>
.dan {
  margin: 0.4rem;
}
.back-icon {
  margin: 0.2rem;
  font-size: 0.5rem;
}
.title {
  float: left;
  margin-top: 0.5rem;
  font-size: 0.6rem;
}
p {
  clear: both;
  float: left;
  margin-top: 0.2rem;
  font-size: 0.35rem;
}
button {
  clear: both;
  float: left;
  margin-top: 0.8rem;
  width: 100%;
  height: 2rem;
  font-size: 0.4rem;

  border-radius: 0.3rem;
  background: white;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.we-img {
  width: 35%;
  height: 85%;
}
.zh-img {
  margin-left: 0.3rem;
  height: 85%;
}
</style>