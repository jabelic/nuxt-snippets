<template>
  <div id="inputs">
    <div v-if="inputmode === 'vuetify'" class="using-vuetify">
      <v-text-field
        :value="values"
        :readonly="$attrs.readonly"
        :label="$attrs.label"
        :placeholder="$attrs.placeholder"
        @input="$emit('setInputText', $event)"
      />
    </div>
    <div v-else-if="inputmode === 'rawinput'" class="rawinput">
      <input
        type="text"
        v-model="inputValue.case1"
        class="input_snipetts"
        :readonly="$attrs.readonly"
        :label="$attrs.label"
        :placeholder="$attrs.placeholder"
      />
    </div>

    <div v-else-if="inputmode === 'googleInput'" class="google-design-input">
      <!-- <label for="text2">text2</label> -->
      <div class="search_bar">
        <i class="fas fa-search search_icon"></i>
        <input
          id="text2"
          type="text"
          v-model="inputValue.case2"
          :readonly="$attrs.readonly"
          :label="$attrs.label"
          :placeholder="$attrs.placeholder"
        />
        <i class="fas fa-times search_icon"></i>
      </div>
    </div>
    <div v-else-if="inputmode === 'mathquill'">
      <!-- <label for="text2">text2</label> -->
      <p><span id="answer_mq">x=</span></p>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
  watch,
  getCurrentInstance,
  reactive,
  nextTick,
} from '@nuxtjs/composition-api'
export default defineComponent({
  props: {
    values: {
      type: String as PropType<string | undefined>,
      required: true,
    },
    inputmode: {
      type: String,
      required: true,
      defalut: 'vuetify',
    },
  },
  setup(props, {}) {
    /** @input="$emit('setInputText', $event, 1)" のようにして
     * valueを直接親SFCのリアクティブな変数にバインドできるのは v-text-fieldだけ（？）
     * 他はcomponent側でも状態をもたないといけない。*/
    const inputValue = reactive({ case1: '', case2: '' })
    const root = getCurrentInstance()
    /** inputのvalueのsync */
    watch(
      () => [inputValue.case1, inputValue.case2],
      ([newVal1, newVal2]) => {
        if (newVal1) root?.emit('setInputText', 1, newVal1)
        else if (newVal2) root?.emit('setInputText', 2, newVal2)
      }
    )
    nextTick(() => {
      var MQ = MathQuill.getInterface(2)
      var answerSpan = document.getElementById('answer_mq')
      var answerMathField = MQ.MathField(answerSpan, {
        handlers: {
          edit: function () {
            var enteredMath = answerMathField.latex() // Get entered math in LaTeX format
            // checkAnswer(enteredMath)
          },
        },
      })
    })
    return { inputValue }
  },
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
