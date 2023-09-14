<script setup>
import Carbonlist from "./Carbonlist.vue";
import { ref, onMounted } from "vue";
import { getNewsAPI, geteditorsChoiceAPI } from "@/apis/home";
const list = ref([]);
const getNews = async () => {
  const res = await getNewsAPI();
  list.value = res.data;
  choose.value = 2;
};
const geteditorsChoice = async () => {
  const res = await geteditorsChoiceAPI();
  list.value = res.data;
  choose.value = 1;
};
onMounted(() => {
  geteditorsChoice();
});
const choose = ref(1);
import { inject } from "vue";
const name = inject("name");
console.log(name); // 沐华
</script>

<template>
  <div class="HomeContributeArea">
    <template v-if="list.length !== 0">
      <div class="homecontent cls">
        <div class="header cls">
          <h3 class="title fl">原创投稿</h3>
          <div class="tab fl">
            <span
              class="tab-item"
              :class="{ active: choose === 1 }"
              @click="geteditorsChoice()"
              >编辑推荐</span
            >
            <span
              class="tab-item"
              :class="{ active: choose === 2 }"
              @click="getNews()"
              >最新上架</span
            >
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
          &.active {
            color: #f5a623;
          }
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