<template>
  <div>
    <DefaultHeader />
    <v-container class="">
      <h1>Nuxt Snippets - Provide/Inject</h1>
      <div class="d-flex my-6 justify-center">
        <v-btn to="/" color="pink" width="50%"> return index </v-btn>
      </div>
      <div class="contents">
        <div class="d-flex my-4 justify-center">
          <CounterForPI
            :state="state"
            @increment="increment"
            @decrement="decrement"
          />
        </div>
        <div class="d-flex my-4 justify-center">
          {{ state }}
        </div>
      </div>
    </v-container>
  </div>
</template>
<script lang="ts">
import { defineComponent, inject } from '@nuxtjs/composition-api'
import { CounterStore, key } from '~/module/stateProvider'
import CounterForPI from '~/components/CounterForPI.vue'

export default defineComponent({
  components: { CounterForPI },
  setup() {
    const { state, increment, decrement } = inject(key) as CounterStore
    return { state, increment, decrement }
  },
})
</script>
<style scoped>
.contents {
  background-color: rgba(255, 255, 255, 0.1);
}
h1 {
  padding: 0.25em 0 0.5em 0.75em;
  border-left: 6px solid #ccc;
  border-bottom: 1px solid #ccc;
  margin: 10px 0;
}
</style>
