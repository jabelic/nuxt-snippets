<template>
  <div id="index" class="">
    <!-- https://vuetifyjs.com/ja/styles/flex/ -->
    <div class="d-flex flex-column mb-6">
      <v-btn color="pink">dsdfsf</v-btn>
    </div>
    <!-- <div class="flex-row mb-6 justify-center">
      <v-btn color="pink">dsdfsf</v-btn>
    </div> -->
    <div class="mb-6 justify-center">
      <!-- <v-btn color="pink">dsdfsf</v-btn> -->
      <Inputs :values="inputValue" label="Tweet!" placeholder="今何してる？" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
export default defineComponent({
  setup() {
    const inputValue = ref('')
    return { inputValue }
  },
})
</script>
