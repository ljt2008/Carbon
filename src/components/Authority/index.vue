<script setup>
import { useUserStore } from "@/stores/userStore";
const userStore = useUserStore();
import { computed } from "vue";
const props = defineProps({
  permission: {
    type: [String, Array],
  },
});
const showSlot = computed(() => {
  return (
    userStore.userInfo.permissions &&
    userStore.userInfo.permissions.includes(props.permission)
  );
});
</script>
  
<template>
  <slot
    v-if="showSlot"
    :userPermisstions="userStore.userInfo.permissions"
  ></slot>
</template>
  
  