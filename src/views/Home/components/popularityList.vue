<script setup>
import { ref } from "vue";
let activeid = ref(1);
let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
</script>

<template>
  <div class="popularityList">
    <div
      @mousemove="activeid = item"
      class="lists"
      :class="{ active: item == activeid }"
      v-for="item in list"
      :key="item"
    >
      <div class="textBox cls" :class="{ hid: item == activeid }">
        <div class="left fl cls">
          <strong class="fl" :class="{ qiansanc: item <= 3 }">{{
            item
          }}</strong>
          <span class="title fl"> 难哄（彩蛋日难哄（彩蛋日更更中） </span>
        </div>
        <div class="right fr">
          <span class="chapter fr">第10期 桑延大改造（日更中）</span>
          <span class="text fr">更新至</span>
        </div>
      </div>
      <div class="hovers cls" :class="{ hid: item !== activeid }">
        <a class="left fl" href="www.baidu.com">
          <img
            src="https://tn1-f2.kkmh.com/image/230704/spzXLwCQS.webp-t.w120.webp.h"
            alt=""
          />
          <i :class="{ qiansanb: item <= 3 }">{{ item }}</i>
        </a>
        <div class="right fr">
          <div class="title">
            <a href="/web/topic/11059"> 偷偷藏不住（彩蛋日更中） </a>
          </div>
          <!---->
          <div class="depict" data-v-2f0d8484="">
            <a
              title="那年桑稚的心里偷偷地住进了一个人，喜欢上哥哥的朋友段嘉许，他有着好看的桃花眼，漫不经心的喊她“小孩”，初见的惊艳总是让她忍不住想要靠近，但是7岁的年龄差仿佛又是他们无法逾越的鸿沟，不知从何时起，埋藏在心底的青涩暗恋逐渐发芽，慢慢地，也蔓延进了他的心里…【独家/暑期福利周更，每周四更新；责编：柱子】"
              href="javascript:void(0);"
            >
              那年桑稚的心里偷偷地住进了一个人，那年桑稚的心里偷偷地住进了一个人喜欢上哥哥的朋友段嘉许，…
            </a>
          </div>
          <a href="/web/comic/636358" target="_blank" class="chapter"
            ><span class="L fl">更新至：</span>
            <span class="R fl"
              >第11期 【特别企划】广州kkw返图+北京kkw剧透！</span
            ></a
          >
        </div>
      </div>
    </div>
  </div>
</template> 
<style lang="scss" scoped>
.active {
  height: 35% !important;
}
.hid {
  display: none !important;
}

.qiansanc {
  color: rgb(245, 166, 35) !important;
}
.qiansanb {
  background: #f5a623 !important;
}
.popularityList {
  height: calc(100% - 30px);
  padding: 14px 0 0 30px;
  box-sizing: border-box;
  .lists {
    display: flex;
    align-items: center;
    height: 7.22%;
    .hovers {
      display: flex;
      width: 100%;
      height: 100%;
      .left {
        position: relative;
        overflow: hidden;
        border-radius: 4px;
        width: 120px;
        height: 100%;
        img {
          width: 100%;
          height: 100%;
        }
        i {
          background: rgba(0, 0, 0, 0.3);
          border-bottom-right-radius: 4px;
          color: #fff;
          display: block;
          font-size: 18px;
          font-style: normal;
          height: 26px;
          left: 0;
          line-height: 26px;
          position: absolute;
          text-align: center;
          top: 0;
          width: 26px;
        }
      }
      .right {
        padding-left: 10px;
        width: calc(100% - 120px);
        box-sizing: border-box;
        .title {
          font-size: 18px;
          line-height: 26px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          width: 90%;
          a {
            color: var(--text-color);
            width: 100%;
          }
        }
        .depict {
          display: -webkit-box;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-line-clamp: 2;
          line-clamp: 2;
          -webkit-box-orient: vertical;
          a {
            color: var(--text-color);
          }
        }
        .chapter {
          display: block;
          padding-top: 16px;
          .L {
            color: var(--text-color);
            font-size: 14px;
            line-height: 20px;
          }
          .R {
            color: #f56c6c;
            font-size: 14px;
            line-height: 20px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            width: calc(100% - 56px);
          }
        }
      }
    }
    .textBox {
      flex: 1;
      height: 20px;
      strong {
        color: var(--text-color);
      }
      .left {
        width: 50%;
        .title {
          width: 80%;
          color: var(--text-color);
          display: block;
          font-size: 14px;
          line-height: 20px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        strong {
          padding-right: 10px;
        }
      }
      .right {
        width: 50%;
        .chapter {
          color: #f56c6c;
          display: block;
          font-size: 14px;
          line-height: 20px;
          margin-left: 4px;
          width: calc(100% - 40px);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
  }
}
</style>