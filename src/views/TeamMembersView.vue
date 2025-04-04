<template>
  <div class="team-members-view">
    <TeamMemberFilters @layout-changed="layout = $event" />

    <div :class="['team-members-view__cards', `team-members-view__cards--${layout}`]">
      <TeamMemberCard v-for="member in filteredMembers" :key="member.id" :member="member" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTeamStore } from '@/stores/teamStore'
import TeamMemberCard from '@/components/TeamMemberCard.vue'
import TeamMemberFilters from '@/components/TeamMemberFilters.vue'
import { storeToRefs } from 'pinia'

const store = useTeamStore()
const { layout, filteredMembers } = storeToRefs(store)
</script>

<style scoped>
.team-members-view {
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
}

.team-members-view__cards {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.team-members-view__cards--grid {
  flex-direction: row;
}

.team-members-view__cards--grid .team-member-card {
  width: calc(50% - 10px);
}

.team-members-view__cards--list {
  flex-direction: column;
}
</style>
