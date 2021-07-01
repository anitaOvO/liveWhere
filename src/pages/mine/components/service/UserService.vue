<template>
  <div class="service">
    <span class="title">我的服务</span>
    <div class="fuwu">
      <li>
        <a href="/Money">
          <span class="iconfont service-icon">&#xe6ad;</span>
          <span class="font">我的钱包</span>
        </a>
      </li>
      <li>
        <a href="/Mail">
          <span class="iconfont service-icon">&#xe9e2;</span>
          <span class="font">联系房东</span>
        </a>
      </li>
      <li>
        <a href="/comment">
          <span class="iconfont service-icon">&#xe621;</span>
          <span class="font">我的评价</span>
        </a>
      </li>
    </div>
  </div>
</template>
<script>
export default {
  name: "UserService",
};
</script>
<style scoped>
.service {
  margin-top: 0.3rem;
  border-bottom: 1px solid rgb(238, 233, 233);
}
.title {
  margin-left: 0.2rem;
  font-size: 0.35rem;
}
.fuwu {
  /* background:saddlebrown; */
  display: flex;
  margin: 0.2rem;
  border-top-color: blueviolet;
}
.fuwu li {
  flex: 1;
  list-style-type: none;
  margin: 0.2rem;
}
.fuwu a {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: gray;
  font-size: 0.3rem;
}
.service-icon {
  width: 42px;
  height: 27px;
  font-size: 25px;
  margin-top: 7px;
  margin-bottom: 5px;
  text-align: center;
}
</style>