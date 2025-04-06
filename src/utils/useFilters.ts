import { computed, type ComputedRef, type Ref } from 'vue'

type FilterFn<T> = (item: T) => boolean

export function useFilters<T>(list: Ref<T[]>, filters: FilterFn<T>[] = []): ComputedRef<T[]> {
  return computed(() => {
    let result = list.value

    result = result.filter((item) => filters.every((filter) => filter(item)))

    return result
  })
}
