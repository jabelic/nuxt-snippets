<template>
  <div id="index" class="">
    <DefaultHeader />
    <v-container>
      <h1>Nuxt Snippets</h1>

      <!-- https://vuetifyjs.com/ja/styles/flex/ -->
      <div class="d-flex flex-column mb-6 justify-center">
        <v-btn to="/parts/inputPage" color="pink" width="50%"
          >input parts</v-btn
        >
      </div>
    </v-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
export default defineComponent({
  setup() {
    return {}
  },
})
</script>
<style scoped>
h1 {
  padding-bottom: 0.5em;
  border-bottom: 3px double #ccc;
  margin: 1em 0;
}
</style>
