<template>
  <div id="index" class="">
    <DefaultHeader />
    <v-container>
      <h1>Nuxt Snippets</h1>
      <!-- https://vuetifyjs.com/ja/styles/flex/ -->
      <div class="d-flex my-6 justify-center">
        <v-btn to="/parts/inputPage" color="pink" width="50%"
          >input parts</v-btn
        >
      </div>
      <div class="d-flex mb-6 justify-center">
        <v-btn to="/parts/vtreePage" color="pink" width="50%"
          >v-treeview parts</v-btn
        >
      </div>
      <div class="d-flex mb-6 justify-center">
        <v-btn to="/parts/injected" color="pink" width="50%"
          >Provide/Inject parts</v-btn
        >
      </div>
      <div class="d-flex mb-6 justify-center">
        <v-btn to="/parts/Lifecycle" color="pink" width="50%">LifeCycle</v-btn>
      </div>
      <div class="d-flex mb-6 justify-center">
        <v-btn to="/nuxtChild/Lout" class="mx-1" color="pink" width="25%"
          >NuxtChild - index</v-btn
        >
        <v-btn to="/nuxtChild/Lout/9" class="mx-1" color="pink" width="25%"
          >NuxtChild - _id</v-btn
        >
      </div>
    </v-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  setup() {
    return {}
  },
})
</script>
<style scoped>
h1 {
  padding: 0.25em 0 0.5em 0.75em;
  border-left: 6px solid #ccc;
  border-bottom: 1px solid #ccc;
  margin: 10px 0;
}
</style>
