<template>
  <div>
    <DefaultHeader />
    <v-container>
      <h1>Nuxt Snippets - Input</h1>
      <div class="contents">
        <div class="mb-6 justify-center input-margin">
          <Inputs
            inputmode="vuetify"
            :values="inputValue"
            label="Tweet!"
            placeholder="今何してる？"
          />
        </div>
        <div class="mb-6 justify-center input-margin">
          <Inputs
            inputmode="rawinput"
            :values="inputValue"
            label="Tweet!"
            placeholder="今何してる？"
          />
        </div>
        <div class="mb-6 justify-center input-margin">
          <Inputs
            inputmode="googleInput"
            :values="inputValue"
            label="Tweet!"
            placeholder="今何してる？"
          />
        </div>
      </div>
    </v-container>
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
<style scoped>
h1 {
  padding-bottom: 0.5em;
  border-bottom: 3px double #ccc;
  margin: 10px 0;
}
.contents {
  background-color: rgba(255, 255, 255, 0.1);
}
.input-margin {
  margin: 1em;
}
</style>
