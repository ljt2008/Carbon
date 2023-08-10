<script setup>
import Carbonlist from "./Carbonlist.vue";
import { ref, computed } from "vue";
import { ceil } from "lodash";
const list = [
  {
    id: 1,
    imgsrc: "https://tn1-f2.kkmh.com/image/220926/Sxis8cdUn.webp-t.w207.webp.h",
    author: "囍千千（原著）+五彩石漫画社",
    laud: "99万+",
    title: "快穿女配冷静点",
    fenlei: "女生1",
  },
  {
    id: 2,
    imgsrc: "https://tn1-f2.kkmh.com/image/220926/Sxis8cdUn.webp-t.w207.webp.h",
    author: "囍千千（原著）+五彩石漫画社",
    laud: "99万+",
    title: "快穿女配冷静点",
    fenlei: "女生2",
  },
  {
    id: 3,
    imgsrc: "https://tn1-f2.kkmh.com/image/220926/Sxis8cdUn.webp-t.w207.webp.h",
    author: "囍千千（原著）+五彩石漫画社",
    laud: "99万+",
    title: "快穿女配冷静点",
    fenlei: "女生3",
  },
  {
    id: 4,
    imgsrc: "https://tn1-f2.kkmh.com/image/220926/Sxis8cdUn.webp-t.w207.webp.h",
    author: "囍千千（原著）+五彩石漫画社",
    laud: "99万+",
    title: "快穿女配冷静点",
    fenlei: "女生4",
  },
  {
    id: 5,
    imgsrc: "https://tn1-f2.kkmh.com/image/220926/Sxis8cdUn.webp-t.w207.webp.h",
    author: "囍千千（原著）+五彩石漫画社",
    laud: "99万+",
    title: "快穿女配冷静点",
    fenlei: "女生5",
  },
  {
    id: 6,
    imgsrc: "https://tn1-f2.kkmh.com/image/220926/Sxis8cdUn.webp-t.w207.webp.h",
    author: "囍千千（原著）+五彩石漫画社",
    laud: "99万+",
    title: "快穿女配冷静点",
    fenlei: "女生6",
  },
  {
    id: 7,
    imgsrc: "https://tn1-f2.kkmh.com/image/220926/Sxis8cdUn.webp-t.w207.webp.h",
    author: "囍千千（原著）+五彩石漫画社",
    laud: "99万+",
    title: "快穿女配冷静点",
    fenlei: "女生1",
  },
  {
    id: 8,
    imgsrc: "https://tn1-f2.kkmh.com/image/220926/Sxis8cdUn.webp-t.w207.webp.h",
    author: "囍千千（原著）+五彩石漫画社",
    laud: "99万+",
    title: "快穿女配冷静点",
    fenlei: "女生2",
  },
  {
    id: 9,
    imgsrc: "https://tn1-f2.kkmh.com/image/220926/Sxis8cdUn.webp-t.w207.webp.h",
    author: "囍千千（原著）+五彩石漫画社",
    laud: "99万+",
    title: "快穿女配冷静点",
    fenlei: "女生3",
  },
  {
    id: 10,
    imgsrc: "https://tn1-f2.kkmh.com/image/220926/Sxis8cdUn.webp-t.w207.webp.h",
    author: "囍千千（原著）+五彩石漫画社",
    laud: "99万+",
    title: "快穿女配冷静点",
    fenlei: "女生4",
  },
];
const pagemax = ceil(list.length / 6);

const page = ref(1);
let list1 = computed(() => {
  return list.slice(6 * (page.value - 1), 6 * page.value);
});
console.log(pagemax);
const pagejian = function () {
  if (page.value > 1) {
    page.value--;
  }
};
const pagejia = function () {
  if (page.value < pagemax) {
    page.value++;
  }
};
</script>

