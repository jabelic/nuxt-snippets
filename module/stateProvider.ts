import { InjectionKey, reactive } from '@nuxtjs/composition-api'

/**
 * provide/injectは必ずprovide側が親、inject側が子のコンポーネントでなければならない
 * 例えば layout/default.vue(provide)->page(inject)はできるし、
 * layout/default.vue(provide)->template/child.vue(inject)もできる
 * しかし, page/index.vue(provide)->page/timeline/header.vue(inject)はできない。
 */
export const useCounter = () => {
  // 状態
  const state = reactive<{ count: number }>({ count: 0 })
  const increment = () => state.count++
  const decrement = () => state.count--
  return {
    state,
    increment,
    decrement,
  }
}
export type CounterStore = ReturnType<typeof useCounter>
export const key: InjectionKey<CounterStore> = Symbol('CounterStore')
