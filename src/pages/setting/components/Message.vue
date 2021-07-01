<template>
  <div class="dan">
    <span class="iconfont back-icon" @click="backtoMine">&#xe641;</span><br />
    <span class="title">通知</span><br />
    <p class="xiaoxi">消息</p>
    <p>接受预定请求等来自房东和房客的消息。</p>
    <button>
      电子邮件
      <span class="iconfont select-icon" @click="backtoMine">&#xe60d;</span
      ><br />
    </button>
    <button>
      推送通知
      <span class="iconfont select-icon" @click="backtoMine">&#xe60d;</span
      ><br />
    </button>
    <button>
      短信
      <span class="iconfont select-icon" @click="backtoMine">&#xe60d;</span
      ><br />
    </button>

    <p class="xiaoxi">提醒</p>
    <p>
      接受预定提醒、评论撰写提醒、价格提醒，以及与您使用住哪儿有关的其他题型消息。
    </p>
    <button>
      电子邮件
      <span class="iconfont select-icon" @click="backtoMine">&#xe60d;</span
      ><br />
    </button>
    <button>
      推送通知
      <span class="iconfont select-icon" @click="backtoMine">&#xe60d;</span
      ><br />
    </button>
    <button>
      短信
      <span class="iconfont select-icon" @click="backtoMine">&#xe60d;</span
      ><br />
    </button>
  </div>
</template>
<script>
export default {
  name: "Message",
  methods: {
    allOrder: function () {
      console.log("通知");
    },
    backtoMine: function () {
      this.$router.replace({ path: "/Setting" });
    },
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
.xiaoxi {
  margin-top: 0.6rem;
  font-size: 0.4rem;
}
p {
  clear: both;
  float: left;
  margin-top: 0.3rem;
  font-size: 0.3rem;
  line-height: 0.4rem;
}
button {
  clear: both;
  float: left;
  text-align: left;
  margin-top: 0.2rem;
  width: 100%;
  height: 1.5rem;
  font-size: 0.4rem;
  border-bottom-style: solid;
  border-color: rgb(211, 207, 207);
  background: white;
}
.select-icon {
  float: right;
  font-size: 0.4rem;
}
</style>