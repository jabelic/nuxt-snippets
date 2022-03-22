<template>
  <v-app dark>
    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent, provide } from '@nuxtjs/composition-api'
import { useCounter, key } from '~/module/stateProvider'
export default defineComponent({
  // middleware: ['sample'],// 内侍はnuxt.config.jsに登録
  setup() {
    provide(key, useCounter())
  },
})
</script>
