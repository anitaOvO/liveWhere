<template>
  <div class="wrapper">
    <swiper :options="swiperOption" class="showimg">
      <swiper-slide>
        <img
          src="https://b4-q.mafengwo.net/s13/M00/6B/81/wKgEaVycbFWAF185AANiYfzPgEU66.jpeg?imageView2%2F2%2Fw%2F600%2Fh%2F600%2Fq%2F90"
          alt=""
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src="https://p3-q.mafengwo.net/s13/M00/6C/1F/wKgEaVycbJeAYGviAALrRdtOF9w72.jpeg?imageView2%2F2%2Fw%2F600%2Fh%2F600%2Fq%2F90"
          alt=""
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2276985361,2566510862&fm=26&gp=0.jpg"
          alt=""
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2Fd4%2F3f%2Fc6%2Fd43fc67c6f60e01a36c656e5e7d816c7.jpeg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1624016009&t=fa08f16254a300105774b283f33fd7e8"
          alt=""
        />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  name: "HomeSwiper",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOption: {
        autoplay: true,
        pagination: {
          el: ".swiper-pagination",
        },
      },
    };
  },
  computed: {},
  mounted() {},
};
</script>
<style scoped>
.wrapper {
  margin: 0px 10px 50px;
  border-radius: 5px;
  overflow: hidden;
}
.showimg {
  height: 260px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}
.wrapper img {
  width: 100%;
  height: 100%;
}
</style>
