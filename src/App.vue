<template>
  <header><h1 class="app-title">Team Member Directory</h1></header>

  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<style scoped>
header {
  border: 1px solid #e0e0e0;
}

.app-title {
  color: #333333;
  font-size: 32px;
  padding: 20px 40px;
}
</style>
