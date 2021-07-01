<template>
  <div class="dan">
    <span class="title">我的订单</span>
    <div class="order">
      <li>
        <a href="#" @click="validOrder">
          <span class="iconfont order-icon">&#xe608;</span>
          <span class="font">被预订订单</span>
        </a>
      </li>
      <li>
        <a href="#" @click="allOrder">
          <span class="iconfont order-icon">&#xe61a;</span>
          <span class="font">已完成订单</span>
        </a>
      </li>
    </div>
  </div>
</template>
<script>
export default {
  name: "HostOrder",
  methods: {
    allOrder: function () {
      this.$router.replace({ path: "/allOrder" });
    },
    validOrder: function () {
      this.$router.replace({ path: "/valueOrder" });
    },
  },
};
</script>
<style scoped>
/* .dan{
  border-bottom:1px solid rgb(209, 204, 204);
} */
.title {
  margin-left: 0.2rem;
  font-size: 0.35rem;
}
.order {
  /* background:saddlebrown; */
  display: flex;
  margin: 0.2rem;
  border-top-color: blueviolet;
}
.order li {
  flex: 1;
  list-style-type: none;
  margin: 0.2rem;
}
.order a {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: gray;
  font-size: 0.3rem;
}
.order-icon {
  width: 42px;
  height: 27px;
  font-size: 25px;
  margin-top: 7px;
  margin-bottom: 5px;
  text-align: center;
}
</style>