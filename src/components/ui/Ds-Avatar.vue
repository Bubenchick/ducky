<template>
  <div class="ds-avatar">
    <!-- {{ initials }} -->
    <img v-if="imageUrl" :src="imageUrl" alt="avatar" class="ds-avatar-image" />
  </div>
</template>

<script lang="ts" setup>
// import { computed } from 'vue'

interface IProps {
  // name?: string
  imageUrl?: string
}

const props = defineProps<IProps>()

// const initials = computed(() => {
//   const firstname = props.firstname?.charAt(0)
//   const lastname = props.lastname?.charAt(0)
//   const str = `${firstname ?? ''}${lastname ?? ''}`

//   return str.toUpperCase()
// })

// TODO add colorHash
// const backgroundColor = computed(() => {
//   const str = `${props.firstname ?? ''}${props.lastname ?? ''}`
//   return colorHash.hex(str)
// })
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
