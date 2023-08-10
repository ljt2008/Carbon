<script setup>
import LayoutHeader from "./components/LayouHeader.vue";
import LayoutFooter from "./components/LayouFooter.vue";
import LayouStick from "./components/LayouStick.vue";
import LayouAside from "./components/LayouAside.vue";
</script>

<template>
  <LayouStick />
  <LayoutHeader />
  <RouterView />
  <LayoutFooter />
  <LayouAside />
</template> 
<style lang="scss">
</style>