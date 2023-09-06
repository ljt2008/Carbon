<script setup>
import Carbonlist from "./Carbonlist.vue";
import popularityList from "./popularityList.vue";
import { getHotsAPI } from "@/apis/home";
import { ref, onMounted } from "vue";
const list = ref([]);
const getHots = async () => {
  const res = await getHotsAPI();
  list.value = res.data;
};
onMounted(() => {
  getHots(); 
});
</script>

<template>
  <div class="MayLike">
    <div class="leftLike fl">
      <div class="likeTitle cls">
        <h3>猜你喜欢！全网热搜！</h3>
      </div>
      <Carbonlist :itemlist="list" :style="0" :colomns="5" />
    </div>
    <div class="popularity fl">
      <div class="popularityTitle cls">
        <h3>国漫榜</h3>
      </div>
      <popularityList />
    </div>
  </div>
</template> 
<style lang="scss">
.MayLike {
  margin-top: 32px;
  position: relative;
  overflow: hidden;
  .leftLike {
    .likeTitle {
      height: auto;
      h3 {
        color: var(--text-color);
        float: left;
        font-size: 24px;
        font-weight: 400;
        line-height: 30px;
      }
    }
    width: 70%;
    @include max-to("xl") {
      .item:nth-child(n + 9) {
        display: none;
      }
    }
    @include max-to("lg") {
      width: 50%;
      .item:nth-child(n + 7) {
        display: none;
      }
    }
    @include max-to("md") {
      .item:nth-child(n + 5) {
        display: none;
      }
    }
    @include max-to("sm") {
      .item:nth-child(n + 5) {
        display: none;
      }
    }
  }
  .popularity {
    .popularityTitle {
      padding: 0 0 0 30px;
      height: auto;

      h3 {
        color: var(--text-color);
        float: left;
        font-size: 24px;
        font-weight: 400;
        line-height: 30px;
      }
    }
    @include max-to("lg") {
      width: 50%;
    }
    width: 30%;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
  }
}
</style>