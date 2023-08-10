<script setup>
import Carbonswiper from "@/components/carbonbanner/index.vue";
import HomeContributeArea from "./components/HomeContributeArea.vue";
import HomeDailyUpdate from "./components/HomeDailyUpdate.vue";
import HomeDiffuse from "./components/HomeDiffuse.vue";
import MayLike from "./components/MayLike.vue";
import HomeCategories from "./components/HomeCategories.vue";
import HomeRecommend from "./components/HomeRecommend.vue";
import Homefixad from "./components/Homefixad.vue";
</script>

<template>
  <Homefixad />
  <div class="Home cls">
    <Carbonswiper />
    <div class="container">
      <HomeContributeArea />
      <MayLike />
      <HomeDailyUpdate />
      <HomeDiffuse />
    </div>
    <HomeCategories />
    <div class="container">
      <HomeRecommend />
    </div>
  </div>
</template> 
<style lang="scss">
.Home {
  background-color: var(--bg2);
}
</style>