<template>
  <div class="HomeCategories">
    <div class="container">
      <div class="header cls">
        <ul cls>
          <li class="">恋爱</li>
          <li class="">古风</li>
          <li class="">穿越</li>
          <li class="">大女主</li>
          <li class="active">青春</li>
          <li class="">非人类</li>
          <li class="">更多分类</li>
        </ul>
      </div>
      <div class="categoriesLists">
        <div class="dataList cls">
          <div class="Tab padding16 fl" v-for="item in list1" :key="item.id">
            <a
              href="/web/topic/766"
              target="_blank"
              class="link play"
              :title="item.title"
            >
              <div class="imgBox">
                <img class="img" :src="item.imgsrc" />

                <div class="imgFooter cls">
                  <span :title="item.title" class="author fl">{{
                    item.author
                  }}</span>
                  <span class="liked fr">
                    <svg
                      width="11px"
                      height="12px"
                      viewBox="0 0 11 12"
                      version="1.1"
                      rel="nofollow"
                      xmlns="https://www.w3.org/2000/svg"
                      xmlns:xlink="https://www.w3.org/1999/xlink"
                      class="icon"
                    >
                      <desc>Created with Sketch.</desc>
                      <g
                        id="Page-1"
                        stroke="none"
                        stroke-width="1"
                        fill="none"
                        fill-rule="evenodd"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <g
                          id="tag"
                          stroke="#ffffff"
                          transform="translate(-503.000000, -559.000000)"
                        >
                          <g
                            id="Group-Copy-5"
                            transform="translate(504.000000, 560.000000)"
                          >
                            <path
                              id="Stroke-1"
                              d="M5.95913517,2.75540789 C5.8983025,2.93455129 6.03764219,3.11990058 6.22589463,3.11990058 L7.92468796,3.11948686 C8.78703212,3.11948686 9.36781967,3.82944084 9.21573801,4.69743819 L8.63495045,8.01345284 C8.48286878,8.88103647 7.65340715,9.59099045 6.79106299,9.59099045 L1.11800577,9.59099045 C0.503102597,9.59099045 0,9.08458971 0,8.46565547 L0,4.24482184 C0,3.6258876 0.503102597,3.11948686 1.11800577,3.11948686 L2.59443104,3.11948686 C2.7555554,3.11948686 2.91010325,3.06487501 3.037112,2.9647533 C3.33469883,2.7301706 3.7983424,2.19522276 3.80204168,1.13815258 C3.80450787,0.534939937 4.26650731,0.0343313614 4.86496923,0.00288817814 L4.89168628,0.00164699985 C5.54933673,-0.0326922661 6.09847486,0.474122201 6.13464563,1.13029179 C6.16711712,1.71695539 6.09765279,2.34912887 5.95913517,2.75540789 L5.95913517,2.75540789 Z"
                            ></path>
                            <path id="Stroke-3" d="M2,3.5 L2,8.5"></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                    {{ item.laud }}
                  </span>
                </div>
              </div>
              <div class="itemTitle">{{ item.title }}</div></a
            >
            <!---->
          </div>
        </div>
        <div class="pre" @click="pagejian()"></div>
        <div class="next" @click="pagejia()"></div>
      </div>
    </div>
  </div>
