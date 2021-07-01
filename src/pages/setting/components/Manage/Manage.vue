<template>
  <div class="dan">
    <span class="iconfont back-icon" @click="backtoSetting">&#xe641;</span
    ><br />
    <span class="title">账号管理</span>
    <p>您可以使用以下方式登录住哪儿</p>

    <button class="wechat" @click="updatePhone" :phone="phone">
      <p class="plus">更换</p>
      手机号<br />
      +86 {{ phone.phone }}
    </button>
    <button class="zhifubao" @click="updateMail">
      <p class="plus">添加</p>
      电子邮箱
    </button>
    <button class="updatapassword" @click="updatePassword">
      <p class="update">修改</p>
      修改密码
    </button>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "SettingManage",
  data() {
    return {
      userId: "1",
      phone: [{ phone: "123" }],
    };
  },
  methods: {
    backtoSetting: function () {
      this.$router.replace({ path: "/Setting" });
    },
    updatePhone: function () {
      this.$router.replace({ path: "/updatePhone" });
    },
    updateMail: function () {
      this.$router.replace({ path: "/updateMail" });
    },
    updatePassword: function () {
      this.$router.replace({ path: "/updatePassword" });
    },
    getphone() {
      axios // /api
        .post("/api/showPhone", {
          userId: this.userId,
        })
        .then((successResponse) => {
          //this.responseResult = JSON.stringify(successResponse.data);
          this.phone = successResponse.data;
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
  margin-top: 0.3rem;
}
button {
  clear: both;
  float: left;
  margin-top: 0.8rem;
  width: 100%;
  height: 2rem;
  font-size: 0.4rem;
  text-align: left;
  padding: 0.2rem;
  border-radius: 0.3rem;
  background: white;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.plus {
  padding-right: 0.3rem;
  float: right;
  color: rgb(47, 255, 109);
}
.update {
  padding-right: 0.3rem;
  float: right;
  color: rgb(47, 255, 109);
}
.phone {
  clear: both;
}
</style>