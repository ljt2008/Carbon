<script setup>
import { ref } from "vue";
const isexpand = ref(true);
const count = ref(0);
import { useInfiniteScroll } from "@vueuse/core";
const el = ref(null);
useInfiniteScroll(
  el,
  () => {
    // load more
    count.value += 5;
  },
  { distance: 10 }
);
import Carbonlist from "@/views/Home/components/Carbonlist.vue";
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
];
</script>

<template>
  <div class="Detail">
    <div class="container">
      <div class="TopicList fl">
        <div class="TopicHeader cls">
          <div class="left fl">
            <img
              alt="满级绿茶穿成小可怜"
              class="imgCover"
              src="https://tn1-f2.kkmh.com/image/211231/haMZsBXYx.webp-t.w360.webp.h"
            />
          </div>
          <div class="right fl">
            <h3 class="title">满级绿茶穿成小可怜</h3>
            <div class="nickname">春刀寒（原著）+原点格子漫画</div>
            <div class="conversionData">
              <span href="javascript:void(0);" class="heat"
                ><img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAQlBMVEUAAACXl5eZmZmampqZmZmfn5+ZmZmZmZmampqZmZmZmZmZmZmampqXl5eampqbm5uZmZmZmZmYmJiZmZmampqZmZk3iN+iAAAAFXRSTlMAIIC/3xDvoJ9QcGDPQJBAsDCQj2/sr34GAAAB0klEQVRIx82XW7aDIAxF5REULT7aZv5TvRFp0d4gyJf5qct2r4TkJKTN/Qx6OdWyEsk6qGIH9PYQNbDCzXSNb0Oc9L4raMJUOHclvNH9VVYEl0/6NFeTNhE0fhKnLsKWGOlDMPQ0XIN7Quz3ycAleCZkiRWXl2BN7sKjW4u9ib2TolDY815sjk6v1wPYLPvGfZb6LW5iS+o2YHRMBr5aE4ZWKWA1/CSgXf2bXPKkZ3fRec6fWAwx8DwbX42b0tRpp3SRPZzDCy0ITqRYroVDrgx8ouDZF5K10DBwCBdMSq1vz7L9+Y22ZTs8HOjZJGAZ1aoYuA0aYGG9m24I3G/4TE6xAGG4WNbxq+HggzIsm2+dKuGCZmkOUp+5qFVC7eLHiWbGVtmUfSAiJ2qX4WKfcO9qYbVGc294ZuA5CXNeahNmmA6QnGbJcmKKmi2+A6PF8VyYbMcmAkqvMe7QMssO/PCFoptYh6i5uF8Fd6DmvnB42liZLeMZhlXadLokoDMrX3d20bnTZRW6852ux3TkQmOmmHK7Hf7jIDGwWVqPR3ySJs+SWY3elLQLrNEuw+hfFe1CokXGiv80iJlBlStemcfHkezh2sptZafIurF30NzN/gCY7C2my//EnQAAAABJRU5ErkJggg=="
                  class="icon"
                />
                21.76亿
              </span>
              <span href="javascript:void(0);" class="laud"
                ><img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAOVBMVEUAAACZmZmZmZmbm5uXl5eZmZmXl5efn5+ampqampqZmZmZmZmampqZmZmZmZmYmJiZmZmZmZmZmZkuWYPwAAAAEnRSTlMAgN9AQGAgEJ/PcO+/kFAwoK81M8sdAAABUElEQVRIx+3V0a6DIAwGYItaEBSU93/Y05qYLqJH27sl+29GIt8UaEP3S5M+hmVEE8W57gGLdQStmuyRrLUjoQQ4bPQ7aTEveOTBRIOis56I20eR/0WHM5FwfL8WL0QGK+aVeiNG2WM9XklEIy6VgjaMbt9rC/aQ+JBRj/0YmNZUug8M/ZFyxyCEieFhBX/EwQVdUpXMKE+GeorzZzvJwzQPp2I7ZW7OVTI0dQ6SrZ3RV0rIiNDii6KPzYuBB88Y+TVNG3TvcGmwq9U9Ylkh6LGsOVvxzC1jxF4aXY8zTViseOUJVuz4UI24cGlbceTi1GM5qGLAcgnpsVxCBiwHpcYyL3VqLB216bF01GjFE3eUEaOUlxZLebXfk7zgp/Jqd2J5wrEtL7lSAt1jgb+sv0pe6911udVXcdcVP72y2F0HHmkCf99uGf5LzL775TvzB+ERKnrRTfD9AAAAAElFTkSuQmCC"
                  class="likesIcon"
                />
                99万+
              </span>
              <div class="share">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAM1BMVEUAAACYmJiampqZmZmZmZmampqampqZmZmZmZmampqZmZmfn5+ZmZmVlZWYmJiZmZmZmZlBae5rAAAAEHRSTlMAIJ/v379/YFDQcBCwMJBAvok5aAAAASlJREFUSMft1suuhCAMBmBKKRdvw/s/7WFOSYYoUNONG/+dDV+qUKPmzYOBU+7LSJhPcQ0HSsuI7il30iw/yqUftMXcS2jxSMO/RXtKY83qRtp9aRR2c6BD3RyVJn48KTv2dCm6edPFJtccQRMolW0ifXFt1jO2Q0osNPj4jRtt1m6U3GLuYUgMadmbdhJuDwc9Qxlf7VGoAlM9GA32/GqoMPA46bDlqgLXxqDE9nLTEpYbRw8yDrV2LTsZU6l9THcXQcJr5hYq/OGSAtfpilpMvEiHU85otLhUSI0pZ6/GsASjwjUvfhxvF2ywDqMcd11J/A7JCZ2xjaWGIFtwvc9AKkUXJBvxu2zwt+E2OwvmwQ1GzLeCcfQ4ctI+2klCoStNTwSmMW+eyx/YKSLyM4k/JwAAAABJRU5ErkJggg=="
                  class="icon"
                />
                <span>分享</span>
              </div>
            </div>
            <div class="comicIntro">
              <div class="details">
                <div class="hide-ellipsis detailsBox">
                  <p :class="{ lineclamplimit: isexpand }">
                    漫画简介:
                    林非鹿是个民间奥斯卡影后。卖得了萌，掐得了架，装得了无辜，演得了白莲。反正不是个好人，后来她死在了二十七岁生日那天。她发誓，如果有来世，她一定当个好人。结果穿成了大林朝的五岁小公主，母妃不受宠病恹恹，哥哥是个痴傻智障吃不饱穿不暖，还随时有生命危险。林非鹿：……这可是你们逼我的！【独家/责编：阿宅】
                  </p>
                  <a @click="isexpand = !isexpand"> 收起 </a>
                </div>
              </div>
            </div>
            <div class="btnList">
              <div class="btnListBox fl">
                <button class="firstBtn">查看第一话</button>
                <button class="buy-btn">整本购</button>
                <button class="follow">关注</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="chapterList fl">
        <div class="TopicEpisode">
          <div class="text-warp">
            <div class="title">章节列表</div>
            <div class="detail">连载中</div>
            <span class="line" style="display: "></span>
            <div class="detail" style="display: ">共36个内容</div>
            <span class="line"></span>
            <div class="detail" style="display: ">共36篇正文</div>
          </div>
          <div class="episode-interval">
            <div class="interval-item active">1 - 50</div>
            <div class="interval-item">51 - 100</div>
          </div>
          <div class="episode-title">
            <div class="title-item">
              <span class="text"> 00 预告 </span>
            </div>
            <div class="title-item">
              <span class="text"> 00 序章 </span>
            </div>
            <div class="title-item">
              <span class="text"> 03 白鼬(上) </span>
            </div>
            <div class="title-item">
              <span class="text"> 04 白鼬(下) </span>
            </div>
            <div class="title-item">
              <span class="text"> 05 幻境(上) </span>
            </div>
            <div class="title-item">
              <span class="text"> 06 幻境(下) </span>
            </div>
            <div class="title-item">
              <span class="text"> 07 卫道（上） </span>
            </div>
            <div class="title-item">
              <span class="text"> 08 卫道（下） </span>
            </div>
            <div class="title-item">
              <span class="text"> 08 死村（上） </span>
            </div>
            <div class="title-item">
              <span class="text"> 09 死村（下） </span>
            </div>
            <div class="title-item">
              <span class="text"> 10 巫墓（上） </span>
            </div>
            <div class="title-item">
              <span class="text"> 11 巫墓（下） </span>
            </div>
            <div class="title-item">
              <span class="text"> 12 铁犬（上） </span>
            </div>
            <div class="title-item">
              <span class="text"> 13 铁犬（下） </span>
            </div>
            <div class="title-item">
              <span class="text"> 14 蔽日（上） </span>
            </div>
            <div class="title-item">
              <span class="text"> 15 蔽日（下） </span>
            </div>
            <div class="title-item">
              <span class="text"> 16 红炎（上） </span>
            </div>
            <div class="title-item">
              <span class="text"> 17 红炎（下） </span>
            </div>
            <div class="title-item">
              <span class="text"> 18 霜雪（上） </span>
            </div>
            <div class="title-item">
              <span class="text"> 19 霜雪（下） </span>
            </div>
            <div class="title-item">
              <span class="text"> 21 槐荫（下） </span>
            </div>
            <div class="title-item">
              <span class="text"> 22 修士（上） </span>
            </div>
            <div class="title-item">
              <span class="text"> 23 修士（下） </span>
            </div>
            <div class="title-item">
              <span class="text"> 24 墨蛟（上） </span>
            </div>
            <div class="title-item">
              <span class="text"> 25 墨蛟（下） </span>
            </div>
            <div class="title-item">
              <span class="text"> 温馨提示 </span>
            </div>
            <div class="title-item">
              <span class="text"> 26 落尘（上） </span>
            </div>
            <div class="title-item">
              <span class="text"> 27 落尘（下） </span>
            </div>
            <div class="title-item">
              <span class="text"> 28 麟陨篇（序章） </span>
            </div>
            <div class="title-item">
              <span class="text"> 29 红绫（上） </span>
            </div>
            <div class="title-item">
              <span class="text"> 新年贺图 </span>
            </div>
            <div class="title-item">
              <span class="text"> 30 红绫（下） </span>
            </div>
            <div class="title-item">
              <span class="text"> 32 青眼（下） </span>
            </div>
            <div class="title-item">
              <span class="text"> 33 粉丝获奖公布 </span>
            </div>
            <div class="title-item">
              <span class="text"> 34 夜憩（上） </span>
            </div>
            <div class="title-item">
              <span class="text"> 35 夜憩（下） </span>
            </div>
            <div class="title-item">
              <span class="text"> 36 器灵（上） </span>
            </div>
            <div class="title-item">
              <span class="text"> 37 器灵（下） </span>
            </div>
            <div class="title-item">
              <span class="text"> 39 燕血（下） </span>
            </div>
            <div class="title-item">
              <span class="text"> 40 麟梦（上） </span>
            </div>
            <div class="title-item">
              <span class="text"> 41 麟梦（下） </span>
            </div>
            <div class="title-item">
              <span class="text"> 42 晨曦 (上) </span>
            </div>
            <div class="title-item">
              <span class="text"> 43 晨曦 (下) </span>
            </div>
            <div class="title-item">
              <span class="text"> 44 风起（上） </span>
            </div>
            <div class="title-item">
              <span class="text"> 45 风起（下） </span>
            </div>
            <div class="title-item">
              <span class="text"> 46 云涌（上） </span>
            </div>
            <div class="title-item">
              <span class="text"> 47 云涌（下） </span>
            </div>
            <div class="title-item">
              <span class="text"> 48 印信（上） </span>
            </div>
            <div class="title-item">
              <span class="text"> 49 印信（下） </span>
            </div>
            <div class="title-item">
              <span class="text"> 50 囚笼（上） </span>
            </div>
          </div>
        </div>
      </div>
      <div class="TopicComment fl">
        <div class="title">热门评论</div>
        <ul ref="el" class="infinite-list">
          <li v-for="i in count" :key="i" class="infinite-list-item">
            <div class="user-info">
              <img
                src="https://f2.kkmh.com/Fqr9Z1Ih1CEGs0i5kMWdBrCT3ubh-w180"
                class="avatar"
              />
              <div class="center">
                <div class="user-name">Truth_真理</div>
                <div class="date">2022-10-01</div>
              </div>
              <div class="right">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAOVBMVEUAAACZmZmZmZmbm5uXl5eZmZmXl5efn5+ampqampqZmZmZmZmampqZmZmZmZmYmJiZmZmZmZmZmZkuWYPwAAAAEnRSTlMAgN9AQGAgEJ/PcO+/kFAwoK81M8sdAAABUElEQVRIx+3V0a6DIAwGYItaEBSU93/Y05qYLqJH27sl+29GIt8UaEP3S5M+hmVEE8W57gGLdQStmuyRrLUjoQQ4bPQ7aTEveOTBRIOis56I20eR/0WHM5FwfL8WL0QGK+aVeiNG2WM9XklEIy6VgjaMbt9rC/aQ+JBRj/0YmNZUug8M/ZFyxyCEieFhBX/EwQVdUpXMKE+GeorzZzvJwzQPp2I7ZW7OVTI0dQ6SrZ3RV0rIiNDii6KPzYuBB88Y+TVNG3TvcGmwq9U9Ylkh6LGsOVvxzC1jxF4aXY8zTViseOUJVuz4UI24cGlbceTi1GM5qGLAcgnpsVxCBiwHpcYyL3VqLB216bF01GjFE3eUEaOUlxZLebXfk7zgp/Jqd2J5wrEtL7lSAt1jgb+sv0pe6911udVXcdcVP72y2F0HHmkCf99uGf5LzL775TvzB+ERKnrRTfD9AAAAAElFTkSuQmCC"
                  class="like"
                />
                <span class="like-count">50</span>
              </div>
            </div>
            <div class="content">
              我敲，一天十五话是什么神仙开端[热词_笑不活了]
            </div>
          </li>
        </ul>
      </div>
      <div class="FeaturedComics fl">
        <div class="FeaturedComicsArea">
          <div class="homecontent cls">
            <div class="header cls">
              <h3 class="title fl">精选漫画</h3>
            </div>
            <Carbonlist :itemlist="list" :style="0" :colomns="5" :type="0" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template> 
