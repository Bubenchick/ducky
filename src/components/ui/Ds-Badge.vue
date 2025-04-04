<template>
  <div class="ds-badge">
    <slot></slot>
  </div>
</template>

<style scoped>
.ds-badge {
  align-items: center;
  background-color: #f0f7ff;
  border-radius: 9999px;
  border: 1px solid #c6e1fd;
  color: #4192de;
  display: inline-flex;
  font-size: 0.875rem;
  font-weight: 500;
  justify-content: center;
  max-width: 100%;
  overflow: hidden;
  padding: 0.25rem 0.75rem;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
