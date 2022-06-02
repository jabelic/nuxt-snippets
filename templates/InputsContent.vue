<template>
  <div>
    <DefaultHeader />
    <v-container>
      <h1>Nuxt Snippets - Input</h1>
      <div class="d-flex mb-6 justify-center">
        <v-btn
          to="/"
          color="pink"
          width="50%"
        >
          return index
        </v-btn>
      </div>
      <div class="contents">
        <div class="mb-6 justify-center input-margin">
          Inputs: {{ inputValue.case1 }}
          <Inputs
            inputmode="vuetify"
            :values="inputValue.case1"
            label="Tweet!"
            placeholder="今何してる？"
            @setInputText="setInputText"
          />
        </div>
        <div class="mb-6 justify-center input-margin">
          Inputs: {{ inputValue.case2 }}
          <Inputs
            inputmode="rawinput"
            :values="inputValue.case2"
            label="Tweet!"
            placeholder="今何してる？"
            @setInputText="syncInputText"
          />
        </div>
        <div class="mb-6 justify-center input-margin">
          Inputs: {{ inputValue.case3 }}
          <Inputs
            inputmode="googleInput"
            :values="inputValue.case3"
            label="Tweet!"
            placeholder="今何してる？"
            @setInputText="syncInputText"
          />
        </div>
        <div class="mb-6 justify-center input-margin">
          Inputs: {{ inputValue.case4 }}
          <Inputs
            inputmode="mathquill"
            :values="inputValue.case4"
            label="Tweet!"
            placeholder="今何してる？"
            @setInputText="syncInputText"
          />
        </div>
      </div>
    </v-container>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const inputValue = reactive({ case1: '', case2: '', case3: '', case4: '' })
    const setInputText = (args: string) => {
      inputValue.case1 = args
    }
    const syncInputText = (caseNum: number, args: string) => {
      if (caseNum === 1) inputValue.case2 = args
      else if (caseNum === 2) inputValue.case3 = args
    }
    return { inputValue, setInputText, syncInputText }
  },
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
