<template>
  <button class="ds-button">
    <slot></slot>
  </button>
</template>

<script lang="ts" setup></script>

<style scoped>
.ds-button {
  appearance: none;
  background-color: #ffffff;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  color: #666666;
  cursor: pointer;
  font-size: 20px;
  font-weight: 500;
  outline: none;
  padding: 12px 18px;
  transition: all 0.3s ease-in-out;
}

.ds-button:hover {
  background-color: #4192de;
  border: 1px solid #4192de;
  color: #fff;
}
</style>
