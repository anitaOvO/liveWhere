<template>
  <div class="housing">
    <span class="iconfont back-icon" @click="backtoMine">&#xe641;</span>
    <span class="title">发布房源</span>
    <div class="house-message">
      <ul>
        <span class="must">*</span>
        房源名<input
          class="houseName"
          type="text"
          v-model="houseInfo.houseName"
          placeholder="请输入房源名"
        />
      </ul>
      <ul>
        价格<input
          class="price"
          type="text"
          v-model="houseInfo.price"
          placeholder="请输入价格"
        />
      </ul>
      <ul>
        折扣价<input
          class="discountPrice"
          type="text"
          v-model="houseInfo.discountPrice"
          placeholder="请输入折扣价"
        />
      </ul>
      <ul>
        面积<input
          class="area"
          type="text"
          v-model="houseInfo.area"
          placeholder="请输入面积"
        />
      </ul>
      <!-- <ul>描述信息<input  type="text" v-model="houseInfo.information" placeholder="请输入描述信息"></ul> -->
      <h1>描述信息</h1>
      <textarea class="information" v-model="information"></textarea>
      <span class="word"
        >你还可以输入{{ this.MaxLength - this.information.length }}个字!</span
      >

      <ul>
        地址<input
          class="addressDetail"
          type="text"
          v-model="houseInfo.addressDetail"
          placeholder="请输入地址"
        />
      </ul>
      <ul>
        可住人数<input
          class="people"
          type="text"
          v-model="houseInfo.people"
          placeholder="请输入可住人数"
        />
      </ul>
      <ul>
        城市<input
          class="city"
          type="text"
          v-model="houseInfo.city"
          placeholder="请输入所在城市"
        />
      </ul>
      <ul>
        标签<input
          class="lable"
          type="text"
          v-model="houseInfo.lable"
          placeholder="请输入标签"
        />
      </ul>
      <ul>
        厕所<input
          class="toilet"
          type="text"
          v-model="houseInfo.toilet"
          placeholder="请输入厕所数"
        />
      </ul>
      <ul>
        床<input
          class="bed"
          type="text"
          v-model="houseInfo.bed"
          placeholder="请输入床数量"
        />
      </ul>
      <ul>
        房间<input
          class="room"
          type="number"
          v-model="houseInfo.room"
          placeholder="请输入房间数"
          required
        />
      </ul>
    </div>
    <div class="image-view">
      <div class="addbox">
        <input
          type="file"
          @change="getImgBase()"
          name="file"
          accept="image/*"
          multiple
        />
        <h1>添加房源图片：</h1>
        <div class="addbtn">+</div>
      </div>

      <div class="view">
        <div class="item" v-for="(item, index) in imgfilesPre" :key="index">
          <span class="cancel-btn" @click="delImg(index)">x</span>
          <img :src="item" />
        </div>
      </div>
    </div>

    <button class="submit" @click="submit">发布</button>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "housing",
  data() {
    return {
      houseInfo: {
        hostId: this.$store.state.userId,
        houseName: "",
        price: "",
        discountPrice: "",
        area: "",
        addressDetail: "",
        people: "",
        city: "",
        lable: "",
        toilet: "",
        bed: "",
        room: "",
        image1:
          "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=335035019,3777527200&fm=224&gp=0.jpg",
        image2: "",
        image3: "",
      },
      responseResult: [],
      imgfilesPre: [], // 图片预览地址
      //imgfiles: [],// 图片原文件，上传到后台的数据
      information: "",
      MaxLength: 60,
    };
  },
  watch: {
    information() {
      //限制文本框输入字数
      if (this.information.length > this.MaxLength) {
        this.information = String(this.information).slice(0, this.MaxLength);
      }
    },
  },
  created() {},
  methods: {
    getImgBase: function () {
      var event = event || window.event; //打开windows窗口选择图片
      var fileList = event.target.files;
      this.imgfilesPre.push(
        "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=335035019,3777527200&fm=224&gp=0.jpg"
      );
      alert("添加图片成功！");
    },
    //删除图片
    delImg(index) {
      this.imgfilesPre.splice(index, 1);
    },

    backtoMine: function () {
      this.$router.replace({ path: "/Mine" });
    },
    submit: function () {
      axios // /api
        .post("/api/housing", {
          hostId: this.houseInfo.hostId,
          houseName: this.houseInfo.houseName,
          price: this.houseInfo.price,
          discountPrice: this.houseInfo.discountPrice,
          area: this.houseInfo.area,
          information: this.information,
          addressDetail: this.houseInfo.addressDetail,
          people: this.houseInfo.people,
          city: this.houseInfo.city,
          lable: this.houseInfo.lable,
          toilet: this.houseInfo.toilet,
          bed: this.houseInfo.bed,
          room: this.houseInfo.room,
          image1: this.houseInfo.image1,
          image2: this.houseInfo.image2,
          image3: this.houseInfo.image3,
        })
        .then((successResponse) => {
          this.responseResult = JSON.stringify(successResponse.data);
          if (successResponse.data.code === 1) {
            alert("添加成功");
            this.$router.replace({ path: "/Mine" });
          } else if (successResponse.data.code === 0) {
            alert("添加失败");
          } else {
            alert("添加失败");
          }
        })
        .catch((failResponse) => {
          alert("害！");
        });
    },
  },
};
</script>
<style scoped>
.must {
  color: red;
}
input:required {
  background-color: white;
}
/* 
 */

