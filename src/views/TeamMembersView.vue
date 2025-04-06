<template>
  <div class="team-members-view">
    <TeamMemberFilters />

    <div v-if="layout === 'list'" class="team-members-view__list">
      <TeamMemberTable :members="filteredMembers" @member-clicked="showMemberDetails" />
    </div>

    <div v-else class="team-members-view__grid">
      <TeamMemberCard
        v-for="member in filteredMembers"
        :key="member.id"
        :member="member"
        class="team-members-view__card"
        @click="showMemberDetails(member)"
      />
    </div>

    <DsPopUp :isVisible="isPopupVisible" @update:isVisible="isPopupVisible = $event">
      <TeamMemberDetails v-if="selectedMember" :member="selectedMember" />
    </DsPopUp>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useTeamStore } from '@/stores/teamStore'
import DsPopUp from '@/components/ui/Ds-PopUp.vue'
import TeamMemberCard from '@/components/TeamMemberCard.vue'
import TeamMemberDetails from '@/components/TeamMemberDetails.vue'
import TeamMemberFilters from '@/components/TeamMemberFilters.vue'
import TeamMemberTable from '@/components/TeamMemberTable.vue'
import type { TeamMember } from '@/types/team-members'

const store = useTeamStore()
const { layout, filteredMembers } = storeToRefs(store)

const isPopupVisible = ref(false)
const selectedMember = ref<TeamMember>()

const showMemberDetails = (member: TeamMember) => {
  selectedMember.value = member
  isPopupVisible.value = true
}
</script>

<style scoped>
.team-members-view {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  background-color: #f5f5f5;
}

.team-members-view__list {
  overflow-x: auto;
}

.team-members-view__grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.team-members-view__card {
  width: calc(50% - 10px);
}

@media (max-width: 768px) {
  .team-members-view__card {
    width: 100%;
  }
}
</style>
