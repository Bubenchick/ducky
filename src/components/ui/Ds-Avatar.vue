<!-- TODO add colorHash and initials fallback -->
<template>
  <div class="ds-avatar">
    <img v-if="imageUrl" :src="imageUrl" alt="avatar" class="ds-avatar-image" />
  </div>
</template>

<script lang="ts" setup>
defineProps({ imageUrl: { type: String, required: true } })
</script>

<style scoped>
.ds-avatar {
  align-items: center;
  background-color: #e0e0e0;
  border-radius: 50%;
  display: inline-flex;
  height: 100px;
  justify-content: center;
  overflow: hidden;
  width: 100px;
}

.ds-avatar-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
