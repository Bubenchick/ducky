<template>
  <div class="team-member-filters">
    <DsInput v-model="searchQuery" class="team-member-filters__input" />

    <DsButton @click="toggleLayout">
      {{ layout === 'grid' ? 'Grid' : 'List' }}
    </DsButton>
  </div>
</template>

<script lang="ts" setup>
import DsButton from './ui/Ds-Button.vue'
import DsInput from './ui/Ds-Input.vue'
import { useTeamStore } from '@/stores/teamStore'
import { storeToRefs } from 'pinia'

const store = useTeamStore()
const { layout, searchQuery } = storeToRefs(store)

function toggleLayout() {
  const newLayout = layout.value === 'grid' ? 'list' : 'grid'
  store.setLayout(newLayout)
}
</script>

<style scoped>
.team-member-filters {
  background-color: #ffffff;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  display: flex;
  gap: 20px;
  justify-content: space-between;
  padding: 20px;
}

.team-member-filters__input {
  max-width: 400px;
}
</style>
