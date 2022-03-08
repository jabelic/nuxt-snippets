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
  setup() {
    provide(key, useCounter())
  },
})
</script>
