<template>
  <div class="ds-input">
    <input v-model="model" class="ds-input__input" type="text" :placeholder />

    <DsButton v-if="model" class="ds-input__clear" size="sm" kind="ghost" @click="model = ''">
      ✕
    </DsButton>
  </div>
</template>

<script lang="ts" setup>
import DsButton from './Ds-Button.vue'

const model = defineModel<string>()

withDefaults(defineProps<{ placeholder: string }>(), { placeholder: '' })
</script>

<style scoped>
.ds-input {
  align-items: center;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  display: flex;
  font-size: 18px;
  gap: 12px;
  height: 44px;
  padding: 0 12px;
  width: 100%;
}

.ds-input:focus-within {
  border-color: #007bff;
}

.ds-input__input {
  border: none;
  flex: 1;
  outline: none;
}

.ds-input__clear {
  flex-shrink: 0;
}
</style>