.back-icon {
  float: left;
  font-size: 0.5rem;
  margin-top: 0.5rem;
  margin-left: 0.5rem;
}
.title {
  float: left;
  margin-top: 7%;
  margin-left: 30%;
  font-size: 0.4rem;
}

.house-message {
  /*信息列表 */
  clear: both;
  float: left;
  margin: 0.4rem;
  font-size: 0.4rem;
  width: 90%;
  box-shadow: 0 8px 16px 0 rgba(136, 129, 129, 0.966),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.house-message h1 {
  /*描述信息 */
  clear: both;
  margin: 0.2rem;
  font-size: 0.3rem;
}
textarea {
  clear: both;
  margin-top: 0.3rem;
  margin-left: 0.5rem;
  width: 85%;
  height: 80px;
  border: solid;
  font-size: 0.3rem;
}
.word {
  clear: both;
  margin-left: 0.5rem;
  font-size: 0.3rem;
  color: red;
}

.house-message ul {
  margin: 0.5rem;
  font-size: 0.3rem;
  border-bottom-style: solid;
}
.house-message input {
  display: block;
  margin: 0.2rem;
  font-size: 0.3rem;
}
.submit {
  clear: both;
  float: left;
  margin: 0.3rem 0 0.5rem 25%;
  padding: 0.1rem;
  font-size: 0.5rem;
  width: 50%;
  background: rgb(93, 238, 93);
  color: blueviolet;
  border-radius: 0.2rem;
  box-shadow: 0 8px 16px 0 rgba(136, 129, 129, 0.966),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.image-view {
  clear: both;
  margin-top: 5rem;
  margin-left: 5%;
}
.image-view .addbox {
  position: relative;
  height: 100px;
  width: 100px;
  margin-bottom: 20px;
  text-align: center;
}
.image-view .addbox input {
  position: absolute;
  height: 100px;
  width: 100px;
  opacity: 0;
  text-align: center;
}
.image-view .addbox .addbtn {
  height: 100px;
  width: 100px;
  line-height: 100px;
  color: rgb(27, 25, 25);
  font-size: 1rem;
  background: rgb(168, 166, 166);
  border-radius: 10px;
  text-align: center;
  margin-top: 0.2rem;
  box-shadow: 0 8px 16px 0 rgba(136, 129, 129, 0.966),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.image-view .item {
  position: relative;
  float: left;
  height: 100px;
  width: 100px;
  margin: 10px 10px 0 0;
}
.image-view .item .cancel-btn {
  position: absolute;
  right: 0;
  top: 0;
  display: block;
  width: 20px;
  height: 20px;
  color: #fff;
  line-height: 20px;
  text-align: center;
  background: red;
  border-radius: 10px;
  cursor: pointer;
}
.image-view .item img {
  width: 100%;
  height: 100%;
}
</style>
