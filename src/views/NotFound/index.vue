<script setup>
</script>

<template>
  <div class="container">
    <Authority permission="admin">
      <template #default="{ userPermisstions }">
        <button :disabled="userPermisstions" type="primary">新增用户</button>
      </template>
    </Authority>
  </div>
</template> 
<style lang="scss">
.notFind {
}
</style>