<script setup>
import { computed, ref, onMounted } from "vue";
import usecomichelp from "@/utils/comichelp.js";
let { rate } = usecomichelp();
//页面缩放with
let imglistwidthrate = computed(() => {
  return rate.value / 2 + "%";
});
let list = ref(0);
let title = ref(null);
onMounted(() => {
  setTimeout(() => {
    list.value = 3;
  }, 3000);
  setTimeout(() => {
    title.value = {};
  }, 3000);
});
</script>

<template>
  <div class="Comic cls">
    <div class="comicDetails container">
      <n-space vertical v-if="list === 0">
        <n-skeleton height="20px" width="30%" />
        <n-skeleton height="500px" width="50%" style="margin: 0 auto" />
        <n-skeleton height="300px" width="100%" />
      </n-space>
      <template v-if="list !== 0">
        <div class="titleBox cls">
          <div class="yellowBorder"></div>
          <h3 class="title">
            <span class="works">作品：</span> <a href="/" style="">查看首页</a>
            -
            <a href="/web/topic/6457" style=""> 恰似寒光遇骄阳 </a>
            - 第2话 牡丹花下死
          </h3>
        </div>
        <div class="AdjacentChapters topNav">
          <ul class="cls">
            <li class="btn">
              <a href="/web/comic/266168">上一话</a>
            </li>
            <li>|</li>
            <li class="btn">
              <a href="/web/comic/266175">下一话</a>
            </li>
          </ul>
        </div>
        <div class="imgList" :style="{ width: imglistwidthrate }">
          <div class="img-box" v-for="index in list" :key="index">
            <img
              alt="第2话 牡丹花下死"
              noinit="true"
              class="img"
              data-src="https://hs1-p1.v3mh.com/image/c266171/221127/D6XIM6QM0.webp-t.w640.jpg.h?sign=05db6c3ce38a92f6b2001eeb7034e11f&amp;t=64bf57e4"
              src="https://hs1-p1.v3mh.com/image/c10688/200106/f8abPWTtC.webp-t.w640.jpg.h?sign=cbb7484897ac02085c8995da5b9a89c7&t=64e97ae6"
              lazy="loaded"
            />
          </div>
        </div>
        <div class="giude">
          <img
            src="https://static3w.kuaikanmanhua.com/_nuxt/static-kkfront-pc/image/comic_banner_shuqi.15a4016.png"
            alt="blank"
            class="guide_img"
          />
        </div>
        <div class="AdjacentChapters">
          <ul class="cls">
            <li class="btn">
              <a href="/web/comic/266168">上一话</a>
            </li>
            <li>|</li>
            <li class="btn">
              <a href="/web/comic/266175">下一话</a>
            </li>
          </ul>
        </div>
      </template>
    </div>
  </div>
</template> 
<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 4s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.Comic {
  width: 100%;
  background-color: var(--bg1);
  .comicDetails {
    background-color: var(--bg1);
    margin-top: 30px;
    margin-bottom: 30px;
    border: 1px solid #e5e5e5;
    border-radius: 6px;
    padding-bottom: 24px;
    position: relative;
    .titleBox {
      background-color: var(--bg1);
      border-top-left-radius: 6px;
      border-top-right-radius: 6px;
      color: #666;
      font-size: 16px;
      line-height: 20px;
      padding: 12px;
      .yellowBorder {
        background-color: #f5d531;
        border-radius: 3px;
        float: left;
        height: 20px;
        width: 6px;
      }
      .title {
        font-size: 16px;
        float: left;
        font-weight: 400;
        padding-left: 6px;
      }
    }
    .AdjacentChapters {
      padding-top: 26px;
      font-size: 14px;
      margin: 0 auto;
      width: 150px;
      ul {
        li {
          color: var(--text-color);
          float: left;
          padding: 0 10px;
        }
      }
    }
    .imgList {
      margin: 32px auto;
      -webkit-transition: width 0.1s linear;
      transition: width 0.1s linear;
      .img-box {
        border: 0;
        margin: 0;
        padding: 0;
        width: 100%;
        img {
          background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAjAAAAG4AgMAAAAmlDXUAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJUExURf////b29vz8/Gk/Je0AAALFSURBVHja7NexittAFEbhOwIXcq9+CahYP4WScisV+oVwJQJp/BSTrfICAymdgCHWU8bjsRevSZFqr4vzYaxR5cMdi0EGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACA/5VkZq06e3OMjjHRrNFsF9VB7jGdFeskdQ8S8yxdY5a9c8xB15gk9b4xSW8xkmbfGPnH7B4nRhpLzGa626bOI0Z5PC9JwyVmZ24xqcScjOXyZOY6mY3OLGmroTp2ZpWk6DKZoCJu4nk5u8VIqlVE2xw8Y6qtbibTSp4xQTcx1ryLsY9W38SMjxQzWKtsGzc/g0fMSiffJcV0idnF9UFDyIP6YOXnq51kSVO+G04pcozprJJM6m1dK/OKaW5iZqsONzGDfbR0E/P1qKuh9ojROSZIlW5NrjHjszLXyVTXmOxuMpPLadBtku70PjGj9Fl3tot5xNg/YnZ7M1t5vDa1w13MLtqi6BNTT+9j5vVRUucTU93EbH9J36QS4/La9Psas9tbLck1pioxQ6yitfKP+bJLmlr1lnQx567OJaazRtPpY3qUmFZDUDb5x/QrjfX5YeqTa8xsSdNKCjnmxdYr9TkmOk0mnU/GV6lV186tb4zUB6nT2KhL4yXG3GLmvF1pavSqMW+T/fjhElNC8nSaU0zQFMqx5BsztXMz1PnWMyaUP/Gwis1U567JGo2eMY3GtaUhaMwxyS2mlrry/KQxSME/ZiVFS4oaa9eYc8e5KGlu8zFlSYNvTDkXrJJrTJtjgtSbpH2bY+QW00jnxWTK/GLCNcZKg3tMeXTyt4q8mJy2SZcYeceEt5hGqpxjbFnisvwxs/Wy2FLkxd7cvT7F+PrJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/24MDAQAAAABB/tYLjFABIz+emEB5sAezAAAAAElFTkSuQmCC)
            no-repeat 50%;
          display: block;
          vertical-align: top;
          width: 100%;
        }
      }
    }
    .giude {
      margin-bottom: 40px;
      cursor: pointer;
      width: 100%;
      overflow: hidden;
      position: relative;
      width: 100%;
      img {
        width: 100%;
      }
    }
    .AdjacentChapters {
      font-size: 14px;
      margin: 0 auto;
      width: 150px;
      ul {
        li {
          float: left;
          padding: 0 10px;
          a {
            color: var(--text-color);
          }
        }
      }
    }
  }
}
</style>