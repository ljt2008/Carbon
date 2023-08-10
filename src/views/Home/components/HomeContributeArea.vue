<script setup>
import Carbonlist from "./Carbonlist.vue";
import { ref, onMounted } from "vue";
const list = ref([]);
onMounted(() => {
  setTimeout(() => {
    list.value = [
      {
        id: 1,
        imgsrc:
          "https://tn1-f2.kkmh.com/image/220926/Sxis8cdUn.webp-t.w207.webp.h",
        author: "囍千千（原著）+五彩石漫画社",
        laud: "99万+",
        title: "快穿女配冷静点",
        fenlei: "女生1",
      },
      {
        id: 2,
        imgsrc:
          "https://tn1-f2.kkmh.com/image/220926/Sxis8cdUn.webp-t.w207.webp.h",
        author: "囍千千（原著）+五彩石漫画社",
        laud: "99万+",
        title: "快穿女配冷静点",
        fenlei: "女生2",
      },
      {
        id: 3,
        imgsrc:
          "https://tn1-f2.kkmh.com/image/220926/Sxis8cdUn.webp-t.w207.webp.h",
        author: "囍千千（原著）+五彩石漫画社",
        laud: "99万+",
        title: "快穿女配冷静点",
        fenlei: "女生3",
      },
      {
        id: 4,
        imgsrc:
          "https://tn1-f2.kkmh.com/image/220926/Sxis8cdUn.webp-t.w207.webp.h",
        author: "囍千千（原著）+五彩石漫画社",
        laud: "99万+",
        title: "快穿女配冷静点",
        fenlei: "女生4",
      },
      {
        id: 5,
        imgsrc:
          "https://tn1-f2.kkmh.com/image/220926/Sxis8cdUn.webp-t.w207.webp.h",
        author: "囍千千（原著）+五彩石漫画社",
        laud: "99万+",
        title: "快穿女配冷静点",
        fenlei: "女生5",
      },
      {
        id: 6,
        imgsrc:
          "https://tn1-f2.kkmh.com/image/220926/Sxis8cdUn.webp-t.w207.webp.h",
        author: "囍千千（原著）+五彩石漫画社",
        laud: "99万+",
        title: "快穿女配冷静点",
        fenlei: "女生6",
      },
    ];
  }, 1000);
});
</script>

<template>
  <div class="HomeContributeArea">
    <template v-if="list.length !== 0">
      <div class="homecontent cls">
        <div class="header cls">
          <h3 class="title fl">原创投稿</h3>
          <div class="tab fl">
            <span class="tab-item">编辑推荐</span
            ><span class="tab-item">最新上架</span>
          </div>
          <a class="more fr"> 更多 </a>
        </div>
        <Carbonlist :itemlist="list" :style="0" :colomns="6" :type="0" />
      </div>
    </template>
    <template v-else>
      <n-space vertical>
        <n-skeleton height="40px" width="25%" />
        <n-skeleton height="270px" width="100%" :sharp="false" />
      </n-space>
    </template>
  </div>
</template> 
<style lang="scss" scoped>
.HomeContributeArea {
  margin-top: 32px;
  .homecontent {
    .header {
      .title {
        color: var(--text-color);
        font-size: 24px;
        font-weight: 400;
        line-height: 32px;
        margin-right: 30px;
      }
      .tab {
        margin-top: 6px;
        .tab-item {
          color: var(--text-color);
          cursor: pointer;
          display: inline-block;
          font-size: 16px;
          line-height: 22px;
          margin-right: 30px;
        }
        .tab-item.active {
          color: #f5a623;
        }
      }
      .more {
        border: 1px solid #edeff2;
        border-radius: 2px;
        color: var(--text-color);
        cursor: pointer;
        display: inline-block;
        font-size: 16px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        width: 59px;
      }
    }
    .content {
      display: flex;
      flex-wrap: wrap;
    }
  }
}
</style>