<style lang="scss">
.Detail {
  width: 100%;
  height: 10000px;
  background-color: var(--bg3);
  .container {
    background-color: var(--bg2);
    .TopicList {
      margin-top: 10px;
      background-color: #fff;
      border: 1px solid #eee;
      border-radius: 4px;
      width: 100%;
      .TopicHeader {
        padding: 20px;
        .left {
          background: #f5f5f5;
          border: 1px solid #eee;
          border-radius: 6px;
          cursor: pointer;
          height: 225px;
          margin-right: 24px;
          overflow: hidden;
          position: relative;
          width: 360px;
          box-sizing: border-box;
        }
        .right {
          width: calc(100% - 384px);
          .title {
            color: #333;
            font-size: 24px;
            font-weight: 500;
            line-height: 29px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            width: 100%;
          }
          .nickname {
            color: #666;
            font-size: 14px;
            line-height: 17px;
            margin-top: 6px;
          }
          .conversionData {
            display: flex;
            margin-top: 24px;
            .heat {
              cursor: pointer;
              color: #999;
              display: flex;
              font-size: 14px;
              height: 20px;
              z-index: 1;
              .icon {
                fill: #999;
                height: 20px;
                margin-right: 4px;
                position: relative;
                width: 20px;
              }
            }
            .laud {
              cursor: pointer;
              color: #999;
              display: flex;
              font-size: 14px;
              height: 20px;
              margin-left: 16px;
              z-index: 1;
              .likesIcon {
                fill: #999;
                height: 20px;
                margin-right: 4px;
                position: relative;
                width: 20px;
              }
            }
            .share {
              color: #999;
              cursor: pointer;
              display: flex;
              font-size: 14px;
              height: 20px;
              margin-left: 16px;
              z-index: 1;
            }
          }
          .comicIntro {
            color: #666;
            font-size: 14px;
            line-height: 20px;
            margin-top: 24px;
            .details {
              position: relative;
              width: 100%;
              a {
                background: #fff;
                bottom: 1px;
                color: #000;
                cursor: pointer;
                font-size: 14px;
                line-height: 21px;
                position: absolute;
                right: 7px;
                &::before {
                  float: right;
                  height: 21px;
                  content: "";
                  display: block;
                  width: 21px;
                  background: url(data:image/svg+xml;base64,PHN2ZyB0PSIxNjkwMDk4NjA1MzY1IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjM1NDAiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48cGF0aCBkPSJNNjQwIDYwOGMtNi40IDAtMTkuMiAwLTI1LjYtNi40TDUxMiA0OTIuOCA0MDkuNiA2MDEuNmMtMTIuOCAxMi44LTMyIDEyLjgtNDQuOCAwcy0xMi44LTMyIDAtNDQuOGwxMjgtMTI4YzEyLjgtMTIuOCAzMi0xMi44IDQ0LjggMGwxMjggMTI4YzEyLjggMTIuOCAxMi44IDMyIDAgNDQuOEM2NTkuMiA2MDggNjQ2LjQgNjA4IDY0MCA2MDh6IiBmaWxsPSIjNTE1MTUxIiBwLWlkPSIzNTQxIj48L3BhdGg+PC9zdmc+)
                    0 0 / cover no-repeat;
                  &.active {
                    transform: rotate(180deg);
                  }
                }
              }
              .detailsBox {
                overflow: hidden;
                position: relative;
                width: 100%;
                p {
                  &::after {
                    background: #fff;
                    bottom: 0;
                    content: "...";
                    padding-left: 4px;
                    padding-right: 70px;
                    position: absolute;
                    right: 0;
                  }
                  &.lineclamplimit {
                    -webkit-line-clamp: 999 !important;
                  }
                  word-wrap: break-word;
                  -webkit-box-orient: vertical;
                  -webkit-line-clamp: 2;
                  color: #666;
                  display: -webkit-box;
                  font-size: 14px;
                  line-height: 21px;
                  overflow: hidden;
                  word-break: break-all;
                }
              }
            }
          }
          .btnList {
            margin-top: 24px;
            .btnListBox {
              -webkit-box-align: center;
              -ms-flex-align: center;
              align-items: center;
              display: -webkit-box;
              display: -ms-flexbox;
              display: flex;
              width: 100%;
              flex-wrap: wrap;
              button {
                border: none;
              }
              .firstBtn {
                background-color: #ffe120;
                border-radius: 100px;
                color: #222;
                cursor: pointer;
                height: 36px;
                line-height: 36px;
                width: 117px;
              }
              .buy-btn {
                border-radius: 30px;
                background: #ff751a;
                color: #fff;
                font-family: PingFang SC, sans-serif, serif;
                font-style: normal;
                height: 34px;
                line-height: 34px;
                margin-left: 12px;
                position: relative;
                width: 93px;
              }
            }
            .follow {
              &::before {
                content: "\e613";
                font-family: "iconfont" !important;
                font-style: 14px;
                margin-right: 5px;
              }
              border-radius: 100px;
              background: #fff;
              border: 1px solid #ccc !important;
              color: #222;
              height: 34px;
              margin-left: 12px;
              width: 102px;
            }
          }
        }
      }
    }
    .chapterList {
      border-radius: 4px;
      margin-top: 10px;
      width: 100%;

      background-color: rgb(255, 255, 255);
      .TopicEpisode {
        box-sizing: border-box;
        width: 100%;
        padding: 20px 10px 0 10px;
        .text-warp {
          align-items: center;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          flex-direction: row;
          .title {
            color: #222;
            font-size: 18px;
            font-weight: 500 !important;
            margin-right: 10px;
          }
          .detail {
            color: #999;
            font-size: 14px;
          }
          .line {
            background: #eee;
            height: 10px;
            margin: 0 5px;
            width: 2px;
          }
        }
        .episode-interval {
          display: flex;
          flex-wrap: wrap;
          margin-top: 20px;
          .interval-item {
            align-items: center;
            background: #fff;
            border: 1px solid #ccc;
            border-radius: 100px;
            box-sizing: border-box;
            color: #222;
            cursor: pointer;
            display: flex;
            font-size: 13px;
            font-weight: 500;
            height: 28px;
            justify-content: center;
            line-height: 16px;
            margin-bottom: 10px;
            margin-right: 10px;
            padding: 6px 16px;
            &.active {
              background: rgba(255, 172, 0, 0.12);
              border: 1px solid #ffac00;
              color: #ffac00;
            }
          }
        }
        .episode-title {
          display: flex;
          flex-wrap: wrap;
          margin-top: 10px;
          .title-item {
            &:hover {
              background-color: rgb(255, 245, 224);
            }
            align-items: center;
            border: 1px solid #eee;
            border-radius: 4px;
            box-sizing: border-box;
            cursor: pointer;
            display: flex;
            height: 50px;
            margin-bottom: 14px;
            margin-right: 12px;
            padding: 17px 10px 17px 12px;
            position: relative;
            text-align: left;
            width: 200px;
            .text {
              color: #222;
              display: inline-block;
              font-size: 13px;
              line-height: 16px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              width: 178px;
            }
          }
        }
      }
    }
    .TopicComment {
      box-sizing: border-box;
      padding: 10px;
      margin-top: 10px;
      width: 100%;
      background-color: #fff;
      height: 650px;
      border-radius: 4px;
      .title {
        font-size: 18px;
        font-weight: 500 !important;
      }
      .infinite-list {
        height: auto;
        overflow-y: scroll;
        background: #fafafa;
        padding: 20px 20px 0;
        height: calc(100% - 50px);
        margin: 0;
        list-style: none;
        .infinite-list-item {
          margin-top: 16px;
          border-bottom: 0.5px solid #eaeaea;
          padding-bottom: 20px;
          .user-info {
            align-items: center;
            display: flex;
            .avatar {
              border-radius: 40px;
              height: 40px;
              width: 40px;
            }
            .center {
              margin-left: 8px;
              .user-name {
                color: #222;
                font-size: 14px;
                font-weight: 500;
                line-height: 17px;
              }
              .date {
                color: #999;
                font-size: 12px;
                line-height: 15px;
                margin-top: 4px;
              }
            }
            .right {
              align-items: center;
              display: flex;
              margin-left: auto;
              .like {
                height: 14px;
                width: 14px;
              }
              .like-count {
                color: #999;
                font-size: 12px;
                line-height: 15px;
                margin-left: 4px;
              }
            }
          }
          .content {
            color: #222;
            font-size: 14px;
            line-height: 17px;
            margin-left: 48px;
            margin-top: 12px;
          }
        }
      }
    }
    .FeaturedComics {
      margin-top: 10px;
      width: 100%;
      background-color: #fff;
      .FeaturedComicsArea {
        padding: 20px;
        margin-top: 32px;
        .homecontent {
          .header {
            .title {
              color: #333;
              font-size: 24px;
              font-weight: 400;
              line-height: 32px;
              margin-right: 30px;
            }
          }
          .content {
            display: flex;
            flex-wrap: wrap;
          }
        }
      }
    }
  }
}
</style>