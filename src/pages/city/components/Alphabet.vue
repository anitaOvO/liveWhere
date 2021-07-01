<template>
  <div class="list">
    <ul>
      <li
        class="item"
        v-for="item of letter"
        :key="item"
        :ref="item"
        @touchmove="handleTouchMove"
        @touchstart.prevent="handleTouchStart"
        @touchend="handleTouchEnd"
        @click="handleLetterClick"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CityAlphabet",
  props: {
    cities: Object,
  },
  data() {
    return {
      touchStatus: false,
      startY: 0,
      timer: null,
    };
  },
  computed: {
    letter() {
      const letters = [];
      for (let i in this.cities) {
        letters.push(i);
      }
      return letters;
    },
  },
  methods: {
    handleLetterClick(e) {
      this.$emit("change", e.target.innerText);
    },
    handleTouchStart() {
      this.touchStatus = true;
    },
    handleTouchMove(e) {
      if (this.touchStatus) {
        const startY = this.$refs["A"][0].offsetTop;
        const touchY = e.touches[0].clientY - 79;
        const index = (touchY - startY) / 20;
        if (index >= 0 && index < this.letters.length) {
          this.$emit("change", this.letters[index]);
        }
      }
    },
    handleTouchEnd() {
      this.touchStatus = false;
    },
  },
};
</script>

<style scoped>
.list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 1.58rem;
  right: 0;
  bottom: 0;
  width: 0.4rem;
}
.item {
  line-height: 0.4rem;
  text-align: center;
  color: #008489;
}
</style>
