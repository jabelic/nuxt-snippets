<template>
  <div>
    <div class="d-flex flex-column">
      <v-btn class="btns">
        hoge
      </v-btn>
      <v-btn
        class="btns"
        to="/nuxtChild/Lout/9"
      >
        To : nuxtChild/Lout/9
      </v-btn>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {},
})
</script>
<style scoped>
.btns {
  text-transform: none;
}
</style>
