<template>
  <div class="background">
    <h1>hello</h1>
    <div class="container">
      <div class="name">
        <label>用户名： <br /> </label
        ><input
          type="text"
          name="username"
          placeholder="input your name"
          v-model.trim="loginInfo.userName"
        />
      </div>
      <div class="pwd">
        <label>密码： <br /> </label
        ><input
          type="password"
          name="passwd"
          placeholder="input the passwd"
          v-model.trim="loginInfo.password"
        />
      </div>
    </div>
    <button type="submit" @click="handleLogin">Login</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      loginInfo: { userName: "", password: "" },
      responseResult: [],
    };
  },
  mounted: function () {
    axios
      .get("/api/data")
      .then((res) => {
        //get()中的参数要与mock.js文件中的Mock.mock()配置的路由保持一致
        this.data = res.data.data;
        console.log(res.data); //在console中看到数据
      })
      .catch((res) => {
        alert("wrong");
      });
  },
  methods: {
    handleLogin: function () {
      alert(this.loginInfo.userName);

      axios // /api
        .post("/api/data", {
          userName: this.loginInfo.userName,
          password: this.loginInfo.password,
        })
        .then((successResponse) => {
          this.responseResult = JSON.stringify(successResponse.data);
          if (successResponse.data.code === 1) {
            this.$router.replace({ path: "/Home" });
          } else {
            alert("密码错误");
          }
        })
        .catch((failResponse) => {
          alert("what the fuck???");
        });
    },
  },
};
</script>

<style scoped>
.background {
  width: 414px;
  height: 896px;
  background-size: 100% 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(30, 163, 216, 0.384);
}
.container {
  position: absolute;
  top: 50%;
  left: 45%;
  background: rgba(35, 115, 207, 0.336);
  transform: translate(-50%, -85%);
  width: 358px;
  height: 300px;
  text-align: center;
  border-radius: 20px;
  margin-top: 10px;
}
.container .name {
  text-align: left;
  margin-top: 60px;
  margin-left: 30px;
}
input {
  margin-top: 15px;
  border-top-style: none;
  border-left-style: none;
  border-right-style: none;
  border-bottom-color: rgba(83, 82, 85, 0.26);
  background: rgba(8, 8, 8, 0);
  width: 280px;
  font-size: 18px;
  outline: none;
}
input:focus {
  border-bottom-width: 4px;
  border-bottom-left-radius: 10px;
  transition: border-bottom-width 5s;
  border-bottom-color: peru;
  box-shadow: 0 0 10px #9ecaed;
}
.container .pwd {
  text-align: left;
  margin-top: 34px;
  margin-left: 30px;
}
button {
  width: 300px;
  height: 50px;
  position: absolute;
  bottom: 35%;
  left: 8%;
  border-radius: 24px;
  background: rgba(162, 212, 157, 0.644);
  border-style: none;
}
</style>