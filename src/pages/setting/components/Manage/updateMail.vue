<template>
  <div class="update">
    <span class="iconfont back-icon" @click="backtoSetting">&#xe641;</span
    ><br />
    <h1>添加电子邮件地址</h1>
    <p>你可以使用次电子地址进行登录。</p>
    <p>电子邮件地址</p>
    <input
      class="email"
      type="email"
      placeholder="请输入邮箱"
      v-model="email"
    /><br />
    <button @click="update">提交</button>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "updateMail",
  data() {
    return {
      userId: "1",
      email: "",
    };
  },
  methods: {
    backtoSetting: function () {
      this.$router.replace({ path: "/Manage" });
    },
    update: function () {
      axios // /api
        .post("/api/updateEmail", {
          userId: this.userId,
          email: this.email,
        })
        .then((successResponse) => {
          this.responseResult = JSON.stringify(successResponse.data);
          if (successResponse.data.code === 1) {
            alert("添加邮箱成功");
          } else if (successResponse.data.code === 0) {
            alert("添加邮箱失败");
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