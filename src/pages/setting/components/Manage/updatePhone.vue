<template>
  <div class="update">
    <span class="iconfont back-icon" @click="backtoSetting">&#xe641;</span
    ><br />
    <h1>身份验证</h1>
    <p>请核验与住哪儿账号绑定的手机号码，以更改手机号码</p>
    <p>已绑定的手机号</p>
    <p>+86</p>
    <input class="phone" placeholder="请输入手机号" v-model="phone" /><br />
    <button @click="update">更换手机号</button>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "updatePhone",
  data() {
    return {
      userId: this.$store.state.userId,
      phone: "",
    };
  },
  methods: {
    backtoSetting: function () {
      this.$router.replace({ path: "/Manage" });
    },
    update: function () {
      axios // /api
        .post("/api/updatePhone", {
          userId: this.userId,
          phone: this.phone,
        })
        .then((successResponse) => {
          this.responseResult = JSON.stringify(successResponse.data);
          if (successResponse.data.code === 1) {
            alert("修改号码成功");
          } else if (successResponse.data.code === 0) {
            alert("修改号码失败");
          } else {
            alert("失败");
          }
        })
        .catch((failResponse) => {
          alert("不行咯(T_T)");
        });
    },
    getphone() {
      axios // /api
        .post("/api/showPhone", {
          userId: this.userId,
        })
        .then((successResponse) => {
          //this.responseResult = JSON.stringify(successResponse.data);
          this.phone = successResponse.data[0].phone;
          console.log(this.phone);
        })
        .catch((failResponse) => {
          alert("获取不到手机号咯(T_T)");
        });
    },
  },
  mounted() {
    this.getphone();
  },
};
</script>
<style scoped>
.update {
  margin: 0.5rem;
  font-size: 0.5rem;
}
.update .back-icon {
  font-size: 0.5rem;
}
.update h1 {
  margin-top: 0.5rem;
}
.update p,
input {
  margin-top: 0.4rem;
  font-size: 0.3rem;
  line-height: 0.4rem;
}
.update button {
  width: 50%;
  font-size: 0.4rem;
  margin-top: 1rem;
  border-style: double;
  color: white;
  background: green;
}
</style>