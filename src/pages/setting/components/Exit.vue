<template>
  <div>
    <ul @click="openConfirm">
      退出
    </ul>
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
export default {
  name: "SettingExit",
  methods: {
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
      this.ConfirmLayer("确认要退出登录吗？", (flag) => {
        if (flag) {
          //console.log('确认');
          this.$store.dispatch("saveUserName", "");
          this.$store.dispatch("saveUserId", "");
          this.$router.replace("/login");
        } else {
          console.log("取消");
        }
      });
    },
  },
};
</script>
<style scoped>
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