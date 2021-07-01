<template>
  <div class="search">
    <div class="back">
      <img src="../../../assets/1.jpg" alt="" />
    </div>
    <div class="search-box">
      <ul class="header">
        <li><a href="#">国内</a></li>
        <li><a href="#">国外</a></li>
      </ul>
      <div class="domestic">
        <div class="city">
          <input type="text" placeholder="请输入城市名" v-model="city" />
        </div>
        <ul class="date">
          <li>
            <!-- <a href="">6月23日</a> -->
            <div class="block">
              <el-date-picker
                v-model="value1"
                type="date"
                placeholder="入住日期"
                size="small"
              >
              </el-date-picker>
            </div>
          </li>
          <li>
            <!-- <a href="">6月23日</a> -->
            <div class="block">
              <el-date-picker
                v-model="value2"
                type="date"
                placeholder="退房日期"
                size="small"
              >
              </el-date-picker>
            </div>
          </li>
        </ul>
      </div>
      <div class="foreign"></div>
      <button @click="handleOfSearch">搜 索</button>
    </div>
    <div :class="{ is_fixed: isFixed }" v-if="isFixed">
      <nav>
        <form action="">
          <input type="search" placeholder="请输入城市名" />
        </form>
        <div class="icon">
          <a href="#" class="iconfont return"> &#xe61e; </a>
          <span @click="selectCity">{{ city }}</span>
        </div>
      </nav>
    </div>
  </div>
</template>
<script>
import detail from "../../home/components/detail.vue";
export default {
  components: { detail },
  name: "DiscoverSearch",
  data() {
    return {
      isFixed: false,
      city: this.$store.state.city,
      searchInput: "",
      value1: "",
      value2: "",
    };
  },
  mounted() {
    document.body.addEventListener("touchstart", this.touch);
    window.addEventListener("scroll", this.initHeight);
  },
  methods: {
    touch() {},
    initHeight() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      this.isFixed = scrollTop > 380 ? true : false;
    },
    selectCity() {
      this.$router.push("/City");
    },
    handleOfSearch() {
      this.$router.push("/list/" + this.city);
    },
  },
};
</script>
<style scoped>
.search {
  position: relative;
  width: 100%;
}
.back {
  width: 100%;
  height: 234px;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  overflow: hidden;
}
img {
  width: 100%;
  height: 100%;
}
.search-box {
  position: absolute;
  width: 90%;
  height: 270px;
  margin: 0 10px;

  top: 75%;
  left: 10px;
  background-color: #fff;
  border-radius: 17px;
  text-align: center;
  min-width: 0;
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%);
}
.header {
  box-sizing: border-box;
  display: flex;
  height: 50px;
  border-radius: 8px;
  overflow: hidden;
}
.header li {
  flex: 1;
  background-color: rgb(248, 246, 246);
  border-radius: 8px;
}
.header li:first-child {
  background-color: #fff;
}
.header li:hover,
.header li:active {
  background-color: grey;
}
.header a {
  font-size: 16px;
  line-height: 40px;
  color: black;
}
.search-box button {
  text-align: center;
  width: 90%;
  height: 40px;
  background-color: #25a4bb;
  border-radius: 8px;
  color: #fff;
  font-size: 18px;
  letter-spacing: 10px;
  margin-top: 24px;
  font-weight: 600;
}
.city,
.date {
  box-sizing: border-box;
  width: 90%;
  height: 50px;
  margin: 10px auto;
}
.city input {
  padding-left: 20px;
  margin-top: 10px;
  width: 100%;
  height: 35px;
  font-size: 20px;
  border-bottom: 1px solid rgb(211, 210, 210);
  color: #008489;
  font-weight: bold;
  box-sizing: border-box;
}
.is_fixed {
  height: 80px;
  position: fixed;
  top: 0px;
  width: 100%;
  z-index: 9;
  background-color: rgba(247, 247, 247, 0.842);
  border-bottom: 2px solid rgba(247, 247, 247, 0.842);
}
nav {
  position: relative;
  box-sizing: border-box;
  position: fixed;
  height: 60px;
  max-width: 540px;
  width: 100%;
  margin-top: 10px;
  padding: 10px;
}
nav input {
  height: 40px;
  width: 100%;
  border-radius: 4px;
  padding-left: 105px;
  font-size: 14px;
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%);
}
.container {
  margin: 0 10px 10px;
  background-color: white;
  border-radius: 8px;
}
.icon {
  position: absolute;
  top: 18px;
  left: 15px;
  width: 90px;
  color: #008489;
  font-weight: 600;

  border-right: 2px solid #e9e7e7;
}
.return {
  color: rgb(57, 87, 106);
  font-weight: 800;
  margin-right: 11px;
  vertical-align: middle;
}
.date {
  display: flex;
  justify-content: space-between;
  padding: 0 20px 20px 20px;
  border-bottom: 1px solid rgb(182, 181, 181);
}
.date li {
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 20px;
  font-style: none;
}
.title {
  margin: 20px 0 10px;
  font-size: 14px;
}
.block {
  width: 100%;
  height: 60px;
}
</style>
<style >
.el-date-editor.el-input,
.el-date-editor.el-input__inner {
  width: 100px;
}
.el-range-editor--small.el-input__inner {
  color: #008489;
}
</style>