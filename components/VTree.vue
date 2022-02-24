<template>
  <div>
    <v-card>
      <v-card-title class="indigo white--text text-h5">
        User Directory
      </v-card-title>
      <!-- <v-row class="pa-4" justify="space-between"> -->
      <!-- <v-col cols="5"> -->
      <!-- 
        :items="items" : treeviewに渡す配列情報
        activatable: クリックしたrowがアクティブになる(色がつく)
          - color="warning" : アクティブなrow(ツリービューノード)に色がつく
        open-on-click : row(ツリービューノード)全体がフォルダをopenできるタッチ範囲になる(padding?)
        open-all: 全部開いた状態が初期状態になる
        transition
        hoverable: ホバー効果。よくわかんない。
        :active.sync="active"
        :open.sync="open"
        :load-children="fetchUsers": クリックをした
       -->
      <v-treeview
        activatable
        color="warning"
        open-on-click
        :items="items"
        :open.sync="open"
        :active.sync="active"
        :load-children="fetchUsers"
      >
        <template v-slot:prepend="{ item }">
          <v-icon v-if="!item.children"> mdi-account </v-icon>
        </template>
      </v-treeview>
      <!-- </v-col> -->
      <!-- </v-row> -->
    </v-card>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from '@nuxtjs/composition-api'
import { dummyData1 } from '~/module/vtreeview'

export default defineComponent({
  setup() {
    const avatars = ref([
      '?accessoriesType=Blank&avatarStyle=Circle&clotheColor=PastelGreen&clotheType=ShirtScoopNeck&eyeType=Wink&eyebrowType=UnibrowNatural&facialHairColor=Black&facialHairType=MoustacheMagnum&hairColor=Platinum&mouthType=Concerned&skinColor=Tanned&topType=Turban',
      '?accessoriesType=Sunglasses&avatarStyle=Circle&clotheColor=Gray02&clotheType=ShirtScoopNeck&eyeType=EyeRoll&eyebrowType=RaisedExcited&facialHairColor=Red&facialHairType=BeardMagestic&hairColor=Red&hatColor=White&mouthType=Twinkle&skinColor=DarkBrown&topType=LongHairBun',
      '?accessoriesType=Prescription02&avatarStyle=Circle&clotheColor=Black&clotheType=ShirtVNeck&eyeType=Surprised&eyebrowType=Angry&facialHairColor=Blonde&facialHairType=Blank&hairColor=Blonde&hatColor=PastelOrange&mouthType=Smile&skinColor=Black&topType=LongHairNotTooLong',
      '?accessoriesType=Round&avatarStyle=Circle&clotheColor=PastelOrange&clotheType=Overall&eyeType=Close&eyebrowType=AngryNatural&facialHairColor=Blonde&facialHairType=Blank&graphicType=Pizza&hairColor=Black&hatColor=PastelBlue&mouthType=Serious&skinColor=Light&topType=LongHairBigHair',
      '?accessoriesType=Kurt&avatarStyle=Circle&clotheColor=Gray01&clotheType=BlazerShirt&eyeType=Surprised&eyebrowType=Default&facialHairColor=Red&facialHairType=Blank&graphicType=Selena&hairColor=Red&hatColor=Blue02&mouthType=Twinkle&skinColor=Pale&topType=LongHairCurly',
    ])
    const pause = (ms: number) =>
      new Promise((resolve) => setTimeout(resolve, ms))
    const fetchUsers = async (item: any) => {
      await pause(1500)
      item.children.push({
        name: 'name',
        id: item.id + 100,
        contentsName: 'hoge',
        folderId: 19,
        children: [],
      })
      item.children.push({
        name: 'name2',
        id: item.id + 101,
        contentsName: 'hogehuga',
        folderId: 19,
        children: [],
      })
    }
    const active = ref<any>([])
    const avatar = ref(null)
    const open = ref([])
    const tree = ref([])
    const users = ref([])
    const items = ref(dummyData1)
    watch(
      () => tree.value,
      (item) => {
        console.debug('tree', item)
      }
    )
    /**
     * :active.sync="active"
     * activeは選択した(activeな)コンテンツのidを格納したリアクティブなobjectが帰ってくる？
     * active [101, __ob__: Observer]
     * {name: 'name',id: 100,...}なら, item[0] = 100
     */
    watch(
      () => active.value,
      (item) => {
        console.debug('active', item, item[0], typeof item)
      }
    )
    /**
     * :open.sync="open"
     * 開いたFolderのidがobjectで返ってくる
     * 歴代に開いたfolderのidが返ってくる、順番がおかしいw
     * open (2) [19, 20, __ob__: Observer]：20が今開いたfolderのid
     * open (3) [20, 19, 23, __ob__: Observer]：23が開いたfolderのid
     * 
     * 順に開いたら
     * open [19, __ob__: Observer] 19 object
       open (2) [19, 20, __ob__: Observer] 19 object
       open (3) [20, 19, 23, __ob__: Observer] 20 object
       open (4) [23, 20, 19, 124, __ob__: Observer] 23 object
       open (5) [124, 23, 20, 19, 225, __ob__: Observer] 124 object
     * となる
     */
    watch(
      () => open.value,
      (item) => {
        console.debug('open', item, item[0], typeof item)
      }
    )
    return {
      avatars,
      fetchUsers,
      active,
      avatar,
      open,
      tree,
      users,
      items,
    }
  },
})
</script>
<style scoped></style>
