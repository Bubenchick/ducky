import teamMembers from '@/assets/mock/team-members.json'
import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'
import { useDebouncedRef } from '@/utils/useDebouncedRef'
import type { TeamMember, TeamMembersLayouts } from '@/types/team-members'
import { useFilters } from '@/utils/useFilters'

export const useTeamStore = defineStore('team', () => {
  const members = ref<TeamMember[]>(teamMembers.teamMembers)
  const selectedDepartment = ref('')
  const [searchQuery, debouncedQuery] = useDebouncedRef('', 300)
  const layout = useLocalStorage<TeamMembersLayouts>('layout', 'grid')

  // Выносить если переиспользуем
  const searchFilter = (member: TeamMember) => {
    const query = debouncedQuery.value.toLowerCase().trim()
    return (
      !query ||
      [member.name, member.email, member.position, member.department, ...member.skills].some(
        (field) => field?.toLowerCase().includes(query),
      )
    )
  }

  // Выносить если переиспользуем
  const departmentFilter = (member: TeamMember) => {
    const dep = selectedDepartment.value
    return !dep || member.department === dep
  }

  // Можем добавить новые если надо
  const filteredMembers = useFilters(members, [searchFilter, departmentFilter])

  function setDepartment(dept: string) {
    selectedDepartment.value = dept
  }

  return {
    members,
    selectedDepartment,
    searchQuery,
    layout,
    filteredMembers,
    setDepartment,
  }
})
