<template>
  <div class="team-member-filters">
    <DsInput
      v-model="searchQuery"
      class="team-member-filters__input"
      placeholder="Search by name or skill..."
    />

    <DsDropdown
      v-model="selectedDepartment"
      :options="departmentOptions"
      placeholder="Department"
      class="team-member-filters__dropdown"
    />

    <!-- TODO заменить на свитчер, кнопка не очень подходит -->
    <DsButton @click="toggleLayout" class="team-member-filters__button">
      {{ layout === 'grid' ? 'Grid' : 'List' }}
    </DsButton>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useTeamStore } from '@/stores/teamStore'
import DsButton from './ui/Ds-Button.vue'
import DsInput from './ui/Ds-Input.vue'
import DsDropdown from './ui/Ds-Dropdown.vue'

const store = useTeamStore()
const { members, layout, searchQuery, selectedDepartment } = storeToRefs(store)

const toggleLayout = () => (layout.value = layout.value === 'grid' ? 'list' : 'grid')

const departmentOptions = computed(() => {
  return [...new Set(members.value.map((member) => member.department))]
    .filter(Boolean)
    .map((dep) => ({ label: dep, value: dep }))
})
</script>

<style scoped>
.team-member-filters {
  background-color: #ffffff;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  display: grid;
  gap: 10px;
  grid-template-columns: minmax(0, 300px) minmax(0, 300px) 1fr;
  padding: 20px;
}

.team-member-filters__button {
  justify-self: end;
}

@media (max-width: 768px) {
  .team-member-filters {
    grid-template-columns: 1fr;
  }

  .team-member-filters__button {
    width: 100%;
  }
}
</style>
