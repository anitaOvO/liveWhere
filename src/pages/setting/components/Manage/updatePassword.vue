<template>
  <div class="update">
    <span class="iconfont back-icon" @click="backtoSetting">&#xe641;</span
    ><br />
    <h1>修改密码</h1>
    <p>你首先要进行原密码验证身份。</p>
    <p>原来密码</p>
    <input
      class="password"
      type="text"
      placeholder="请输入旧密码"
      v-model="oldPassword"
    /><br />
    <p>新密码</p>
    <input
      class="password"
      type="text"
      placeholder="请输入新密码"
      v-model="newPassword"
    /><br />
    <p>确认新密码</p>
    <input
      class="password"
      type="text"
      placeholder="请确认新密码"
      v-model="newpwd"
    /><br />
    <button @click="update">提交</button>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "updatePassword",
  data() {
    return {
      userId: "1",
      userName: "admin",
      oldPassword: "",
      newPassword: "",
      newpwd: "",
    };
  },
  methods: {
    backtoSetting: function () {
      this.$router.replace({ path: "/Manage" });
    },
    update: function () {
      if (this.newpwd != this.newPassword) {
        alert("新密码不匹配");
      }

      axios // /api
        .post("/api/updatePassword", {
          userId: this.userId,
          userName: this.userName,
          oldPassword: this.oldPassword,
          newPassword: this.newPassword,
        })
        .then((successResponse) => {
          this.responseResult = JSON.stringify(successResponse.data);
          if (successResponse.data.code === 1) {
            alert("修改密码成功");
          } else if (successResponse.data.code === 0) {
            alert("修改密码失败");
          } else if (successResponse.data.code === 2) {
            alert("原密码不正确");
          } else {
            alert("失败");
          }
        })
        .catch((failResponse) => {
          alert("不行咯(T_T)");
        });
    },
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
.update p {
  margin-top: 0.4rem;
  font-size: 0.3rem;
  line-height: 0.4rem;
}
.update input {
  margin-top: 0.4rem;
  width: 100%;
  font-size: 0.3rem;
  line-height: 0.4rem;
  border-bottom-style: double;
  border-color: green;
}
.update input:hover {
  border-bottom-style: solid;
}
.update button {
  width: 100%;
  font-size: 0.4rem;
  margin-top: 1rem;
  border-style: double;
  color: white;
  background: green;
}
</style>