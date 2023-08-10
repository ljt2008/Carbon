<script setup>
import { ref, onMounted } from "vue";
const isshow = ref(true);
const compare = function (lastday) {
  let date = new Date(); // 获取时间
  let year1 = date.getFullYear(); // 获取年
  let month1 = date.getMonth() + 1; // 获取月
  let strDate1 = date.getDate(); // 获取日
  let totaltime = year1 + "-" + month1 + "-" + strDate1;
  if (totaltime !== lastday) {
    return totaltime;
  } else {
    return false;
  }
};
onMounted(() => {
  let lasttime = localStorage.getItem("lasttime");
  let compareresult = compare(lasttime);
  if (compareresult !== false) {
    isshow.value = true;
    localStorage.setItem("lasttime", compareresult);
  } else {
    isshow.value = false;
  }
});
</script>

<template>
  <Transition name="fade">
    <div class="giude" v-if="isshow">
      <div class="bg"></div>
      <div class="container">
        <img
          src="https://static3w.kuaikanmanhua.com/_nuxt/static-kkfront-pc/image/index_banner_shuqi.3b476d3.png"
          alt=""
        />
        <div class="guide_close" @click="isshow = false"></div>
      </div>
    </div>
  </Transition>
</template> 
<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  transform: translateY(200px);
}

.giude {
  display: block;
  .bg {
    background-color: #3ebbff;
    bottom: 0;
    height: 91%;
    left: 0;
    position: absolute;
    width: 100%;
  }
  &.show {
    display: block;
  }
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 198;
  .container {
    position: relative;
    img {
      width: 100%;
    }
    .guide_close {
      cursor: pointer;
      position: absolute;
      top: 3%;
      right: 23.8%;
      width: 3.1%;
      aspect-ratio: 1;
    }
  }
}
</style>