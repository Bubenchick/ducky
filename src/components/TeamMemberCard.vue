<!-- TODO в TeamMemberDetails можно переиспользовать этот компонент если поработать со слотами, но на это нужно время -->
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

defineProps({
  member: {
    type: Object as () => TeamMember,
    required: true,
  },
})
</script>

<style scoped>
.team-member-card {
  background: white;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  padding: 16px;
  width: 100%;
  cursor: pointer;
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
}

.team-member-card__position {
  color: #656565;
  font-size: 18px;
}

.team-member-card__department {
  color: #999999;
  font-size: 16px;
}

.team-member-card__skills {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

@media (max-width: 768px) {
  .team-member-card__header {
    gap: 12px;
  }

  .team-member-card__name {
    font-size: 18px;
  }

  .team-member-card__position {
    font-size: 16px;
  }

  .team-member-card__department {
    font-size: 14px;
  }

  .team-member-card__avatar {
    height: 60px;
    width: 60px;
  }

  .team-member-card__skills {
    gap: 6px;
    padding-left: 60px; /* 60 по тексту, а не 72, потому что дырка слева совсем печальная */
  }
}
</style>
