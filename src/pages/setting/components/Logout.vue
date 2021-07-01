<template>
  <div class="dan">
    <span class="iconfont back-icon" @click="backtoMine">&#xe641;</span>
    <span class="title">账号注销</span>
    <div class="message">
      <h1>账号注销</h1>
      <h2>以下信息被清空且无法找回</h2>
    </div>
    <div class="list">
      <li>身份、账号信息</li>
      <li>交易信息</li>
      <li>个人隐私信息</li>
      <li>钱包等</li>
      <li>订单信息</li>
      <p>
        请先确保所有交易已完结且无纠纷，账号删除后历史交易可能产生的资金退回权益等将视作自动放弃。
      </p>
    </div>
    <button @click="openConfirm">确认注销</button>
    <div class="confirmLayercovering" id="confirmLayercovering">
      <div class="confirmLayer" id="confirmLayer">
        <p class="confirmTit" id="confirmTit">确定退出吗?</p>
        <div class="confirmbtns">
          <a class="confirmClose" id="confirmClose">取消</a>
          <a class="confirmSure" id="confirmSure">确定</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Message } from "element-ui";
import axios from "axios";
export default {
  name: "Logout",
  data() {
    return {
      userId: this.$store.state.userId,
    };
  },
  methods: {
    backtoMine: function () {
      this.$router.replace({ path: "/Setting" });
    },
    //确认弹窗
    ConfirmLayer: function (txt, callback) {
      var confirmLayercovering = document.getElementById(
          "confirmLayercovering"
        ),
        confirmTit = document.getElementById("confirmTit"),
        confirmClose = document.getElementById("confirmClose"),
        confirmSure = document.getElementById("confirmSure"),
        confirmCall = callback,
        tittxt = txt;
      if (!confirmLayercovering) {
        return;
      }
      var init = function () {
          if (txt) {
            confirmTit.innerHTML = txt;
          }
          show();
          confirmClose.addEventListener("click", function () {
            hide();
            confirmCall && confirmCall(false);
          });
          confirmSure.addEventListener("click", function () {
            hide();
            confirmCall && confirmCall(true);
          });
        },
        hide = function () {
          confirmLayercovering.style.display = "none";
        },
        show = function () {
          confirmLayercovering.style.display = "block";
        },
        Confirm = function (txt, callback) {
          if (tittxt != txt && txt) {
            confirmTit.innerHTML = txt;
            tittxt = txt;
          }
          confirmCall = callback;
          show();
        };
      init(); //初始化
      this.ConfirmLayer = Confirm; //下次不用再初始化
    },
    openConfirm() {
      this.ConfirmLayer("确认要注销吗？", (flag) => {
        if (flag) {
          console.log("确认");
          axios // /api
            .post("/api/deleteUser", {
              userId: this.userId,
            })
            .then((successResponse) => {
              this.responseResult = JSON.stringify(successResponse.data);
              if (successResponse.data.code === 1) {
                Message.info("注销成功");
                this.$router.replace("/login");
              } else if (successResponse.data.code === 0) {
                Message.info("注销失败");
              } else {
                Message.info("失败");
              }
            })
            .catch((failResponse) => {
              alert("不行咯(T_T)");
            });
        } else {
          console.log("取消");
        }
      });
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
  font-size: 0.65rem;
}
.message {
  margin: 1.5rem 1.5rem 0.5rem 1.5rem;
}
h1 {
  text-align: center;
}
h2 {
  margin-top: 0.3rem;
  font-size: 0.3rem;
  color: rgb(121, 124, 128);
}
.list {
  margin-left: 6%;
  width: 80%;
  padding: 0.2rem;
  clear: both;
  font-size: 0.35rem;
  color: rgb(121, 124, 128);
  background: rgb(235, 234, 234);
  text-indent: 0.2rem;
  border-radius: 0.3rem;
  line-height: 0.45rem;
}
.list-mes {
  padding: 0.2rem;
}
.list p {
  margin: 0.3rem;
  padding-top: 0.3rem;
  color: rgb(13, 13, 14);
  text-indent: 0;
  border-style: solid none none;
  border-color: rgb(148, 152, 156);
}
button {
  margin-top: 0.5rem;
  width: 100%;
  padding: 0.2rem;
  color: white;
  background: lightcoral;
  border-radius: 0.3rem;
}
.confirmLayercovering {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1005;
  background-color: rgba(0, 0, 0, 0.5);
  display: none;
  font-size: 0;
}

.confirmLayer {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 4.5rem;
  height: 2.5rem;
  background: #fff;
  padding: 0.1rem;
  border-radius: 0.2rem;
  /* box-sizing: border-box; */
}
.confirmTit {
  /* 询问文字*/
  height: 55%;
  margin-left: 0.4rem;
  line-height: 4;
  color: #333;
  font-size: 0.35rem;
}
.confirmbtns {
  /* 按钮*/
  width: 100%;
  height: 35%;
  display: flex;
}
.confirmbtns a {
  display: inline-block;
  flex: 1;
  border-radius: 4px;
  font-size: 0.3rem;
  padding: 0.3rem;
  text-align: center;
}
.confirmClose {
  margin-left: 0.1rem;
  background-color: #bbb;
  color: #fff;
  margin-right: 0.3rem;
}

.confirmSure {
  margin-right: 0.1rem;
  background: #ff7035;
  color: #fff;
}
</style>