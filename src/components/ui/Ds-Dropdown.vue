<template>
  <div class="ds-dropdown" ref="dropdownRef">
    <DsButton class="ds-dropdown__trigger" kind="ghost" size="md" block @click="toggle">
      <span>{{ selectedLabel }}</span>

      <div class="ds-dropdown__actions">
        <DsButton
          v-if="props.modelValue"
          class="ds-dropdown__clear"
          size="sm"
          kind="ghost"
          @click.stop="clear"
        >
          ✕
        </DsButton>

        <img
          src="@/assets/icons/arrow.svg"
          alt="arrow"
          :class="['ds-dropdown__icon', { 'ds-dropdown__icon--rotated': isOpen }]"
        />
      </div>
    </DsButton>

    <div v-if="isOpen" class="ds-dropdown__options">
      <div
        v-for="option in options"
        :key="option.value"
        class="ds-dropdown__option"
        @click="select(option)"
      >
        {{ option.label }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { onClickOutside } from '@vueuse/core'
import DsButton from './Ds-Button.vue'

export interface Option {
  label: string
  value: string
}

interface IProps {
  modelValue: string
  options: Option[]
  placeholder?: string
}

const props = withDefaults(defineProps<IProps>(), {
  placeholder: '',
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const isOpen = ref(false)
const dropdownRef = ref<HTMLElement>()

const toggle = () => (isOpen.value = !isOpen.value)

const select = (option: Option) => {
  emit('update:modelValue', option.value)
  isOpen.value = false
}

const clear = () => {
  emit('update:modelValue', '')
  isOpen.value = false
}

const selectedLabel = computed(() => {
  return props.options.find((opt) => opt.value === props.modelValue)?.label || props.placeholder
})

onClickOutside(dropdownRef, () => {
  isOpen.value = false
})
</script>

<style scoped>
.ds-dropdown {
  height: 44px;
  position: relative;
  width: 100%;
}

.ds-dropdown__trigger {
  align-items: center;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  cursor: pointer;
  display: flex;
  font-size: 16px;
  justify-content: space-between;
  padding: 12px 18px;
  width: 100%;
}

.ds-dropdown__actions {
  align-items: center;
  display: flex;
  gap: 8px;
}

.ds-dropdown__clear {
  background: transparent;
  border: none;
  color: #999;
  cursor: pointer;
  font-size: 14px;
  line-height: 1;
  padding: 0;
}

.ds-dropdown__icon {
  height: 12px;
  transition: transform 0.3s ease-in-out;
  width: 12px;
}

.ds-dropdown__icon--rotated {
  transform: rotate(180deg);
}

.ds-dropdown__options {
  background: #ffffff;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  left: 0;
  max-height: 300px;
  overflow-y: auto;
  position: absolute;
  right: 0;
  top: calc(100% + 8px);
  z-index: 10;
}

.ds-dropdown__option {
  cursor: pointer;
  padding: 12px 18px;
  transition: background-color 0.2s ease-in-out;
}

.ds-dropdown__option:hover {
  background-color: #f0f0f0;
}
</style>
