<template>
  <div id="default-header">
    <header>
      <div class="header d-flex flex-row">
        <div class="header-content">
          <h3>Nuxt-snippets</h3>
        </div>
      </div>
    </header>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {},
})
</script>
<style lang="scss" scoped>
.header {
  background-color: burlywood;
  display: flex;
  height: 40px;
  min-width: 50px;
  align-items: center;
  color: #fff;
  text-shadow: #000 0 0 0.2em;
}
.header-content {
  margin-left: 1%;
}
</style>
