import type { Task } from "../domain/taskEntity";
import { create } from "../domain/taskModel";

let description = ''

function getTask(): Promise<Task> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(create(description))
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

export { getTask, updateTask }