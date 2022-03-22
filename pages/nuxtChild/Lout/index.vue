<template>
  <div>
    <div class="d-flex flex-column">
      <v-btn>HOGE</v-btn>
      <v-btn to="/nuxtChild/Lout/9">HOGE</v-btn>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {},
})
</script>
<style scoped></style>
