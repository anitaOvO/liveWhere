<template>
    <div class="background">
            <div class="container">
                <div class="name">
                    <label>用户名：
                        <br />
                    </label><input type="text" name="username" placeholder="input your name">
                </div>
                <div class="pwd">
                    <label>密码：
                    <br />
                    </label><input type="text" name="passwd" placeholder="input the passwd">
                </div>
            </div> 
            <button type="submit" @click="handleLogin">Login</button>
    </div>
   
     
</template>

<script>
export default {
    name: "Login",
    data(){

    },
    methods:{
      handleLogin:function(){
        this.$router.replace('/Home');
        }
    }
}
</script>

<style scoped>
.background{
    width: 414px;
    height: 896px;
    background-size:100% 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(30, 163, 216, 0.384);
}
.container{
    position:absolute;
    top:50%;
    left: 45%;
    background: rgba(35, 115, 207, 0.336);
    transform: translate(-50%,-85%);
    width: 358px;
    height: 300px;
    text-align: center;
    border-radius: 20px;
    margin-top: 10px;
}
.container .name{
    text-align: left;
    margin-top: 60px;
    margin-left: 30px;
}
input{
    margin-top: 15px;
    border-top-style: none;
    border-left-style: none;
    border-right-style: none;
    border-bottom-color: rgba(83, 82, 85, 0.26);
    background: rgba(8, 8, 8, 0);
    width: 280px;
    font-size: 18px;
}
.container .pwd{
    text-align: left;
    margin-top: 34px;
    margin-left: 30px;
}
button{
    width: 300px;
    height: 50px;
    position:absolute;
    bottom:35%;
    left: 8%;
    border-radius: 24px;
    background: rgba(162, 212, 157, 0.644);
    border-style: none;
    
}
</style>