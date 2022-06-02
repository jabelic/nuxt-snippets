<template>
  <div class="parts-input-page">
    <InputsContent />
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import InputsContent from '~/templates/InputsContent.vue'

export default defineComponent({
  components: { InputsContent },
  setup() {},
})
</script>
<style scoped></style>
