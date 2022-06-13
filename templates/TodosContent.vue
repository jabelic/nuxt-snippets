<template>
  <div>
    <DefaultHeader />
    <h1>よくあるTodo List</h1>
    <div id="task_lists">
      <div v-for="board of boards" class="board" :key="board.id">
        <ol class="tasks">
          <li v-for="item of board.tasks" :key="item.id" draggable="true">
              <Task :item="item" :board="board" :change-status="changeStatus" :delete-task="deleteTask" @changeTitle="changeTitle" class="task_card"/>
          </li>
        </ol>
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
    <v-snackbar
      v-model="isShowSnackbar"
      :timeout="timeout"
    >
      アーカイブしました
        <v-btn
          color="blue"
          text
          @click="restoreFromArchive"
        >
          元に戻す
        </v-btn>
    </v-snackbar>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { __boards__ } from '~/module/__mocks__/todo'
import Task from '~/components/Task.vue'
import { useTodo } from '~/module/todo.ts'

export default defineComponent({
    setup() {
        const {boards, addTask, changeStatus, newTasks, deleteTask, changeTitle, isShowSnackbar ,timeout, restoreFromArchive} = useTodo()
        return { boards, addTask, changeStatus, newTasks, deleteTask, changeTitle, isShowSnackbar ,timeout, restoreFromArchive};
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
  list-style-type: none;
}
ol{
  padding-left: 0px;
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
