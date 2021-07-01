<template >
  <div class="discount">
    <h2>特惠房源</h2>
    <p>品质房源，低至5折</p>
    <div class="item-swiper">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item, index) of list" :key="index"
          ><div class="one" @click="select(item.city)">
            {{ item.city }}
          </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <show-list :detailList="detailList"></show-list>
    <div class="more" @click="showMore">查看更多房源 ></div>
    <land-mark :landList="landList" :city="city"></land-mark>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import axios from "axios";
import ShowList from "../../../components/show-list.vue";
import LandMark from "./landMark.vue";
export default {
  name: "DiscoverDiscount",
  components: {
    Swiper,
    SwiperSlide,
    ShowList,
    LandMark,
  },
  data() {
    return {
      swiperOption: {
        autoplay: false,
        slidesPerView: 4, //slide容器显示slide数量
        spaceBetween: 10,
        freeMode: true,
      },
      list: [],
      detailList: [],
      Img: {
        img1: [],
        img2: [],
        img3: [],
      },
      city: "广州",
      landList: [],
    };
  },
  mounted() {
    this.getCity();
    this.select(this.city);
  },
  methods: {
    getCity() {
      axios.get("discountHouse.json").then((res) => {
        this.list = res.data;
      });
    },
    select(item) {
      this.city = item;
      this.$store.dispatch("changeCity", item);
      this.getlandmark(item);
      console.log(this.city);
      axios
        .post("/api/list", {
          city: this.city,
        })
        .then((res) => {
          let house = res.data.slice(0, 4);
          let one = house[0].image1;
          console.log(house[0].image1);
          for (var i = 0; i < house.length; i++) {
            this.Img.img1.push(house[i].image1);
            this.Img.img2.push(house[i].image2);
            this.Img.img3.push(house[i].image3);
          }
          console.log(this.Img);
          this.detailList = house;
          console.log(this.detailList);
        });
    },
    getlandmark(item) {
      axios
        .post("/api/ofcity", {
          city: item,
        })
        .then((res) => {
          this.landList = res.data;
          console.log(this.landList);
        });
    },
    showMore() {
      this.$router.push("/list/" + this.city);
    },
  },
};
</script>
<style scoped>
.discount {
  margin-top: 300px;
  padding: 0 10px;
}
.discount h2 {
  font-size: 26px;
  font-weight: bold;
}
.discount p {
  margin: 6px 0 20px;
  font-size: 18px;
}
.one {
  height: 50px;
  background-color: rgb(233, 233, 233);
  line-height: 50px;
  text-align: center;
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%);
  border-radius: 2px;
}
.one:active {
  background-color: #25a4bb;
}

.more {
  margin-left: 10px;
  color: #25a4bb;
  font-size: 16px;
  font-weight: bold;
}
</style>