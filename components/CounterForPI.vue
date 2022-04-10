<template>
  <div>
    <div class="d-flex justify-center">
      <v-btn @click="$emit('increment')">+</v-btn>
      <v-btn @click="$emit('decrement')">-</v-btn>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    state: {},
  },
  setup() {
    return {}
  },
})
</script>
<style scoped></style>
