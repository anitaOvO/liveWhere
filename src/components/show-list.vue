<template>
  <div class="showlist">
    <router-link
      tag="div"
      class="container"
      v-for="item of detailList"
      :key="item.houseId"
      :to="'/detail/' + item.houseId"
    >
      <swiper :options="swiperOption" class="swiper-box">
        <swiper-slide>
          <div class="show">
            <img :src="item.image1" />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="show">
            <img :src="item.image2" />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="show">
            <img :src="item.image3" />
          </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>

      <div class="detail">
        <p>{{ item.lable }}</p>
        <h2>{{ item.houseName }}</h2>
        <div class="price">
          <span>￥{{ item.discountPrice }}/晚</span>
          <span>￥{{ item.price }}/晚</span>
        </div>
      </div>
    </router-link>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
export default {
  name: "show-list",
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    detailList: Array,
  },
  data() {
    return {
      swiperOption: {
        autoplay: false,
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
        },
      },
    };
  },
};
</script>
<style scoped>
.container {
  margin: 20px 10px;
}
.show {
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 0px;
  width: 100%;
  height: 249.34px;
}
.show img {
  width: 100%;
  height: 100%;
}
.detail {
  background-color: #fff;
  border-radius: 8px;
  color: rgb(57, 87, 106);
}
.detail h2 {
  margin: 6px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: rgb(72, 72, 72);
  font-size: 20px;
  font-weight: 600;
}
.price {
  font-size: 16px;
  font-weight: 800;
  margin-right: 8px;
}
.price span:last-child {
  font-size: 12px;
  color: gray;
  margin-left: 8px;
  text-decoration: line-through;
}
.swiper-box {
  border-radius: 8px;
}
</style>