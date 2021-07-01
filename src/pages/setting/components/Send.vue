<template>
  <div class="dan">
    <span class="iconfont back-icon" @click="backtoMine">&#xe641;</span>
    <span class="title">发送反馈</span>
    <h1>我们表现的如何？</h1>
    <p>
      我们一直致力于改进住哪儿的体验，所以很希望能知道哪些是我们目前做的不错的、哪些是我们做的更好的。
    </p>
    <div>
      <p>我出于以下目的使用住哪儿：</p>
      <select v-model="one">
        <option v-for="(x, index) in goal" :key="index">
          {{ x.name }}
        </option></select
      ><br />

      <p>
        请告知我们您的反馈是关于您是否是哪方面的，我们会查看所有反馈，但无法分别回复：
      </p>
      <select v-model="two">
        <option v-for="(x, index) in field" :key="index">
          {{ x.name }}
        </option></select
      ><br />

      <p>告诉我们更多想法......</p>
      <textarea
        placeholder="和我们分享您的体验，有哪些方面比较顺利？有哪些地方需要改进？"
      ></textarea>
    </div>
    <button @click="submit">提交反馈</button>
  </div>
</template>
<script>
import { Message } from "element-ui";
export default {
  name: "Send",
  data() {
    return {
      goal: [{ name: "旅行" }, { name: "出租" }, { name: "体验" }],
      field: [
        { name: "为我的旅程付款" },
        { name: "价格" },
        { name: "超赞房客" },
        { name: "发送消息" },
        { name: "寻找房源" },
        { name: "评价" },
        { name: "获取帮助" },
        { name: "我的账号或个人资料" },
        { name: "其他" },
      ],
      one: "",
      two: "",
    };
  },
  methods: {
    backtoMine: function () {
      this.$router.replace({ path: "/Setting" });
    },
    submit: function () {
      console.log(this.one);
      console.log(this.two);
      Message.info("提交成功");
    },
  },
};
</script>

<style scoped>
.dan {
  margin: 0.3rem;
  font-size: 0.5rem;
}
.back-icon {
  margin: 0.2rem;
  font-size: 0.5rem;
}
h1 {
  margin: 0.4rem;
  font-size: 0.6rem;
  font-style: italic;
}
p {
  margin: 0.3rem;
  font-size: 0.35rem;
  line-height: 0.5rem;
}
textarea {
  width: 90%;
  margin-left: 5%;
  height: 5rem;
  font-size: 0.35rem;
  border-style: solid;
  border-color: gray;
  border-radius: 0.2rem;
}
button {
  margin-top: 0.5rem;
  margin-left: 30%;
  background: white;
  color: green;
  border-style: solid;
  border-color: green;
  border-radius: 0.2rem;
  padding: 0.2rem;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
select {
  width: 80%;
  margin-left: 0.4rem;
  border-style: solid;
  background: white;
  border-color: gray;
  font-size: 0.4rem;
}
select option {
  width: 50%;
}
</style>