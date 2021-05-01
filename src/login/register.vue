<template>
    <div class="register"> 
        <div class="header-left" @click="back_tologin">
            <div class="iconfont back-icon">&#xe685;</div>
        </div>
        <div class="header-top">
            注册
        </div>
        <div class="header-below">
            使用手机号或用户名注册
        </div>
        <div>
            <div class="container">
                <div class="name">
                    <label>用户名：
                        <br />
                    </label><input type="text" name="username" placeholder="请输入用户名" v-model.trim="registerInfo.userName">
                </div>
                <div class="pwd">
                    <label>密码：
                    <br />
                    </label><!-- <div class="password-show" @click="pwd_show">❤</div> -->
                    <input type="password" name="passwd" v-if="show" placeholder="请输入密码" v-model.trim="registerInfo.password">
                    <input type="text" name="passwd" v-else placeholder="请输入密码" v-model.trim="registerInfo.password">
                    <i class="iconfont password-show" @click="pwd_show">&#xe806;</i>  
                </div>
            </div> 
            <button type="submit" @click="handleRegister">注册</button>
        </div>
        <div class = "content">
            <p>注册/登录即代表您年满18岁，已认真阅读并确认接受在哪儿《服务条款》、《隐私政策》
                ，并同意订阅在哪儿特惠信息和政策更新，您可在设置中随时退订。</p>
        </div>
    </div>
     
</template>

<script>
import axios from "axios";
export default {
  name: "Register",
  data() {
    return {
      registerInfo: { userName: "", password: "" },
      responseResult: [],
      show: true//初始为隐藏状态
    };
  },
  methods: {
    pwd_show:function(){//红心按钮定义方法
            this.show = !this.show
        },
    back_tologin:function(){
            this.$router.replace({ path: "/Login" });
    },

    handleRegister: function () {
        axios // /api
        .post("/api/register",{
            userName:this.registerInfo.userName,
            password:this.registerInfo.password
        })
        .then((successResponse) => {
          this.responseResult = JSON.stringify(successResponse.data);
          if (successResponse.data.code === 1) {
              alert("注册成功");
                this.$router.replace({ path: "/Login" });
          } else if(successResponse.data.code === 0){
            alert("用户名已存在");
          }else{
              alert("注册失败");
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
.register {
  max-width: 540px;
  min-width: 320px;
  
  margin: 0 auto;
  height: 650px;
}
.header-left{
        width: 1rem;
        line-height:2rem; 
        padding-left:0.4rem;
}
.header-left .back-icon{
        font-size:.5rem;
}
.header-top{
    font-size: 0.5rem;
    line-height:0.1rem; 
    padding-left:0.4rem;
}
.header-below{
    text-align:left;
    padding-left:0.4rem;
    margin-top:0.35rem;
    color:rgb(127, 127,127);
}
.container{
    position:absolute;
    top:0.1rem;
    text-align: center;
    border-radius: 20px;
    margin-top:1.5rem;
    padding:0.4rem
}
/* input{ 
    margin-top: 0.5rem;
    border-style: none none solid none;
    border-bottom-color: rgba(232, 228, 240, 0.856);
    width: 6rem;
    font-size: 0.3rem;
} */
.container .name{
    text-align: left;
    margin-top:2rem;
}
.container .name input{
    margin-top: 0.5rem;
    border-style: none none solid none;
    border-bottom-color: rgba(232, 228, 240, 0.856);
    width: 6rem;
    font-size: 0.3rem;
}
.container .pwd{
    position:relative;
    text-align: left;
    margin-top: 1rem;
}
.container .pwd input{
    /* position:fixed; */
    margin-top: 0.5rem;
    border-style: none none solid none;
    border-bottom-color: rgba(232, 228, 240, 0.856);
    width: 100%;
    font-size: 0.3rem;
}
.container .pwd .password-show{
    position:absolute;
    text-align: right;
    margin-top:.5rem;
    margin-left:.1rem;
    font-size:.4rem;
}
button{
    width: 85%;
    height: .8rem;
    margin-top:6rem;
    margin-left:.5rem;
    border-radius: 24px;
    color: white;
    font-size: .4rem;
    background: rgba(27, 184, 13, 0.644);
    border-style: none;
}
.content{
    display:flex;
    font-size: 0.25rem;
    padding:.1rem;
    text-align: center;
    line-height:0.35rem; 
    color:rgb(127, 127,127);
    margin:20% 0.2rem;
}
</style>