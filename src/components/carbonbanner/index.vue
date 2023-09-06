<script setup>
import "./js/swiper.min.js";
import { getCategoryListAPI } from "@/apis/home.js";
import { onMounted, ref } from "vue";
const categoryList = ref(null);
const getcategoryList = async () => {
  categoryList.value = (await getCategoryListAPI()).data;
};
onMounted(() => {
  getcategoryList();
  var swiper = new Swiper(".swiper-container", {
    autoplay: 5000,
    speed: 1000,
    autoplayDisableOnInteraction: false,
    //循环
    loop: true,
    //设定为true时，活动块会居中，而不是默认状态下的居左。
    centeredSlides: true,
    //设置slider容器能够同时显示的slides数量
    slidesPerView: 2.5,
    //true点击分页器的指示点分页器会控制Swiper切换
    paginationClickable: true,
    //指定后退按钮的css选择器或HTML元素
    prevButton: ".swiper-button-prev",
    //指定前进按钮的css选择器或HTML元素
    nextButton: ".swiper-button-next",
    //断点设定：根据屏幕宽度设置某参数为不同的值，类似于响应式布局的media screen。
    breakpoints: {
      668: {
        slidesPerView: 1,
      },
    },
  });
});
</script>

<template>
  <div class="innerBanner">
    <div class="banner_container">
      <!-- Swiper -->
      <section class="pc-banner">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide swiper-slide-center none-effect">
              <a href="#"
                ><img src="https://tn1-f2.kkmh.com/image/230607/IKmYzCtnL.png"
              /></a>
            </div>
            <div class="swiper-slide">
              <a href="#"
                ><img src="https://tn1-f2.kkmh.com/image/230630/zbKFcqJrz.png"
              /></a>
            </div>
            <div class="swiper-slide">
              <a href="#"
                ><img src="https://tn1-f2.kkmh.com/image/230607/LwJaapYqn.png"
              /></a>
            </div>
            <div class="swiper-slide">
              <a href="#"
                ><img src="https://tn1-f2.kkmh.com/image/230616/YLNlcqRoo.png"
              /></a>
            </div>
            <div class="swiper-slide">
              <a href="#"
                ><img src="https://tn1-f2.kkmh.com/image/230607/GXHztJkNz.png"
              /></a>
            </div>
          </div>
        </div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </section>
    </div>
    <div class="container">
      <div class="labelNav">
        <ul class="navList cls">
          <li
            class="navListItems items"
            v-for="item in categoryList"
            :key="item.id"
          >
            <RouterLink :to="item.to" class="itemLink">
              {{ item.name }}
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template> 
<style lang="scss" scoped>
.pc-banner {
  width: 100%;
  float: left;
  position: relative;
}

@media screen and (max-width: 668px) {
  .pc-banner {
    background-size: auto 100%;
  }
}

.swiper-container {
  width: 100%;
  margin: 20px 0 0 0;
}

@media screen and (max-width: 668px) {
  .swiper-container {
    margin: 15px 0 0 0;
  }
}

.swiper-slide {
  -webkit-transition: transform 1s;
  -moz-transition: transform 1s;
  -ms-transition: transform 1s;
  -o-transition: transform 1s;
  -webkit-transform: scale(0.95);
  transform: scale(0.95);
  filter: blur(3px) brightness(0.9) opacity(0.8);
}

@media screen and (max-width: 668px) {
  .swiper-slide {
    -webkit-transform: scale(0.97);
    transform: scale(0.97);
  }
}

.swiper-slide-active,
.swiper-slide-duplicate-active {
  -webkit-transform: scale(1);
  transform: scale(1);
  filter: none;
}

@media screen and (max-width: 668px) {
  .swiper-slide-active,
  .swiper-slide-duplicate-active {
    -webkit-transform: scale(0.97);
    transform: scale(0.97);
  }
}

.none-effect {
  -webkit-transition: none;
  -moz-transition: none;
  -ms-transition: none;
  -o-transition: none;
}

.swiper-slide a {
  height: 100%;
  background: #fff;
  display: block;
  border-radius: 14px;
}

@media screen and (max-width: 668px) {
  .swiper-slide a {
    border-radius: 7px;
  }
}

.swiper-slide img {
  height: 100%;
  width: 100%;
  border-radius: 14px;
  display: block;
}

@media screen and (max-width: 668px) {
  .swiper-slide img {
    border-radius: 7px;
  }
}

