<template>
  <div class="recommand">
    <h2>热门城市</h2>
    <p>发现更多出现灵感</p>
    <ul class="recommand-bd">
      <router-link
        tag="li"
        v-for="items of citylist"
        :key="items.id"
        :to="'/list/' + items.city"
      >
        <a href="#">
          <img :src="items.imgUrl" class="item-img" />
          <div class="item-price">
            <span>{{ items.city }}</span>
            <p>均价 ￥{{ items.avg }}/晚</p>
          </div>
        </a>
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {
  name: "HomeRecommand",
  props: {
    citylist: Array,
    city: "",
  },
  data() {
    return {
      city: this.citylist,
    };
  },
};
</script>
<style scoped>
.recommand {
  box-sizing: border-box;
  margin: 0 10px;
  background-color: #fff;
}
.recommand h2,
p {
  padding-left: 5px;
}
.recommand h2 {
  font-size: 20px;
}
.recommand p {
  font-size: 12px;
  color: #7f7f7f;
}

.recommand-bd {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: #fff;
  padding-top: 55px;
}
.recommand-bd li {
  flex: 40%;
  min-height: 214px;
  height: 236px;
  margin-top: 10px;
  background-color: burlywood;
  border-radius: 5px;
  overflow: hidden;
}

.recommand-bd li:nth-child(2n) {
  margin-left: 10px;
}
.recommand-bd li:nth-child(-n + 2) {
  margin-top: 0px;
}
.item-img {
  width: 100%;
  height: 100%;
}
.recommand-bd li {
  position: relative;
}
.item-price {
  position: absolute;
  width: 100%;
  bottom: 0px;
  left: 0;
  padding-bottom: 36px;
  text-align: center;
  font-size: 18px;
  font-weight: 800;
  color: #fff;
}
.item-price p {
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  padding-top: 6px;
}
</style>