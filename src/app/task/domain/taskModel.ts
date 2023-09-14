import type { Task } from './taskEntity'

const create = (task: Task['description']) => ({description: task, isCompleted: false, id: 0});
const complete = (task: Task) => ({
    ...task,
    isCompleted: !task.isCompleted
})

export { create, complete };