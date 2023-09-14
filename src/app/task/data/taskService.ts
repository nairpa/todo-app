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

function createTask(task: Task['description']):  Promise<Task> {
    return new Promise((resolve) => {
        setTimeout(() => {
            description = task;
            resolve(create(description))
        }, 1000)
    })
}

export { getTasks, createTask }