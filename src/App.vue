<script setup>
import VirtualList from "@/components/virtuallist/index.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <RouterView />
</template>

<style lang="scss">
html,
body {
  scroll-behavior: smooth;
}
</style>