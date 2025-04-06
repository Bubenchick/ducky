import { describe, it, expect, beforeEach, vi } from 'vitest'
import { useTeamStore } from '../teamStore'
import { createTestingPinia } from '@pinia/testing'

const MOCK_MEMBERS = [
  {
    id: 1,
    name: 'Alice',
    email: 'alice@example.com',
    position: 'Engineer',
    department: 'Engineering',
    skills: ['Vue', 'TypeScript'],
  },
  {
    id: 2,
    name: 'Bob',
    email: 'bob@example.com',
    position: 'Marketer',
    department: 'Marketing',
    skills: ['SEO', 'Ads'],
  },
  {
    id: 3,
    name: 'Charlie',
    email: 'charlie@example.com',
    position: 'Engineer',
    department: 'Engineering',
    skills: ['React', 'Node.js'],
  },
]

const SEARCH_DELAY = 400

describe('useTeamStore', () => {
  let store: ReturnType<typeof useTeamStore>

  beforeEach(() => {
    const pinia = createTestingPinia({
      initialState: {
        team: {
          members: MOCK_MEMBERS,
          selectedDepartment: '',
          searchQuery: '',
          layout: 'grid',
        },
      },
      createSpy: vi.fn,
    })

    store = useTeamStore(pinia)
  })

  it('фильтруем по имени', async () => {
    store.searchQuery = 'ALICE'

    await new Promise((resolve) => setTimeout(resolve, SEARCH_DELAY))
    expect(store.filteredMembers).toHaveLength(1)
    expect(store.filteredMembers[0].name).toBe('Alice')
  })

  it('фильтруем по навыку', async () => {
    store.searchQuery = 'seo'

    await new Promise((resolve) => setTimeout(resolve, SEARCH_DELAY))
    expect(store.filteredMembers).toHaveLength(1)
    expect(store.filteredMembers[0].name).toBe('Bob')
  })

  it('фильтруем по отделу', async () => {
    store.selectedDepartment = 'Engineering'

    expect(store.filteredMembers.length).toBe(2)
    expect(store.filteredMembers.every((member) => member.department === 'Engineering')).toBe(true)
  })

  it('смена департамента обновляет результат', () => {
    store.selectedDepartment = 'Engineering'
    expect(store.filteredMembers).toHaveLength(2)

    store.selectedDepartment = 'Marketing'
    expect(store.filteredMembers).toHaveLength(1)
    expect(store.filteredMembers[0].department).toBe('Marketing')
  })

  it('комбинируем фильтры: имя + отдел', async () => {
    store.searchQuery = 'Alice'
    store.selectedDepartment = 'Engineering'

    await new Promise((resolve) => setTimeout(resolve, SEARCH_DELAY))

    expect(store.filteredMembers.length).toBe(1)
    expect(store.filteredMembers[0].name).toBe('Alice')
    expect(store.filteredMembers[0].department).toBe('Engineering')
  })

  it('сбрасываем фильтры и возвращаем всех сотрудников', async () => {
    store.searchQuery = 'Alice'
    store.selectedDepartment = 'Engineering'

    await new Promise((resolve) => setTimeout(resolve, SEARCH_DELAY))
    expect(store.filteredMembers.length).toBe(1) // Alice

    store.searchQuery = ''
    store.selectedDepartment = ''

    await new Promise((resolve) => setTimeout(resolve, SEARCH_DELAY))
    expect(store.filteredMembers.length).toBe(MOCK_MEMBERS.length)
    expect(store.filteredMembers).toEqual(MOCK_MEMBERS)
  })

  it('возвращаем пустой список если не находим совпадений', async () => {
    store.searchQuery = 'unkown'

    await new Promise((resolve) => setTimeout(resolve, SEARCH_DELAY))
    expect(store.filteredMembers).toHaveLength(0)
  })
})
