<template>
  <div class="searchHouse">
    <span class="iconfont back-icon" @click="backtoMine">&#xe641;</span>
    <p>已发布房源信息</p>
    <ul class="list-contain">
      <div class="li" v-for="item of HouseList" :key="item.houseId">
        <div class="img">
          <img :src="item.image1" alt="" />
        </div>
        <div class="info">
          <p>{{ item.label }}</p>
          <h3>{{ item.houseName }}</h3>
          <div class="price">
            <span>￥</span>
            <span>{{ item.price }} 每晚</span>
          </div>
          <button class="delete" @click="deletehouse(item.houseId)">
            删除
          </button>
          <button class="update" @click="updatehouse(item.houseId)">
            更新
          </button>
        </div>
      </div>
    </ul>
  </div>
</template>
<script>
import axios from "axios";
import { Message } from "element-ui";
export default {
  name: "searchHouse",
  data() {
    return {
      userId: this.$store.state.userId,
      HouseList: [],
    };
  },
  mounted() {
    this.getHouse();
  },
  methods: {
    backtoMine: function () {
      this.$router.replace({ path: "/Mine" });
    },
    getHouse() {
      console.log(this.userId);
      let userId = this.userId;
      axios //
        .post("/api/searchUserHouse", {
          userId,
        })
        .then((res) => {
          this.HouseList = res.data;
          //console.log(this.HouseList);
        })
        .catch(() => {
          alert("获取不到你所发布的房源");
        });
    },
    updatehouse(houseId) {
      this.$router.push("/updateHouse/" + houseId);
    },
    deletehouse: function (item) {
      console.log(item);
      let userId = this.userId;
      axios //
        .post("/api/deleteHouse", {
          userId,
          houseId: item,
        })
        .then((successResponse) => {
          this.responseResult = JSON.stringify(successResponse.data);
          if (successResponse.data.code === 1) {
            Message.info("删除成功");
            this.getHouse();
          } else if (successResponse.data.code === 0) {
            Message.info("删除失败");
          } else {
            Message.info("删除失败");
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
.searchHouse {
  margin: 0.5rem;
}
.back-icon {
  font-size: 0.65rem;
}
p {
  margin-top: 0.3rem;
  font-size: 0.5rem;
}
.list-contain {
  /* background:red; */
  margin-top: 0.3rem;
  box-sizing: border-box;
  width: 100%;
  border-radius: 0.2rem;
}
.list-contain .li {
  display: flex;
  border-radius: 0.3rem;
  justify-content: space-between;
  flex-direction: column;
  margin: 0.2rem 0;
  overflow: hidden;
  border: 0.1rem solid #ad9f9f;
  box-shadow: 0 5px 10px 0 rgba(136, 129, 129, 0.966),
    0 6px 15px 0 rgba(0, 0, 0, 0.19);
  /* border-bottom: 5px solid #e01515; */
  margin-top: 0.5rem;
}
.img {
  margin: 0.4rem;
  flex: 1;
  border-radius: 8px;
  overflow: hidden;
  min-width: 0;
}
img {
  width: 100%;
}
.info {
  box-sizing: border-box;
  flex: 2;
  padding-left: 0.3rem;
  font-size: 0.4rem;
  min-width: 0;
}
h3 {
  white-space: nowrap; /*文本不换行 */
  overflow: hidden;
  text-overflow: ellipsis; /*多出部分省略号 */
  font-size: 16px;
  margin: 0.1rem 0;
}

.info button {
  flex: 1;
  margin: 0.2rem;
  padding: 0.2rem;
  width: 90%;
  color: white;
  border-radius: 0.2rem;
  background: lightcoral;
  box-shadow: 0 5px 10px 0 rgba(136, 129, 129, 0.966),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>