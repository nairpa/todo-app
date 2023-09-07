import { tasks } from "../constants/tasks";
import type { Task } from "../domain/taskEntity";
import { create } from "../domain/taskModel";

let description = ''

function getTasks(): Promise<Task[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(tasks)
        }, 1000);
    })
}

function updateTask(task: Task):  Promise<Task> {
    return new Promise((resolve) => {
        setTimeout(() => {
            description = task.description;
            resolve(create(description))
        }, 1000)
    })
}

export { getTasks, updateTask }