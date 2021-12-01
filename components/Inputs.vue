<template>
  <div id="inputs" class="inputs">
    <v-text-field
      :value="values"
      :readonly="$attrs.readonly"
      :label="$attrs.label"
      :placeholder="$attrs.placeholder"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  props: {
    values: {
      type: String,
    },
  },
  setup() {},
})
</script>
<style scoped>
.inputs {
  /* background-color: beige; */
}
</style>
