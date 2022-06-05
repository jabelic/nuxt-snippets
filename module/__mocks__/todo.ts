export interface task {
  id: number
  done: boolean
  title: string
  tag: string[]
}
export interface board {
  id: number
  tasks: task[]
}
const __tasks1__: board = {
  id: 0,
  tasks: [
    { id: 0, done: false, title: 'TITLE0',tag:[] },
    { id: 1, done: false, title: 'TITLE1',tag:[] },
    { id: 2, done: false, title: 'TITLE2',tag:[] },
  ],
}
const __tasks2__ = {
  id: 1,
  tasks: Array(50)
    .fill({ id: 0, done: false, title: 'TITLE', tag:[] })
    .map((_, i) => ({ id: i, done: false, title: `TITLE${i}`,tag:[] })),
}
export const __boards__ = [__tasks1__, __tasks2__]
