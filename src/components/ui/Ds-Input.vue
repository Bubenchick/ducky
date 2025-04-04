<template>
  <input v-model="model" class="ds-input" type="text" placeholder="Search by name or skill..." />
</template>

<script lang="ts" setup>
import { defineModel } from 'vue'

const model = defineModel<string>()
</script>

<style scoped>
.ds-input {
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  font-size: 16px;
  outline: none;
  padding: 12px 18px;
  transition: border-color 0.3s ease-in-out;
  width: 100%;
}

.ds-input:focus {
  border-color: #007bff;
}
</style>
