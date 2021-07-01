<template>
  <div class="favorite">
    <list :likeList="likeList"></list>
    <div class="isshow" v-show="is_show">
      <a href="" @click="handleToLogin">点击登录/注册</a>
    </div>
    <home-footer></home-footer>
  </div>
</template>
<script>
import axios from "axios";
import HomeFooter from "../home/components/Footer.vue";
import List from "./components/list.vue";
export default {
  name: "Favorite",
  components: {
    HomeFooter,
    List,
  },
  data() {
    return {
      userId: this.$store.state.userId,
      likeList: [],
      is_show: false,
    };
  },
  mounted() {
    this.getfavorite();
  },
  methods: {
    getfavorite() {
      console.log(this.userId);
      let userId = this.userId;
      axios //
        .post("/api/like", {
          userId,
        })
        .then((res) => {
          this.likeList = res.data;
          if (this.userId.length === 0) {
            this.is_show = true;
          } else {
            this.is_show = false;
          }
          console.log(this.likeList);
          console.log(this.is_show);
        })
        .catch(() => {
          alert("stm??");
        });
    },
    handleToLogin() {
      this.$router.replace("/Login");
      this.is_show = false;
    },
  },
};
</script>
<style scoped>
.favorite {
  max-width: 540px;
  min-width: 320px;
  margin: 0 auto;
  font: normal 14px/1.5 Tahoma, "Lucida Grande", Verdana, "Microsoft Yahei",
    STXihei, hei;
  color: #000;
  overflow-x: hidden;
  -webkit-tap-highlight-color: transparent;
  height: 2000px;
}
.isshow {
  margin-top: 50%;
  font-size: 20px;
  text-align: center;
  font-weight: bold;
}
</style>