import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { useDebouncedRef } from '../useDebouncedRef'
import { nextTick } from 'vue'

describe('useDebouncedRef', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.clearAllTimers()
    vi.useRealTimers()
  })

  it('возвращаем начальные значения', () => {
    const [state, debounced] = useDebouncedRef('hello')
    expect(state.value).toBe('hello')
    expect(debounced.value).toBe('hello')
  })

  it('обновляем debounced через заданную задержку', async () => {
    const [state, debounced] = useDebouncedRef('start', 300)

    state.value = 'changed'
    await nextTick()
    vi.advanceTimersByTime(300)

    expect(debounced.value).toBe('changed')
  })

  it('сбрасываем таймер при быстром вводе', async () => {
    const [state, debounced] = useDebouncedRef('init', 300)

    state.value = 'a'
    await nextTick()
    vi.advanceTimersByTime(100)

    state.value = 'ab'
    await nextTick()
    vi.advanceTimersByTime(100)

    state.value = 'abc'
    await nextTick()
    vi.advanceTimersByTime(300)

    expect(debounced.value).toBe('abc')
  })

  it('работаем с числовыми значениями', async () => {
    const [state, debounced] = useDebouncedRef(0, 200)

    state.value = 42
    await nextTick()
    vi.advanceTimersByTime(200)

    expect(debounced.value).toBe(42)
  })
})
