<template>
  <div class="mail">
    <div class="title">收件箱</div>
    <div class="count">
      <p>10位联系人</p>
      <a href="" class="select">选择/编辑</a>
    </div>
    <div class="new">
      <ul>
        <li>
          <a href="/MailNews">
            <img
              src="https://img.alicdn.com/imgextra/i2/O1CN01WpOLdY1DG97PbESGP_!!6000000000188-2-tps-80-80.png"
            />
            <span class="name">灰灰</span></a
          >
        </li>
        <li>
          <a href="#">
            <img
              src="https://img.alicdn.com/imgextra/i2/O1CN01WpOLdY1DG97PbESGP_!!6000000000188-2-tps-80-80.png"
            />
            <span class="name">wm</span></a
          >
        </li>
        <li>
          <a href="#">
            <img
              src="https://img.alicdn.com/imgextra/i2/O1CN01WpOLdY1DG97PbESGP_!!6000000000188-2-tps-80-80.png"
            />
            <span class="name">fyy</span></a
          >
        </li>
        <li>
          <a href="#">
            <img
              src="https://img.alicdn.com/imgextra/i2/O1CN01WpOLdY1DG97PbESGP_!!6000000000188-2-tps-80-80.png"
            />
            <span class="name">xinxin</span></a
          >
        </li>
        <li>
          <a href="#">
            <img
              src="https://img.alicdn.com/imgextra/i2/O1CN01WpOLdY1DG97PbESGP_!!6000000000188-2-tps-80-80.png"
            />
            <span class="name">biubiu</span></a
          >
        </li>
        <li>
          <a href="#">
            <img
              src="https://img.alicdn.com/imgextra/i2/O1CN01WpOLdY1DG97PbESGP_!!6000000000188-2-tps-80-80.png"
            />
            <span class="name">coups</span></a
          >
        </li>
        <li>
          <a href="#">
            <img
              src="https://img.alicdn.com/imgextra/i2/O1CN01WpOLdY1DG97PbESGP_!!6000000000188-2-tps-80-80.png"
            />
            <span class="name">jun</span></a
          >
        </li>
        <li>
          <a href="#">
            <img
              src="https://img.alicdn.com/imgextra/i2/O1CN01WpOLdY1DG97PbESGP_!!6000000000188-2-tps-80-80.png"
            />
            <span class="name">dino</span></a
          >
        </li>

        <li><a href="#">咕咕</a></li>
        <li><a href="#">咕咕</a></li>
        <li><a href="#">咕咕</a></li>
        <li><a href="#">咕咕</a></li>
        <li><a href="#">咕咕</a></li>
        <li><a href="#">咕咕</a></li>
        <li><a href="#">咕咕</a></li>
        <li><a href="#">咕咕</a></li>
        <li><a href="#">咕咕</a></li>
        <li><a href="#">咕咕</a></li>
      </ul>
    </div>
    <!-- <mail-news></mail-news> -->
    <home-footer></home-footer>
  </div>
</template>
<script>
import HomeFooter from "../home/components/Footer";
import MailNews from "../mail/components/News";
export default {
  name: "Mail",
  components: {
    HomeFooter,
    MailNews,
  },
};
</script>
<style scoped>
.mail {
  max-width: 540px;
  min-width: 320px;
  margin: 0 auto;
  font: normal 14px/1.5 Tahoma, "Lucida Grande", Verdana, "Microsoft Yahei",
    STXihei, hei;
  color: #000;
  overflow-x: hidden;
  -webkit-tap-highlight-color: transparent;
  height: 2000px;
}
.title {
  font-size: 28px;
  background-color: #fff;
  list-style-type: none;
  margin: 0 10px;
  height: 70px;
  line-height: 60px;
  font-weight: 400;
  padding: 10px 0;
}
.new {
  margin-top: 20px;
  padding: 0 10px;
  font-size: 0.4rem;
}
.count {
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  font-size: 16px;
  font-weight: bold;
  color: #25a4bb;
}
.new ul {
  display: block;
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 99%;
}
.new ul li a {
  margin: 20px 10px;
  display: block;
  color: #000;
  padding: 8px 16px;
  text-decoration: none;
  background-color: #fff;
  border-bottom: 1px solid rgb(212, 211, 211);

  height: 80px;
  line-height: 80px;
}
.new ul li a img {
  width: 1rem;
}
/* 鼠标移动到选项上修改背景颜色 */
.new ul li a:hover {
  background-color: rgb(141, 140, 140);
  color: rgb(236, 230, 230);
}
.name {
  margin-left: 30px;
  vertical-align: middle;
}
</style>