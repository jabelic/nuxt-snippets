<template>
  <div>
    <DefaultHeader />
    <div id="task_lists">
        <div v-for="board of boards" class="board" :key="board.id">
            <div class="tasks">
                <div v-for="item of board.tasks" :key="item.id">
                    <div draggable="true" class="task_card" >
                        <div class="todo_complete_btn">
                            <input @change="changeStatus(board.id, item.id, $event)" type="checkbox">
                        </div>
                        <div>
                            {{item.title}}
                        </div>
                        <div>
                            <button type="button" class="btn">
                                <span class="todo_delete_btn">
                                    <svg style="width:24px;height:24px" viewBox="0 0 24 20">
                                        <path fill="currentColor" d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z" />
                                    </svg>
                                </span>
                            </button>        
                        </div>
                    </div>
                </div>
            </div>
            <form class="add_task_form">
                <input v-model="newTasks[board.id]" type="text">
                <div @click="addTask(board.id)" class="btn_frame">
                    <button type="button" class="btn">
                        <span class="btn_content">+ add a task</span>
                    </button>
                </div>
            </form>
        </div>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, ref } from '@nuxtjs/composition-api'
import { __boards__ } from '~/module/__mocks__/todo'
import { useTodoStore } from '~/store/todo'

export default defineComponent({
  setup() {
      const todoStore = useTodoStore()
      const boards = ref(todoStore.boards)
      const newTasks = computed(()=>[...Array(__boards__.length)].map((_, i) => ""))
      const addTask = (boardId: number) => {
        if(!newTasks.value[boardId])return 
        todoStore.addTask(boardId,newTasks.value[boardId])
        newTasks.value[boardId] = ""
      }
      const changeStatus = (boardId: number, id: number,done: boolean) => {
        todoStore.changeStatus(boardId, id, done)
      }
      return { boards, addTask ,changeStatus, newTasks }
  },
})
</script>
<style scoped>
#task_lists{
    justify-content: center;
    display: flex;
    margin-top: 4%;
}
.board{
    margin: 0.5%;
    justify-content: center;
    text-align: center;
    width: 30%;
    background: #222222;
    border-radius: 5px;
    overflow-y: scroll;
    /* box-shadow:1px 1px 1px 1px #ccc; */
}
.tasks{
    max-height: 100vh;
    overflow-y: scroll;
}
/* ボード内の各taskカード */
.task_card{
    margin: 3%;
    background: #000000;
    display: flex;
    align-items: center;
    cursor: move;
}
.task_card:last-child{
    margin-left: auto;
}
.todo_complete_btn{
    margin: 3%;
}
.todo_delete_btn{
    margin-left: auto;
}


.add_task_form{
    background-color: wheat;
}
.btn_frame{
    justify-content: flex-end;
    flex-direction: row;
}
.btn{
  border-radius: 5px;
  background-color: rgba(10, 128, 10, 1);
  text-align: center;
  color: white;
  margin: 5px;
}
.btn:active{
    background-color: rgba(0, 108, 0, 1)
}

input{
    border: 2px solid #ff9900; 
}
.btn_content{
    margin: 3px;
}
</style>

