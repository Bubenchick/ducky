<template>
  <table class="team-member-table">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Position</th>
        <th>Department</th>
        <th>Skills</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="member in members" :key="member.id" @click="handleClick(member)">
        <td><DsAvatar :image-url="member.avatar" class="team-member-table__avatar" /></td>
        <td>
          <div class="team-member-table__name">
            <span>{{ member.name }}</span>
            <span class="team-member-table__email">{{ member.email }}</span>
          </div>
        </td>
        <td>{{ member.position }}</td>
        <td>{{ member.department }}</td>
        <td>
          <div class="team-member-table__skills">
            <DsBadge v-for="(skill, index) in member.skills" :key="index">
              {{ skill }}
            </DsBadge>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import type { TeamMember } from '@/types/team-members'
import DsAvatar from './ui/Ds-Avatar.vue'
import DsBadge from './ui/Ds-Badge.vue'

defineProps({
  members: {
    type: Array as () => TeamMember[],
    required: true,
  },
})

const emit = defineEmits(['member-clicked'])

const handleClick = (member: TeamMember) => {
  emit('member-clicked', member)
}
</script>

<style scoped>
.team-member-table {
  width: 100%;
  border-collapse: collapse;
  overflow-x: auto;
}

.team-member-table tr {
  cursor: pointer;
}

.team-member-table th,
.team-member-table td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #e0e0e0;
}

.team-member-table th {
  background-color: #f9f9f9;
  font-weight: bold;
  color: #333;
}

.team-member-table__avatar {
  width: 60px;
  height: 60px;
}

.team-member-table__name {
  display: flex;
  flex-direction: column;
}

.team-member-table__email {
  color: #999;
  font-size: 14px;
}

.team-member-table__skills {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  max-width: 200px;
}

@media (max-width: 768px) {
  .team-member-table th,
  .team-member-table td {
    font-size: 14px;
    padding: 8px;
  }

  .team-member-table__skills {
    gap: 6px;
    max-width: none;
  }
}
</style>
