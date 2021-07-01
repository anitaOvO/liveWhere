<template>
  <div class="select-city">
    <div class="fix">
      <nav>
        <span class="iconfont close" @click="handleOfReturn">&#xe612;</span>
        请选择目标城市
      </nav>
      <div class="search">
        <form action="">
          <input
            type="search-input"
            placeholder="请输入城市名"
            v-model="keyword"
          />
        </form>
      </div>
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li
          class="search-item border-bottom"
          v-for="item of list"
          :key="item.id"
          @click="handleCityClick(item.name)"
        >
          {{ item.name }}
        </li>
        <li class="search-item border-bottom" v-show="hasNoData">
          没有找到匹配数据
        </li>
      </ul>
    </div>
    <div class="present">
      <h2>当前城市</h2>
      <div class="present-city">{{ presentCity }}</div>
    </div>

    <div class="hotcity">
      <h2>热门城市</h2>
      <div class="button-list">
        <div
          class="button-wrapper"
          @click="handleCityClick(item.name)"
          v-for="item of hotCities"
          :key="item.id"
        >
          <div class="present-city show-city">{{ item.name }}</div>
        </div>
      </div>
    </div>

    <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
      <div class="title">{{ key }}</div>
      <div
        class="item-list"
        v-for="innerItem of item"
        :key="innerItem.id"
        @click="handleCityClick(innerItem.name)"
      >
        {{ innerItem.name }}
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
import { mapMutations } from "vuex";
export default {
  name: "select-city",
  props: {
    cities: Object,
    hotCities: Array,
    letter: String,
  },
  data() {
    return {
      keyword: "",
      list: [],
      timer: null,
      presentCity: this.$store.state.city,
    };
  },
  computed: {
    hasNoData() {
      return !this.list.length;
    },
  },
  watch: {
    keyword() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (!this.keyword) {
        this.list = [];
        return;
      }
      this.timer = setTimeout(() => {
        const result = [];
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (
              value.spell.indexOf(this.keyword) > -1 ||
              value.name.indexOf(this.keyword) > -1
            ) {
              result.push(value);
            }
          });
        }
        this.list = result;
      }, 100);
    },
  },
  methods: {
    handleOfReturn() {
      this.$router.push("/");
    },
    handleCityClick(city) {
      this.$store.commit("changeCity", city);
      this.$router.push("/list/" + city);
    },
    ...mapMutations(["changeCity"]),
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.search);
    console.log(this.scroll);
  },
};
</script>
<style scoped>
.select-city {
  position: relative;
  max-width: 540px;
  min-width: 320px;
  margin: 0 auto;
  font: normal 14px/1.5 Tahoma, "Lucida Grande", Verdana, "Microsoft Yahei",
    STXihei, hei;
  color: #000;
  background-color: #fff;
  overflow-x: hidden;
  -webkit-tap-highlight-color: transparent;
  height: 2000px;
}
nav {
  width: 100%;
  height: 60px;
  line-height: 60px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  border-bottom: 1px solid rgb(182, 182, 182);
}
.close {
  position: absolute;
  left: 20px;
  color: #008489;
  font-size: 28px;
}
.search {
  box-sizing: border-box;

  width: 100%;
  height: 50px;
  line-height: 50px;
  padding: 0px 20px;
  border: none;
}
.search input {
  width: 100%;
  border-radius: 6px;
  height: 30px;
  text-align: center;
  background-color: rgb(224, 224, 224);
}
.present {
  margin: 148px 20px 20px;
}
.present h2,
.hotcity h2 {
  font-weight: bold;
  font-size: 16px;
}
.present-city {
  margin: 20px 0;
  width: 60px;
  height: 30px;
  border-radius: 8px;
  border: 1px solid #008489;

  line-height: 30px;
  text-align: center;
  color: #008489;
}
.fix {
  position: fixed;
  top: 0px;
  width: 100%;
  background-color: #fff;
  max-width: 540px;
  min-width: 320px;
  margin: 0 auto;
}
.search-content {
  z-index: 1;
  overflow: hidden;
  position: absolute;
  top: 120px;
  left: 0;
  right: 0;
  bottom: 0;

  padding: 0 20px;
  background: #fff;
}
.search-item {
  line-height: 0.62rem;
  padding-left: 0.2rem;
  background: #fff;
  color: #666;
}
.hotcity {
  padding: 20px;
  border-top: 1px solid rgb(219, 219, 219);
  border-bottom: 1px solid rgb(219, 219, 219);
}
.button-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.button-wrapper {
  flex: 1;
  padding: 0 10px;
}
.show-city {
  margin: 10px 0;
}
.area {
  padding: 20px;
}
.title {
  background-color: rgb(238, 238, 238);
  border-radius: 3px;
}
.item-list {
  height: 30px;
  font-size: 16px;
  padding: 7px 0;
  border-bottom: 1px solid rgb(219, 219, 219);
  line-height: 30px;
}
</style>