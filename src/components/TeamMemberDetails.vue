<!-- Похоже на этом компоненте кончились силы 😬, это вообще ужас, лучше не смотреть -->
<template>
  <div class="team-member-details">
    <h2 class="team-member-details__title">Team Member Details</h2>

    <div class="team-member-details__container">
      <div class="team-member-details__header">
        <DsAvatar :image-url="member.avatar" class="team-member-details__avatar" />

        <div class="team-member-details__name-container">
          <h3 class="team-member-details__name">{{ member.name }}</h3>

          <p class="team-member-details__position">{{ member.position }}</p>

          <p class="team-member-details__department">{{ member.department }}</p>
        </div>
      </div>

      <div class="team-member-details__email">
        <span>Email: </span>

        <a :href="'mailto:' + member.email" class="team-member-details__email-link">{{
          member.email
        }}</a>
      </div>

      <div class="team-member-details__bio">
        <span>Bio:</span>

        <p class="team-member-details__bio-text">{{ member.bio }}</p>
      </div>

      <div class="team-member-details__skills">
        <span>Skills:</span>

        <div class="team-member-details__skills-list">
          <DsBadge v-for="(skill, index) in member.skills" :key="index">{{ skill }}</DsBadge>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import DsAvatar from './ui/Ds-Avatar.vue'
import DsBadge from './ui/Ds-Badge.vue'
import type { TeamMember } from '@/types/team-members'

defineProps({
  member: {
    type: Object as () => TeamMember,
    required: true,
  },
})
</script>

<style scoped>
.team-member-details {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  max-width: 500px;
}

.team-member-details__title {
  background-color: #f5f5f5;
  border-radius: 8px;
  font-size: 22px;
  font-weight: bold;
  padding: 20px 40px;
}

.team-member-details__container {
  padding: 12px 40px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.team-member-details__header {
  align-items: center;
  display: flex;
}

.team-member-details__avatar {
  border-radius: 50%;
  height: 100px;
  margin-right: 20px;
  width: 100px;
}

.team-member-details__name-container {
  display: flex;
  flex-direction: column;
}

.team-member-details__name {
  color: #333333;
  font-size: 20px;
  font-weight: 700;
}

.team-member-details__position {
  color: #656565;
  font-size: 18px;
}

.team-member-details__department {
  color: #999999;
  font-size: 16px;
}

.team-member-details__email span {
  color: #656565;
  font-weight: 700;
}

.team-member-details__email-link {
  color: #656565;
  text-decoration: none;
}

.team-member-details__bio span,
.team-member-details__skills span {
  font-weight: 700;
}

.team-member-details__bio-text {
  border-top: 1px solid #e0e0e0;
  color: #656565;
}

.team-member-details__skills-list {
  border-top: 1px solid #e0e0e0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding-top: 8px;
}

@media (max-width: 768px) {
  .team-member-details__title {
    padding: 12px 20px;
  }

  .team-member-details__container {
    padding: 12px 20px;
  }

  .team-member-details__avatar {
    height: 80px;
    margin-right: 12px;
    width: 80px;
  }

  .team-member-details__name {
    font-size: 18px;
  }

  .team-member-details__position {
    font-size: 16px;
  }

  .team-member-details__department {
    font-size: 14px;
  }

  .team-member-details__skills-list {
    gap: 6px;
  }
}
</style>
