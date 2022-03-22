<template>
  <div id="layoutForNuxtChild">
    <ParentLayout />
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import ParentLayout from '~/templates/ParentLayout.vue'

export default defineComponent({
  setup() {},
  components: { ParentLayout },
})
</script>
<style scoped></style>
