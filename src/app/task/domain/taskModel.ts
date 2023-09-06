import type { Task } from './taskEntity'

const create = (task: Task['description']) => ({description: task, isCompleted: false});
const complete = (task: Task) => ({
    ...task,
    isCompleted: !task.isCompleted
})

export { create, complete };