import { ref, watch } from 'vue'

export function useDebouncedRef<T>(initial: T, delay = 300) {
  const state = ref(initial)
  const debounced = ref(initial)
  let timeout: ReturnType<typeof setTimeout>

  watch(
    state,
    (val) => {
      clearTimeout(timeout)
      timeout = setTimeout(() => {
        debounced.value = val
      }, delay)
    },
    { flush: 'post' },
  )

  return [state, debounced] as const
}
