<template>
  <div class="nav">
    <nav>
      <form action="">
        <input type="search" placeholder="请输入城市名" />
      </form>
      <div class="icon">
        <a href="#" class="iconfont return" @click="handleOfReturn">
          &#xe61e;
        </a>
        <span>珠海</span>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: "nav-search",
};
</script>
<style scoped>
</style>
