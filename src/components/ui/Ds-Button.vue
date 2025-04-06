<template>
  <button
    :class="[
      'ds-button',
      `ds-button--${props.size}`,
      `ds-button--${props.kind}`,
      { 'ds-button--block': props.block },
    ]"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
interface IProps {
  size?: 'sm' | 'md' | 'lg'
  kind?: 'primary' | 'ghost'
  block?: boolean
}

const props = withDefaults(defineProps<IProps>(), {
  size: 'md',
  kind: 'primary',
  block: false,
})
</script>

<style scoped>
.ds-button {
  appearance: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 500;
  outline: none;
  padding: 0 12px;
  transition: all 0.3s ease-in-out;
}

.ds-button--block {
  width: 100%;
}

.ds-button--primary {
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  color: #666666;
}

.ds-button--primary:hover {
  background-color: #4192de;
  border: 1px solid #4192de;
  color: #ffffff;
}

.ds-button--ghost {
  background-color: #ffffff;
  border: 1px solid #ffffff;
  color: #666666;
}

.ds-button--ghost:hover {
  background-color: #e0e0e0;
  border: 1px solid #e0e0e0;
}

.ds-button--sm {
  font-size: 14px;
  height: 32px;
  min-width: 32px;
}

.ds-button--md {
  font-size: 16px;
  min-width: 60px;
  height: 44px;
}

.ds-button--lg {
  font-size: 18px;
  height: 48px;
  min-width: 80px;
}
</style>
