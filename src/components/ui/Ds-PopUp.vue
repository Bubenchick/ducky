<!-- Его еще докручивать и докручивать, телепорт, слоты, анимация сейчас убогая, если вдруг вложенные поп-апы то capture -->
<template>
  <transition name="ds-popup">
    <div
      v-if="isVisible"
      class="ds-pop-up__overlay"
      @click.self="closePopup"
      role="dialog"
      aria-modal="true"
    >
      <DsButton class="ds-pop-up__close-button" @click="closePopup">X</DsButton>

      <div class="ds-pop-up__container">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { watch, onUnmounted } from 'vue'
import DsButton from './Ds-Button.vue'

const props = defineProps({
  isVisible: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits(['update:isVisible'])

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && props.isVisible) {
    closePopup()
  }
}

// TODO вообще не нравится, но сейчас не хочется на это тратить время
const lockScroll = () => {
  document.body.style.overflow = 'hidden'
}

const unlockScroll = () => {
  document.body.style.overflow = ''
}

watch(
  () => props.isVisible,
  (val) => {
    if (val) {
      lockScroll()
      document.addEventListener('keydown', handleKeydown)
    } else {
      unlockScroll()
      document.removeEventListener('keydown', handleKeydown)
    }
  },
)

onUnmounted(() => {
  unlockScroll()
  document.removeEventListener('keydown', handleKeydown)
})

const closePopup = () => {
  emit('update:isVisible', false)
}
</script>

<style scoped>
.ds-popup-enter-active,
.ds-popup-leave-active {
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}

.ds-popup-enter-from,
.ds-popup-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

.ds-pop-up__overlay {
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1000;
}

.ds-pop-up__container {
  max-height: 80%;
  max-width: 500px;
  overflow-y: auto;
  position: relative;
}

.ds-pop-up__close-button {
  position: absolute;
  right: 10px;
  top: 10px;
}

@media (max-width: 768px) {
  .ds-pop-up__container {
    width: 90%;
  }
}
</style>
