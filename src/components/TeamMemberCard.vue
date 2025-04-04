<template>
  <div class="team-member-card">
    <div class="team-member-card__header">
      <DsAvatar :image-url="member.avatar" class="team-member-card__avatar" />

      <div class="team-member-card__info">
        <h3 class="team-member-card__name">{{ member.name }}</h3>
        <p class="team-member-card__position">{{ member.position }}</p>
        <p class="team-member-card__department">{{ member.department }}</p>
      </div>
    </div>

    <div class="team-member-card__skills">
      <DsBadge v-for="(skill, index) in member.skills" :key="index">
        {{ skill }}
      </DsBadge>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TeamMember } from '@/types/team-members'
import DsAvatar from './ui/Ds-Avatar.vue'
import DsBadge from './ui/Ds-Badge.vue'

defineProps<{
  member: TeamMember
}>()
</script>

<style scoped>
.team-member-card {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 16px;
  background: white;
  width: 100%;
}

.team-member-card__header {
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
}

.team-member-card__info {
  flex: 1;
}

.team-member-card__name {
  color: #333333;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 4px;
}

.team-member-card__position {
  color: #656565;
  font-size: 16px;
  margin-bottom: 2px;
}

.team-member-card__department {
  color: #999999;
  font-size: 14px;
}

.team-member-card__skills {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
</style>
