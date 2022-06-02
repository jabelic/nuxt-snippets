<template>
  <div>
    <DefaultHeader />
  </div>
</template>
<script lang="ts">
import {
  defineComponent,
  onMounted,
  onUnmounted,
  onUpdated,
  useFetch,
  watch,
} from '@nuxtjs/composition-api'

export default defineComponent({
  middleware(ctx) {
    console.debug('middleware')
  },
  validate(ctx) {
    // { params, query, store }をよく取る. params, query, store内の何かをvalidateすることが多い？
    console.debug('validate')
    return true // params バリデーションを通過したとき
    return false // Nuxt.js がルートをレンダリングするのを中止して、エラーページを表示させる(404)
  },
  setup() {
    console.debug('created')
    onMounted(() => console.debug('onMounted'))
    onUpdated(() => console.debug('onUpdated'))
    /** fetch */
    const sleep = () => {
      return new Promise((resolve) => {
        setTimeout(() => resolve(() => {}), 1000)
      })
    }
    const { $fetch, $fetchState } = useFetch(async() => {
      console.debug('useFetch')
      await sleep()
    })
    watch(
      () => $fetchState.pending,
      (it) => console.debug('$fetchState.pending: ', it)
    )

    onUnmounted(() => console.debug('onUnmounted'))
  },
  async asyncData() {
    // componentsに値をsetできる
    console.debug('asyncData')
  },
  fetch() {
    // componentsに値をsetできない
    // > fetch メソッドは、ページがレンダリングされる前に、データをストアに入れるために使われます。
    console.debug('fetch')
    // this.$fetch
    // this.$fetchState
  },
})
</script>
<style scoped></style>
