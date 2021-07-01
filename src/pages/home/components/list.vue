<template>
  <div class="list">
    <nav>
      <form action="">
        <input
          type="search"
          placeholder="请输入关键字"
          v-model="searchInput"
          @input="search"
        />
      </form>
      <div class="icon">
        <a href="#" class="iconfont return" @click="handleOfReturn">
          &#xe61e;
        </a>
        <span @click="selectCity">{{ this.city }}</span>
      </div>
    </nav>

    <h2>共{{ detailList.length }}处住宿</h2>
    <div class="show">
      <show-list :detailList="detailList"></show-list>
    </div>
    <div class="bottom">
      <img src="../../../assets/s1.png" alt="" />
      到底啦~
    </div>
  </div>
</template>
<script>
import axios from "axios";
import ShowList from "../../../components/show-list.vue";
export default {
  name: "list",
  components: {
    ShowList,
  },
  data() {
    return {
      detailList: [],
      city: this.$route.params.city,
      searchInput: "",
    };
  },
  computed: {},
  methods: {
    getDetailList() {
      axios // /api
        .post("/api/list", {
          city: this.city,
        })
        .then((successResponse) => {
          //this.responseResult = JSON.stringify(successResponse.data);
          this.detailList = successResponse.data;
          console.log(this.detailList);
        })
        .catch((failResponse) => {
          alert("what the fuck???");
        });
    },
    handleOfReturn: function () {
      this.$router.replace("/");
    },
    selectCity() {
      this.$router.push("/City");
    },
    search() {
      let searchInput = this.searchInput;
      console.log(searchInput);
      if (searchInput !== "") {
        axios
          .post("/api/searchName", {
            searchInput,
            city: this.city,
          })
          .then((res) => {
            this.detailList = res.data;
            console.log(this.detailList);
          });
      }
    },
  },
  mounted: function () {
    this.getDetailList();
  },
};
</script>
<style scoped>
.list {
  max-width: 540px;
  min-width: 320px;
  margin: 0 auto;
  font: normal 14px/1.5 Tahoma, "Lucida Grande", Verdana, "Microsoft Yahei",
    STXihei, hei;
  color: #000;
  background-color: #fff;
  overflow-x: hidden;
  -webkit-tap-highlight-color: transparent;
}
h2 {
  font-size: 20px;
  font-weight: 600;
  margin: 100px 10px 10px;
}
nav {
  position: relative;
  box-sizing: border-box;
  position: fixed;
  height: 60px;
  max-width: 540px;
  width: 100%;
  /* margin-top: 10px; */
  padding: 10px;
  background-color: rgba(247, 247, 247, 0.842);
  z-index: 9;
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
  background-color: white;
  border-radius: 8px;
}
.show {
  padding: 0 10px;
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
.bottom {
  width: 50%;
  margin: 0 auto;
  margin-bottom: 0px;
  text-align: center;
}
.bottom img {
  width: 100%;
  margin: 80px 0px 0px;
}
</style>