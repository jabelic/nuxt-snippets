import { computed, ref, watch } from '@nuxtjs/composition-api'
import { useTodoStore } from '~/store/todo';
import { useTodoArchiveStore } from '~/store/todoArchive';
import { __boards__ } from '../__mocks__/todo';

export const useTodo = () => {

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
        todoStore.deleteTask(boardId, id);
        boards.value = todoStore.boards;
        // snackbarを表示
        isShowSnackbar.value = true
    };
    const changeTitle = (boardId: number, id: number, title: string)=>{ 
        todoStore.changeTitle(boardId, id, title);
        boards.value = todoStore.boards;
    }

    /** Snackbar */
    const isShowSnackbar = ref(false)
    const timeout = ref(2000)
    const restoreFromArchive = () =>{
        const task = archive.getLastArchivedTask
        if(task){
        archive.removeArchivedTask(task.boardId, task.task.id)
        todoStore.restoreTaskFromArchive(task.boardId, task.task)
        setTimeout(()=>isShowSnackbar.value=false, 500)
        }
    }


    watch(()=>todoStore.allBoards, ()=>{
        boards.value = todoStore.boards;
    }, {deep:true})
    return {boards, addTask, changeStatus, newTasks, deleteTask, changeTitle, isShowSnackbar ,timeout, restoreFromArchive}
}