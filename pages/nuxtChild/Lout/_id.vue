<template>
  <div>
    <v-card class="mx-auto" max-width="344" outlined>
      <v-list-item three-line>
        <v-list-item-content>
          <div class="text-overline mb-4">OVERLINE</div>
          <v-list-item-title class="text-h5 mb-1">
            Headline 5
          </v-list-item-title>
          <v-list-item-subtitle>
            Greyhound divisely hello coldly fonwderfully Params:
            {{ $nuxt.$route.params }}
          </v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-avatar tile size="80" color="grey" />
      </v-list-item>

      <v-card-actions>
        <v-btn class="btns" outlined rounded text to="/nuxtChild/Lout">
          To: /nuxtChild/Lout
        </v-btn>
      </v-card-actions>
    </v-card>
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
