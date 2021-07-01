<template>
  <div>
    <select-city
      :cities="cities"
      :hotCities="hotCities"
      :letter="letter"
    ></select-city>
    <city-alphabet
      :cities="cities"
      @change="handleLetterChange"
    ></city-alphabet>
  </div>
</template>

<script>
import axios from "axios";
import CityAlphabet from "./components/Alphabet";
import SelectCity from "./components/select-city";
export default {
  name: "City",
  components: {
    SelectCity,
    CityAlphabet,
  },
  data() {
    return {
      cities: {},
      hotCities: [],
      letter: "",
    };
  },
  methods: {
    getCityInfo() {
      axios.get("/city.json").then(this.handleGetCityInfoSucc);
    },
    handleGetCityInfoSucc(res) {
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        this.cities = data.cities;
        this.hotCities = data.hotCities;
      }
      console.log(res);
    },
    handleLetterChange(letter) {
      this.letter = letter;
      console.log(letter);
    },
  },
  mounted() {
    this.getCityInfo();
  },
};
</script>

<style lang="stylus" scoped></style>
