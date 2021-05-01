<template>
  <div class="wrapper">
    <swiper :options="swiperOptions">
      <swiper-slide>
        <img
          src="https://imgs.qunarzz.com/vs_ceph_vcimg/f03f5ac90ae59d0d9c6332a2bfd9782e.jpeg"
          alt=""
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src="https://imgs.qunarzz.com/vs_ceph_vcimg/6ff121fd416169b8d56c60384e3baf79.jpeg"
          alt=""
        />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: "HomeSwiper",
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
        },
      },
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  mounted() {
    console.log("Current Swiper instance object", this.swiper);
    this.swiper.slideTo(3, 1000, false);
  },
};
</script>
<style scoped>
.wrapper {
  margin: 70px 10px 50px;
  border-radius: 5px;
  overflow: hidden;
}
.wrapper img {
  width: 100%;
}
</style>
