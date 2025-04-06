import { describe, it, expect } from 'vitest'
import { ref, nextTick } from 'vue'
import { useFilters } from '../useFilters'

describe('useFilters', () => {
  it('возвращаем исходный список без фильтров', () => {
    const list = ref([1, 2, 3])
    const filtered = useFilters(list)
    expect(filtered.value).toEqual([1, 2, 3])
  })

  it('применяем один фильтр', () => {
    const list = ref([1, 2, 3, 4])
    const filters = [(item: number) => item > 2]
    const filtered = useFilters(list, filters)
    expect(filtered.value).toEqual([3, 4])
  })

  it('применяем несколько фильтров', () => {
    const list = ref([1, 2, 3, 4])
    const filters = [(item: number) => item % 2 === 0, (item: number) => item < 4]
    const filtered = useFilters(list, filters)
    expect(filtered.value).toEqual([2])
  })

  it('возвращаем пустой массив при отсутствии совпадений', () => {
    const list = ref([1, 2, 3])
    const filters = [(item: number) => item > 10]
    const filtered = useFilters(list, filters)
    expect(filtered.value).toEqual([])
  })

  it('реагируем на изменения в списке', async () => {
    const list = ref([1, 2])
    const filters = [(item: number) => item % 2 === 0]
    const filtered = useFilters(list, filters)
    expect(filtered.value).toEqual([2])

    list.value = [3, 4]
    await nextTick()
    expect(filtered.value).toEqual([4])
  })
})
