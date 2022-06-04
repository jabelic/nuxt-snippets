<template>
  <div>
    <DefaultHeader />
    <h1>よくあるTodo List</h1>
    <div id="task_lists">
      <div v-for="board of boards" class="board" :key="board.id">
        <div class="tasks">
          <div v-for="item of board.tasks" :key="item.id" draggable="true">
              <Task :item="item" :board="board" :change-status="changeStatus" :delete-task="deleteTask" @changeTitle="changeTitle" class="task_card"/>
          </div>
        </div>
        <form class="add_task_form">
          <input v-model="newTasks[board.id]" type="text" />
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
import { computed, defineComponent, ref, watch } from '@nuxtjs/composition-api'
import { __boards__ } from '~/module/__mocks__/todo'
import { useTodoStore } from '~/store/todo'
import { useTodoArchiveStore } from '~/store/todoArchive'
import Task from '~/components/Task.vue'

export default defineComponent({
    setup() {
        const todoStore = useTodoStore();
        const archive = useTodoArchiveStore();
        const boards = ref(todoStore.boards);
        const newTasks = computed(() => [...Array(__boards__.length)].map((_, i) => ""));
        const addTask = (boardId: number) => {
            if (!newTasks.value[boardId])
                return;
            todoStore.addTask(boardId, newTasks.value[boardId]);
            newTasks.value[boardId] = "";
        };
        const changeStatus = (boardId: number, id: number, done: boolean) => {
            todoStore.changeStatus(boardId, id, done);
        };
        const deleteTask = (boardId: number, id: number) => {
            // TODO: snackbarを表示
            todoStore.deleteTask(boardId, id);
            boards.value = todoStore.boards;
            console.debug(boards.value[0]);
        };
        const changeTitle = (boardId: number, id: number, title: string)=>{
          console.debug("sdfchangeTitle")
          todoStore.changeTitle(boardId, id, title);
          boards.value = todoStore.boards;
        }
        watch(()=>todoStore.allBoards, ()=>{
          boards.value = todoStore.boards;
        }, {deep:true})
        return { boards, addTask, changeStatus, newTasks, deleteTask, changeTitle };
    },
    components: { Task }
})
</script>
<style scoped>
#task_lists {
  justify-content: center;
  display: flex;
  margin-top: 4%;
}
.board {
  margin: 0.5%;
  justify-content: center;
  text-align: center;
  width: 25%;
  background: #222222;
  border-radius: 5px;
  overflow-y: scroll;
  /* box-shadow:1px 1px 1px 1px #ccc; */
}
.tasks {
  max-height: 80vh;
  overflow-y: scroll;
}
/* ボード内の各taskカード */
.task_card {
  margin: 3%;
  background: #000000;
  display: flex;
  align-items: center;
  cursor: move;
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
