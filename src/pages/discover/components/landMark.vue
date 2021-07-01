<template>
  <div class="land">
    <h2>
      网红打卡点<span class="city">-{{ this.city }}</span>
    </h2>

    <div class="item-swiper">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item, index) of landList" :key="index"
          ><div class="one" @click="select(item.landmark)">
            {{ item.landmark }}
          </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <show-list :detailList="detailList"></show-list>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import axios from "axios";
import ShowList from "../../../components/show-list.vue";
import showList from "../../../components/show-list.vue";
export default {
  components: { showList },
  name: "landmark",
  props: {
    landList: Array,
    Swiper,
    SwiperSlide,
    ShowList,
    city: String,
  },
  data() {
    return {
      swiperOption: {
        autoplay: false,
        slidesPerView: 4, //slide容器显示slide数量
        spaceBetween: 10,
        freeMode: true,
      },
      city: this.$store.state.city,
      detailList: [],
    };
  },
  methods: {
    select(landmark) {
      axios
        .post("/api/landmark", {
          landmark,
        })
        .then((res) => {
          this.detailList = res.data;
          console.log(this.detailList);
        });
    },
  },
  mounted() {},
};
</script>
<style scoped>
.land {
  margin-top: 20px;
}
.land h2 {
  font-size: 26px;
  font-weight: bold;
  margin: 20px 0;
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
.city {
  margin-left: 10px;
  font-size: 16px;
  font-weight: bold;
}
</style>