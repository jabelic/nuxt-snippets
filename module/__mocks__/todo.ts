export interface task{
  id:number
  done: boolean
  title: string
}
export interface board{
  id: number,
  tasks: task[]
}
const __tasks1__:board = {
  id: 0,
  tasks: [
    { id: 0, done: false, title: 'TITLE' },
    { id: 1, done: false, title: 'TITLE2' },
    { id: 2, done: false, title: 'TITLE3' },
  ],
}
const __tasks2__ = {
  id: 1,
  tasks: Array(50).fill({ id: 0, done: false, title: 'TITLE' }).map((_, i) => ({ id: i, done: false, title: `TITLE${i}` }))
}
export const __boards__ = [__tasks1__, __tasks2__]
