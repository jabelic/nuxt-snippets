<template>
  <div>
    <DefaultHeader />
    <v-container>
      <h1>Nuxt Snippets - v-treeview</h1>
      <div class="d-flex my-6 justify-center">
        <v-btn to="/" color="pink" width="50%"> return index </v-btn>
      </div>
      <VTree />
    </v-container>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  components: {},
  setup() {},
})
</script>
<style scoped>
h1 {
  padding: 0.25em 0 0.5em 0.75em;
  border-left: 6px solid #ccc;
  border-bottom: 1px solid #ccc;
  margin: 10px 0;
}
.contents {
  background-color: rgba(255, 255, 255, 0.1);
}
.input-margin {
  margin: 1em;
}
.body {
  background-color: rgba(255, 255, 255, 0.1);
}
</style>
