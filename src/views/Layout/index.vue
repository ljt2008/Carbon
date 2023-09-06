<script setup>
import LayoutHeader from "./components/LayouHeader.vue";
import LayoutFooter from "./components/LayouFooter.vue";
import LayouStick from "./components/LayouStick.vue";
import LayouAside from "./components/LayouAside.vue";
import { useLayoutStore } from "@/stores/layoutStore";
import { onMounted, onUnmounted } from "vue";
// 导入websock hook
import useWebSocket from "@/utils/websocket";
const layoutStore = useLayoutStore();
// 创建连接
const ws = useWebSocket(handleMessage);
onMounted(() => {
  layoutStore.getNavList();
});
onUnmounted(() => {
  ws.close();
});
// 处理推送的消息提示
function handleMessage(e) {
  const _msgData = JSON.parse(e.data);
  if (_msgData.type === "notice") {
    ElNotification({
      title: "夏季促销充值优惠",
      message: _msgData.parmas.message,
      "show-close": true,
      duration: "10000",
      "on-click": () => {
        window.open(_msgData.parmas.href, "_blank");
      },
    });
  }
}
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