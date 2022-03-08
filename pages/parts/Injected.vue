<template>
  <div class="parts-provide/inject-page">
    <ProvideInject />
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import ProvideInject from '~/templates/ProvideInject.vue'

export default defineComponent({
  setup() {},
  components: { ProvideInject },
})
</script>
<style scoped></style>