</template> 
<style lang="scss" scoped>
.padding16 {
  padding-right: 16px;
}
.HomeCategories {
  background: url(https://static3w.kuaikanmanhua.com/_nuxt/static-kkfront-pc/image/categories_bg_campus.3c530a7.jpg)
    0 0 / cover no-repeat;
  margin-top: 31px;
  height: 411px;
  width: 100%;
  .container {
    .header {
      height: 42px;
      line-height: 42px;
      padding-top: 32px;
      ul {
        width: 100%;
        li {
          box-sizing: border-box;
          width: calc((100% - 7 * 20px) / 7);
          color: #ffffffc5;
          cursor: pointer;
          filter: alpha(opacity=80);
          float: left;
          font-size: 24px;
          font-weight: lighter;
          margin-right: 20px;
          opacity: 0.8;
          text-align: center;

          &:hover {
            color: #ffffff;
          }
          &.active {
            color: #ffffff;
            font-size: 30px;
            font-weight: 400;
            opacity: 1;
          }
        }
      }
    }
    .categoriesLists {
      position: relative;
      padding-top: 14px;

      .dataList {
        .Tab {
          width: calc((100% - 80px) / 6);
          padding-top: 17px;
          &:hover {
            transform: translateY(-10px);
            transition: all 0.2s linear;
          }
          .link {
            &:hover img {
              filter: alpha(Opacity=80);
              -moz-opacity: 0.8;
              opacity: 0.8;
            }
            .imgBox {
              background: #f5f5f5;
              border-radius: 4px;
              height: 244px;
              overflow: hidden;
              position: relative;
              width: 100%;
              img {
                background: no-repeat 50%;
                background-size: cover;
                border-radius: 4px;
                display: inline-block;
                height: 100%;
                width: 100%;
              }
              .imgFooter {
                background-image: linear-gradient(
                  -180deg,
                  transparent,
                  rgba(0, 0, 0, 0.72) 98%
                );
                border-radius: 5px;
                bottom: -1px;
                -webkit-box-sizing: border-box;
                box-sizing: border-box;
                color: #fff;
                font-size: 12px;
                height: 30px;
                left: 0;
                padding-left: 6px;
                padding-right: 6px;
                padding-top: 9px;
                position: absolute;
                width: 100%;
              }
            }
            .itemTitle {
              color: #fff;
              display: block;
              font-size: 16px;
              height: 22px;
              line-height: 22px;
              margin: 6px 6px 0;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
          }
        }
        .Tab:nth-child(6n) {
          padding-right: 0px !important;
        }
      }
      &:hover .pre,
      &:hover .next {
        display: block;
      }
      .pre {
        display: none;
        cursor: pointer;
        height: 96px;
        position: absolute;
        top: 98px;
        width: 31px;
        z-index: 11;
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAABgCAYAAADl2qktAAAABGdBTUEAALGPC/xhBQAAAYhJREFUaAXtmTFqw0AQReUkoDr4BhJJpzOk1RkCKVTqMmpVqgjkCs4xBCpTL6hzG3XZAS+EkMirmdkRhL8gFnv37/t+GFvGhyzLHv21y7jZhXqBAr6LfWiHdlMDeMOZ6g4waA8mTGdoN9UdYNAeTJjO0G6qO8CgPZgwnaHdVHeAQXswYTr/L+1N09xP0/Qco/AuZlPsHgL3ff+a5/mDL5BVVfW2llXT/h28LMtH13WnNTCtqcB/gtu2fRmG4ZwczgWLX7kELIJLwWy4BpgF1wJvhmuCN8G1wdHwFOAoeCpwFJw2pRq3/uDj2uHjOH465051XT/RFwbN9JieX8vFrF2F0yGpCkTBUxWIhqcosAmuXWAzXLMAC65VgA3XKCCCSwuI4ZICKvDfCpRl6fxt9ERrfw01OAHok3Ce5/eiKNy1e3baf/AX/sglE6ZD5RcLtzHgXHOiHLSL9HHD0M41J8pBu0gfNwztXHOiHLSL9HHD0M41J8pBu0gfNwztXHOiHLSL9HHDu2r/AtcZRQkrm+iuAAAAAElFTkSuQmCC)
          0 0 / cover no-repeat;
        /* display: none; */
        left: 0;
      }
      .next {
        display: none;
        cursor: pointer;
        height: 96px;
        position: absolute;
        top: 98px;
        width: 31px;
        z-index: 11;
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAABgCAYAAADl2qktAAAABGdBTUEAALGPC/xhBQAAAXpJREFUaAXtmTFug0AQRXFSUEc5Q1Jxh7TkCpFSUNJygdyAlpIih/A1kCjThjotdGakTBllmD/sNn8la5r9fn+frbUlLkVRPO+vLOsuC/UXSngW+9RO7UkN8AuXVLfCqF1NJJ3UnlS3wqhdTSSd1J5Ut8KoXU0kndSeVLfCqF1NJJ1Ztd/vR320HHee57d1Xb+naVot+y17THABV1X1Udf1y7Is16gCJricWMBlWT5FFjDB5aRy4ugCJrh8fmcUMMPPKHAIHl3gMDyygAseVcANjygAwdECMBwpEAL3Fsj6qxYGb5rmYRiGT7n/t237atv2fRzHH7Hy1wqBe8BSCIZ7wTAcAUNwFOyGR4Bd8CjwYXgk+BA8GmyGnwE2w7uuez1yc8kbW9Zl32R6lir/3fu+v/53ZVqguscM10DkhK9XpAzhiD13ltrd6pAgtSP23Flqd6tDgtSO2HNnqd2tDglSO2LPnaV2tzokSO2IPXeW2t3qkCC1I/bc2RvLu08yHOiHXgAAAABJRU5ErkJggg==)
          0 0 / cover no-repeat;
        /* display: none; */
        right: 0;
      }
    }
  }
}
</style>