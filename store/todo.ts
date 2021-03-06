import { defineStore } from 'pinia'
import { __boards__, task } from '~/module/__mocks__/todo'
import { useTodoArchiveStore } from './todoArchive'

export const useTodoStore = defineStore('todo', {
  state: () => ({ boards: __boards__ }),
  actions: {
    addTask(baordId: number, title: string) {
      this.boards.forEach((board) => {
        if (baordId === board.id) {
          board.tasks.push({ id: board.tasks.length, done: false, title, tag:[] })
        }
      })
    },
    restoreTaskFromArchive(boardId: number, task: task){
      let idx: number | undefined;
      for(let i = 0; i < this.boards[boardId].tasks.length; i++){
        if(this.boards[boardId].tasks[i].id > task.id){
          idx = i
          break;
        }
      }
      if(idx)this.boards[boardId].tasks.splice(idx, 0, task)
      else this.boards[boardId].tasks.push(task)
    },
    changeStatus(boardId: number, id: number, done: boolean) {
      this.boards.forEach((board) => {
        if (board.id === boardId) {
          board.tasks.forEach((task) => {
            if (task.id === id) task.done = done
          })
        }
      })
    },
    changeTitle(boardId: number, id: number, title: string) {
      this.boards.forEach((board) => {
        if (board.id === boardId) {
          board.tasks.forEach((task) => {
            if (task.id === id) task.title = title
          })
        }
      })
    },
    deleteTask(boardId: number, id: number){
      const deletedTask = this.boards[boardId].tasks.find((it)=>it.id===id)
      const archive = useTodoArchiveStore()
      if(deletedTask){
        archive.addArchivedTask(boardId, deletedTask)
        this.boards[boardId].tasks = this.boards[boardId].tasks.filter((it)=>it.id!==id)
      }
    }
  },
  getters: {
    finishedTodos(state) {
      // autocompletion! ✨
      return state.boards.filter((board) => board.tasks.filter((task) => task.done))
    },
    unfinishedTodos(state) {
      return state.boards.filter((board) =>board.tasks.filter((task) => !task.done))
    },
    allBoards(state){
      return state.boards
    }
  },
})
