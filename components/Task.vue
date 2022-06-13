<template>
  <div>
    <div class="todo_complete_btn">
        <input
            @change.prevent="changeStatus(board.id, item.id, !item.done)"
            type="checkbox"
        />
    </div>
    <div v-if="!editable">
        {{ item.title }}
    </div>
    <div v-else>
        <input ref="input_tag" type="text" v-model="contentsOfEditedTask.title" @blur="switchEditMode">
    </div>
    <div class="update_or_delete_actions">
        <div class="edit_icon" @click.prevent="switchEditMode()">
            <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                <path fill="currentColor" d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />
            </svg>
        </div>
        <div class="trash_btn">
            <button @click.prevent="deleteTask(board.id, item.id)" type="button">
            <span class="todo_delete_btn">
                <svg style="width: 24px; height: 24px" viewBox="0 0 24 20">
                    <path
                        fill="currentColor"
                        d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z"
                    />
                </svg>
            </span>
            </button>
        </div>
    </div>

  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, ref, reactive, nextTick } from '@nuxtjs/composition-api'
import { task, board} from '~/module/__mocks__/todo'
export default defineComponent({
    props:{
        item: {
            required: true,
            type: Object as PropType<task>
        },
        board: {
            required: true,
            type: Object as PropType<board>
        },
        changeStatus: {
            required: true,
            type: Function
        },
        deleteTask:{
            required: true,
            type: Function
        },
    },
    setup(props, {emit}) {
        const switchEditMode = () =>{
            if(!editable.value) {
                editable.value = true
                nextTick(()=>{
                    if(input_tag.value){
                        input_tag.value.value = props.item.title
                        contentsOfEditedTask.title = props.item.title
                        input_tag.value.focus()
                    }
                })
            }else{
                editable.value = false
                emit('changeTitle', props.board.id, props.item.id, contentsOfEditedTask.title)
            }
        }
        const input_tag = ref<HTMLInputElement>()
        const editable = ref(false)
        const contentsOfEditedTask = reactive({title: ''})

        const edit = () =>{
            editable.value = true
            editable.value = false
        }
        return { edit, editable, contentsOfEditedTask ,switchEditMode, input_tag}
    },
})
</script>
<style scoped>
.task_card {
  margin: 3%;
  background: #000000;
  display: flex;
  align-items: center;
  cursor: move;
}
.todo_complete_btn {
  padding: 1%;
  margin: 3%;
}
.update_or_delete_actions{
  margin-left: auto;
  display: flex;
}
.edit_icon{
  margin: 2px;
  /* margin-left: auto; */
}
.todo_delete_btn {
  /* margin-left: auto; */
}
.trash_btn{
  /* margin-left: auto; */
  margin: 2px;
  border-radius: 1%;
  border-width: 1rem;
  border: red;
  color:red;
}
.trash_btn:hover{
    color: rgb(255, 86, 86);
}

.add_task_form {
  background-color: wheat;
}
.btn_frame {
  justify-content: flex-end;
  flex-direction: row;
}
.btn {
  border-radius: 5px;
  background-color: rgba(10, 128, 10, 1);
  text-align: center;
  color: white;
  margin: 5px;
}
.btn:active {
  background-color: rgba(0, 108, 0, 1);
}

input {
  border: 2px solid #ff9900;
}
.btn_content {
  margin: 3px;
}
</style>