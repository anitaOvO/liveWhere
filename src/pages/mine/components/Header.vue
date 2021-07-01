<template>
  <div class="mineheader">
    <div>
      <img
        class="img"
        src="https://img.alicdn.com/imgextra/i2/O1CN01WpOLdY1DG97PbESGP_!!6000000000188-2-tps-80-80.png"
      />
    </div>
    <div class="name">
      <ul v-if="showname" @click="toLogin">
        未登录/注册
      </ul>
      <span v-else class="show">{{ this.userName }}</span>
    </div>
    <div class="setting">
      <div class="iconfont back-icon" @click="toSetting">&#xe642;</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "MineHeader",
  props: {
    userName: String,
  },
  data() {
    return {
      showname: true,
    };
  },
  methods: {
    toSetting: function () {
      //console.log(this.userName);
      this.$router.replace({ path: "/Setting" });
    },
    toLogin: function () {
      this.$router.replace({ path: "/Login" });
    },
  },
  created() {
    if (this.userName === "") {
      //判断为空，显示登录注册
      this.showname = true;
      console.log(this.showname);
    } else {
      //获取用户名，显示登录名

      this.showname = false;
      console.log(this.userName);
    }
  },
};
</script>
<style scoped>
.mineheader {
  display: flex;
  margin: 0.2rem;
  border-bottom: 1px solid rgb(209, 204, 204);
}
.mineheader .img {
  margin: 0.5rem 0.6rem;
}
.mineheader .setting {
  width: 10%;
  margin: 0.1rem;
  font-size: 1rem;
  line-height: 1rem;
}
.mineheader .name {
  width: 40%;
  margin: 1rem 1.3rem;
  margin-right: 0.1rem;
  font-size: 0.4rem;
}
.show {
  width: 20px;
  height: 20px;
}
.back-icon {
  font-size: 0.45rem;
}
</style>