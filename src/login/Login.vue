<template>
  <div class="login">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe641;</div>
    </div>
    <div class="header-top">使用账号密码登录</div>
    <div class="header-below">使用已注册手机号或邮箱登录</div>
    <div>
      <!--class="background"-->
      <div class="container">
        <div class="name">
          <label>用户名： <br /> </label
          ><input
            type="text"
            name="username"
            placeholder="请输入用户名"
            v-model.trim="loginInfo.userName"
          />
        </div>
        <div class="pwd">
          <label
            >密码：
            <br />
          </label>
          <div class="dinput">
            <input
              type="password"
              name="passwd"
              placeholder="请输入密码"
              v-model.trim="loginInfo.password"
              v-if="show"
            />
            <input
              type="text"
              name="passwd"
              placeholder="请输入密码"
              v-model.trim="loginInfo.password"
              v-else
            />
            <i class="iconfont password-show" @click="pwd_show">&#xe635;</i>
          </div>
        </div>
        <div class="Toregister">
          <p class="forget">忘记密码?</p>
          <p class="register" @click="register">还没有账号,去注册?</p>
        </div>
      </div>
      <div class="state">
        <div class="state-left">
          <input
            @click="handleRent"
            id="yes"
            type="radio"
            value="0"
            name="s"
            checked="true"
          />
          <label for="yes">租客</label>
        </div>
        <div class="state-right">
          <input @click="handleHost" id="no" type="radio" value="0" name="s" />
          <label for="no">房东</label>
        </div>
      </div>
      <button type="submit" @click="handleLogin">登录</button>
    </div>
    <div class="content">
      <p>
        注册/登录即代表您年满18岁，已认真阅读并确认接受住哪儿《服务条款》、《隐私政策》
        ，并同意订阅住哪儿特惠信息和政策更新，您可在设置中随时退订。
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { Message } from "element-ui";
export default {
  name: "Login",
  data() {
    return {
      loginInfo: { userName: "", password: "" },
      responseResult: [],
      show: true, //初始为隐藏状态
      flag: 1,
    };
  },
  methods: {
    pwd_show: function () {
      //红心按钮定义方法
      this.show = !this.show;
    },
    register: function () {
      this.$router.replace({ path: "/register" });
    },
    handleRent() {
      this.flag = 1;
    },
    handleHost() {
      this.flag = 0;
    },
    handleLogin: function () {
      axios // /api
        .post("/api/login", {
          userName: this.loginInfo.userName,
          password: this.loginInfo.password,
          flag: this.flag,
        })
        .then((res) => {
          if (res.data[1].code === 1) {
            this.$store.dispatch("saveUserName", res.data[1].userTrueName);
            this.$store.dispatch("saveUserId", res.data[0].userId);
            this.$store.dispatch("saveFlag", this.flag);
            this.flag === 0
              ? this.$router.replace({ path: "/Mine/HostOrder" })
              : this.$router.replace({ path: "/Mine/UserOrder" });
          } else if (res.data[1].code === 0) {
            Message({
              message: "用户名或密码错误",
            });
          }
        })
        .catch(() => {
          Message({
            message: "error",
          });
        });
    },
  },
};
</script>

<style scoped>
.login {
  position: relative;
  max-width: 540px;
  min-width: 320px;
  /* background:yellowgreen; */
  margin: 0 auto;
  height: 650px;
}
.header-left {
  width: 1rem;
  line-height: 2rem;
  padding-left: 0.4rem;
}
.header-left .back-icon {
  font-size: 0.5rem;
}
.header-top {
  font-size: 0.5rem;
  line-height: 0.1rem;
  padding-left: 0.4rem;
}
.header-below {
  text-align: left;
  padding-left: 0.4rem;
  margin-top: 0.35rem;
  color: rgb(127, 127, 127);
}
.container {
  position: absolute;
  top: 0.1rem;
  text-align: center;
  border-radius: 20px;
  margin-top: 1.5rem;
  padding: 0.4rem;
}
input {
  margin-top: 0.5rem;
  border-style: none none solid none;
  border-bottom-color: rgba(232, 228, 240, 0.856);
  width: 6rem;
  font-size: 0.3rem;
}
.container .name {
  text-align: left;
  margin-top: 1.5rem;
}
.container .pwd {
  position: relative;
  text-align: left;
  margin-top: 1rem;
  margin-bottom: 5%;
}
.container .pwd .password-show {
  position: absolute;
  margin-top: 0.5rem;
  margin-left: 0.2rem;
  font-size: 0.4rem;
}
.container .Toregister .forget {
  float: left;
  color: rgb(16, 231, 167);
}
.container .Toregister .register {
  float: right;
  color: rgb(16, 231, 167);
}
button {
  width: 6rem;
  height: 0.8rem;
  margin-top: 6rem;
  margin-left: 0.5rem;
  border-radius: 24px;
  color: white;
  font-size: 0.4rem;
  background: rgba(27, 184, 13, 0.644);
  border-style: none;
}
.content {
  font-size: 0.25rem;
  padding: 0.5rem;
  text-align: center;
  line-height: 0.35rem;
  color: rgb(127, 127, 127);
  margin: 1.8rem 0.2rem;
}
.state {
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: 80%;
  max-width: 540px;
  margin-top: 5.2rem;
  padding-left: 50px;
  padding-right: 50px;
}
.state input {
  margin: 0;
  width: 30px;
}
</style>