.swiper-button-prev {
  z-index: 3;
  width: 30px;
  height: 30px;
  top: 50%;
  position: absolute;
  display: none;
  background-size: 30px 30px;
  left: 20% !important;
  background-image: url(data:image/svg+xml;base64,PHN2ZyB0PSIxNjg5NDg5MDQ2OTI2IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjUyMzYiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48cGF0aCBkPSJNNTAzLjgwOCA1MTguMTQ0bS00NDIuMzY4IDBhNDMyIDQzMiAwIDEgMCA4ODQuNzM2IDAgNDMyIDQzMiAwIDEgMC04ODQuNzM2IDBaIiBvcGFjaXR5PSIwLjM1IiBwLWlkPSI1MjM3IiBkYXRhLXNwbS1hbmNob3ItaWQ9ImEzMTN4Ljc3ODEwNjkuMC5pOSIgY2xhc3M9InNlbGVjdGVkIj48L3BhdGg+PHBhdGggZD0iTTYzMS4wOTEyIDUwMS45NjQ4IDQ1OS4yNjQgMzMwLjEzNzZjLTguOTA4OC04LjkwODgtMjMuNDQ5Ni04LjkwODgtMzIuMzU4NCAwLTguOTA4OCA4LjkwODgtOC45MDg4IDIzLjQ0OTYgMCAzMi4zNTg0bDE1NS42NDggMTU1LjY0OC0xNTUuNjQ4IDE1NS42NDhjLTguOTA4OCA4LjkwODgtOC45MDg4IDIzLjQ0OTYgMCAzMi4zNTg0IDguOTA4OCA4LjkwODggMjMuNDQ5NiA4LjkwODggMzIuMzU4NCAwbDE3MS44MjcyLTE3MS44MjcyQzY0MCA1MjUuNDE0NCA2NDAgNTEwLjg3MzYgNjMxLjA5MTIgNTAxLjk2NDh6IiBmaWxsPSIjRkZGRkZGIiBwLWlkPSI1MjM4Ij48L3BhdGg+PC9zdmc+);
  transform: rotate(180deg) scale(2);
}

.swiper-button-next {
  z-index: 3;
  width: 30px;
  height: 30px;
  top: 50%;
  position: absolute;
  display: none;
  background-size: 30px 30px;
  right: 20% !important;
  background-image: url(data:image/svg+xml;base64,PHN2ZyB0PSIxNjg5NDg5MDQ2OTI2IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjUyMzYiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48cGF0aCBkPSJNNTAzLjgwOCA1MTguMTQ0bS00NDIuMzY4IDBhNDMyIDQzMiAwIDEgMCA4ODQuNzM2IDAgNDMyIDQzMiAwIDEgMC04ODQuNzM2IDBaIiBvcGFjaXR5PSIwLjM1IiBwLWlkPSI1MjM3IiBkYXRhLXNwbS1hbmNob3ItaWQ9ImEzMTN4Ljc3ODEwNjkuMC5pOSIgY2xhc3M9InNlbGVjdGVkIj48L3BhdGg+PHBhdGggZD0iTTYzMS4wOTEyIDUwMS45NjQ4IDQ1OS4yNjQgMzMwLjEzNzZjLTguOTA4OC04LjkwODgtMjMuNDQ5Ni04LjkwODgtMzIuMzU4NCAwLTguOTA4OCA4LjkwODgtOC45MDg4IDIzLjQ0OTYgMCAzMi4zNTg0bDE1NS42NDggMTU1LjY0OC0xNTUuNjQ4IDE1NS42NDhjLTguOTA4OCA4LjkwODgtOC45MDg4IDIzLjQ0OTYgMCAzMi4zNTg0IDguOTA4OCA4LjkwODggMjMuNDQ5NiA4LjkwODggMzIuMzU4NCAwbDE3MS44MjcyLTE3MS44MjcyQzY0MCA1MjUuNDE0NCA2NDAgNTEwLjg3MzYgNjMxLjA5MTIgNTAxLjk2NDh6IiBmaWxsPSIjRkZGRkZGIiBwLWlkPSI1MjM4Ij48L3BhdGg+PC9zdmc+);
  transform: scale(2);
}

.innerBanner {
  &:hover .swiper-button-next {
    display: block;
  }
  &:hover .swiper-button-prev {
    display: block;
  }
  overflow: hidden;
  background-color: #333240;

  .banner_container {
    overflow: hidden;
  }

  .labelNav {
    width: 100%;
    float: left;

    .navList {
      display: flex;
      padding: 20px 0;
      flex-wrap: wrap;

      .navListItems {
        flex: 1 1 0;
        float: left;
        text-align: center;

        @include max-to("sm") {
          flex: 0 0 25%;
        }
      }
    }
  }
}
</style>

