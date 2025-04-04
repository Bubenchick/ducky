import { computed, ref, watch } from 'vue'
import { defineStore } from 'pinia'
import teamMembers from '@/assets/mock/team-members.json'
import type { TeamMember, TeamMembersLayouts } from '@/types/team-members'
import { debounce } from '@/utils/debounce'

export const useTeamStore = defineStore('team', () => {
  const members = ref<TeamMember[]>(teamMembers.teamMembers)
  const searchQuery = ref('')
  const debouncedQuery = ref(searchQuery.value)
  const storedLayout = localStorage.getItem('layout')
  const layout = ref<TeamMembersLayouts>(
    storedLayout === 'grid' || storedLayout === 'list' ? storedLayout : 'grid',
  )

  function setLayout(value: TeamMembersLayouts) {
    layout.value = value
    localStorage.setItem('layout', value)
  }

  watch(
    searchQuery,
    debounce((val) => {
      if (typeof val === 'string') {
        debouncedQuery.value = val
      }
    }, 300),
    { immediate: true },
  )

  const filteredMembers = computed(() => {
    if (!debouncedQuery.value.trim()) return members.value

    const query = debouncedQuery.value.toLowerCase()
    return members.value.filter((member) =>
      [member.name, member.email, member.position, member.department].some((field) =>
        field?.toLowerCase().includes(query),
      ),
    )
  })

  return {
    members,
    layout,
    setLayout,
    searchQuery,
    filteredMembers,
  }
})
