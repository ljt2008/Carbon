<script setup>
import { computed } from "vue";
// vueUse
import { useScroll } from "@vueuse/core";
import usecomichelp from "@/utls/comichelp";
let { rate, rateSub, rateAdd } = usecomichelp();
const { y } = useScroll(window);
//页面缩放with
let imglistwidthrate = computed(() => {
  return rate.value - 50 + "%";
});
</script>
<template>
  <div class="ToTop" :class="{ show: y > 50 }">
    <ul class="content">
      <li class="top" @click="y = 0"><span class="iconfont">&#xe681;</span></li>
      <li><span class="iconfont">&#xe643;</span></li>
      <li>
        <!-- v-if="$route.path.startsWith('/detail')" -->
        <span class="iconfont">&#xe614;</span>
      </li>
      <li v-if="$route.path.startsWith('/comic')" @click="rateAdd()">
        <span class="iconfont">&#xe727;</span>
      </li>
      <li v-if="$route.path.startsWith('/comic')">{{ rate }}%</li>
      <li v-if="$route.path.startsWith('/comic')" @click="rateSub()">
        <span class="iconfont">&#xeaf5;</span>
      </li>
    </ul>
  </div>
</template>
  
<style scoped lang='scss'>
.ToTop {
  z-index: 999;
  display: none;
  &.show {
    display: block;
  }
  width: 40px;
  background-color: transparent;
  position: fixed;
  bottom: 50px;
  left: 0;

  @include min-to("xxl") {
    left: calc(50% + 660px) !important;
  }
  @include respond-to("xl") {
    left: calc(50% + 1170px / 2) !important;
  }
  @include respond-to("lg") {
    left: calc(50% + 970px / 2) !important;
  }
  @include respond-to("md") {
    left: calc(50% + 750px / 2) !important;
  }
  @include max-to("sm") {
    display: none !important;
  }
  .content {
    background-color: transparent;
    li:nth-child(1) {
      margin-top: 0px;
    }
    li {
      user-select: none;
      background: rgb(251, 251, 251);
      margin-top: 8px;
      border: 1px solid #ddd;
      width: 40px;
      height: 40px;
      text-align: center;
      line-height: 40px;
      span {
        user-select: none;
        font-size: 20px;
        cursor: pointer;
      }
    }
  }
}
</style>