import { defineStore } from 'pinia'
import { task } from '~/module/__mocks__/todo'

export const useTodoArchiveStore = defineStore('todoArchive', {
    state: (): {archives: Array<{task: task,boardId: number}>} => ({ archives: [] }),
    actions: {
        addArchivedTask(boardId:number, task: task){
            this.archives.push({
                task,
                boardId
            })
        },
        removeArchivedTask(boardId: number, taskId: number){
            this.archives = this.archives.filter((item: {task: task, boardId: number})=> item.boardId !== boardId || item.task.id !== taskId)
        }
    },
    getters: {
        lastArchivedTask(state){
            return (taskId: number, boardId: number)=> state.archives.find((it)=>it.boardId===boardId && it.task.id===taskId)
        }
    }
})
