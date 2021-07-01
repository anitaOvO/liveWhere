<template>
  <div class="container">
    <div class="header">
      <span class="iconfont back-icon" @click="backtoMine">&#xe641;</span>灰灰
    </div>
    <ul class="content">
      <li v-for="(item, index) in messageList" :key="index">
        <img
          :src="
            'https://img.alicdn.com/imgextra/i2/O1CN01WpOLdY1DG97PbESGP_!!6000000000188-2-tps-80-80.png' +
            (item.myself
              ? 'https://img.alicdn.com/imgextra/i2/O1CN01WpOLdY1DG97PbESGP_!!6000000000188-2-tps-80-80.png'
              : 'https://img.alicdn.com/imgextra/i2/O1CN01WpOLdY1DG97PbESGP_!!6000000000188-2-tps-80-80.png')
          "
          :class="'img' + (item.myself ? 'right' : 'left')"
        />
        <span :class="'span' + (item.myself ? 'right' : 'left')">{{
          item.message
        }}</span>
      </li>
    </ul>
    <div class="footer">
      <div id="user_face_icon">
        <img
          src="https://img.alicdn.com/imgextra/i2/O1CN01WpOLdY1DG97PbESGP_!!6000000000188-2-tps-80-80.png"
          alt=""
        />
      </div>
      <input
        id="text"
        type="text"
        v-model.trim="inputValue"
        @keyup.enter="chat"
        placeholder="说点什么吧..."
      />
      <span id="btn" @click="chat">发送</span>
    </div>
  </div>
</template>
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script src="https://cdn.bootcss.com/jquery/1.12.4/jquery.min.js"></script>
<script>
import $ from "jquery";
import axios from "axios";
export default {
  name: "container",
  data() {
    return {
      //输入的内容
      inputValue: "",
      //聊天的数组内容
      messageList: [],
    };
  },
  methods: {
    backtoMine: function () {
      this.$router.replace({ path: "/Mail" });
    },
    //点击回车时候发送信息
    chat() {
      this.messageList.push({
        message: this.inputValue,
        //这个是判断当前是否是自己输入的内容,自己的是true,机器人的是false
        myself: true,
      });

      //每次发送信息之后机器人就要回复,所以添加完之后直接调用机器人的接口
      $.ajax({
        url: "http://www.tuling123.com/openapi/api",
        type: "post",
        data: {
          key: "e5e78db64c3744fda06533e6729737da",
          msg: this.inputValue,
        },
        success: (data) => {
          // console.log(data);
          this.messageList.push({
            message: data.text,
            myself: false,
          });
          this.inputValue = "";
        },
      });
      //   axios
      //     .post("https://api.ai.qq.com/fcgi-bin/nlp/nlp_textchat", {
      //       // key: 'rc0818b948e24414a6c19d79ef58922c',
      //       info: this.inputValue,
      //     })
      //     .then((res) => {
      //       if (res.data.code === 100000) {
      //         console.log("收到数据");
      //         this.messageList.push({
      //           message: data.text,
      //           myself: false,
      //         });
      //       }
      //       // console.log(data);
      //       this.messageList.push({
      //         message: data.text,
      //         myself: false,
      //       });
      //     });
    },
  },
};
</script>
<style scoped>
#container {
  width: 450px;
  height: 780px;
  background: #eee;
  margin: 80px auto 0;
  position: relative;
  box-shadow: 20px 20px 55px #777;
}
.back-icon {
  float: left;
  font-size: 0.45rem;
}
.header {
  top: 0;
  position: fixed;
  background: rgb(241, 233, 237);
  width: 100%;
  height: 40px;
  color: rgb(22, 19, 19);
  line-height: 34px;
  font-size: 20px;
  padding: 0 10px;
  text-align: center;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 15px 0 rgba(0, 0, 0, 0.19);
}
.footer {
  width: 100%;
  height: 50px;
  background: #666;
  position: fixed;
  bottom: 0;
  padding: 0.2rem;
}
.footer input {
  width: 55%;
  height: 45px;
  outline: none;
  font-size: 20px;
  text-indent: 10px;
  position: absolute;
  border-radius: 6px;
  margin-left: 18%;
}
.footer span {
  display: inline-block;
  width: 17%;
  height: 0.9rem;
  background: #ccc;
  line-height: 45px;
  cursor: pointer;
  text-align: center;
  position: absolute;
  margin-left: 74%;
  border-radius: 6px;
}
.footer span:hover {
  color: #fff;
  background: #999;
}
#user_face_icon {
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border-radius: 30px;
  position: absolute;
  bottom: 0.2rem;
  left: 0.3rem;
}
img {
  width: 1rem;
  height: 1rem;
}
.content {
  margin-top: 0.8rem;
  font-size: 0.4rem;
  width: 100%;
  height: 25rem;
  overflow: auto;
  padding: 5px;
}
.content li {
  margin-top: 0.2rem;
  padding-left: 0.1rem;
  width: 95%;
  display: block;
  clear: both;
  overflow: hidden;
}
.content li img {
  float: left;
}
.content li span {
  background: #7cfc00;
  padding: 10px;
  border-radius: 10px;
  float: left;
  margin: 6px 10px 0 10px;
  max-width: 5rem;
  border: 1px solid #ccc;
  box-shadow: 0 0 3px #ccc;
}
.content li img.imgleft {
  float: left;
}
.content li img.imgright {
  float: right;
}
.content li span.spanleft {
  float: left;
  background: #fff;
}
.content li span.spanright {
  float: right;
  background: #7cfc00;
}
</style>
