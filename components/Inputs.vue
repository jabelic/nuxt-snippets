<template>
  <div id="inputs">
    <div v-if="inputmode === 'vuetify'" class="using-vuetify">
      <v-text-field
        :value="values"
        :readonly="$attrs.readonly"
        :label="$attrs.label"
        :placeholder="$attrs.placeholder"
      />
    </div>
    <div v-else-if="inputmode === 'rawinput'" class="rawinput">
      <input type="text" class="input_snipetts" />
    </div>

    <div v-else-if="inputmode === 'googleInput'" class="google-design-input">
      <label for="text2">text2</label>
      <div class="search_bar">
        <i class="fas fa-search search_icon"></i>
        <input id="text2" type="text" placeholder="キーワードを入力" />
        <i class="fas fa-times search_icon"></i>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  props: {
    values: {
      type: String,
    },
    inputmode: {
      type: String,
      required: true,
      defalut: 'vuetify',
    },
  },
  setup() {},
})
</script>
<style scoped>
/** from  MDN */
.input_snipetts {
  background-color: azure;
  width: 100%; /*親要素いっぱい広げる*/
  padding: 10px 15px; /*ボックスを大きくする*/
  font-size: 16px;
  border-radius: 3px; /*ボックス角の丸み*/
  border: 2px solid #ddd; /*枠線*/
  box-sizing: border-box; /*横幅の解釈をpadding, borderまでとする*/
}

/** https://qiita.com/KengoShimizu/items/22c14b282fa9f53f4bd8 */
.search_bar {
  display: flex; /*アイコン、テキストボックスを調整する*/
  align-items: center; /*アイコン、テキストボックスを縦方向の中心に*/
  justify-content: center; /*アイコン、テキストボックスを横方向の中心に*/
  height: 50px;
  width: 100%;
  background-color: #ddd;
}

.search_icon {
  /*アイコンに一定のスペースを設ける*/
  height: 15px;
  width: 15px;
  padding: 5px 5px;
}

#text2 {
  font-size: 16px;
  width: 100%; /*flexの中で100%広げる*/
  background-color: #ddd;
  border: none; /*枠線非表示*/
  outline: none; /*フォーカス時の枠線非表示*/
  box-sizing: border-box; /*横幅の解釈をpadding, borderまでとする*/
}
</style>
