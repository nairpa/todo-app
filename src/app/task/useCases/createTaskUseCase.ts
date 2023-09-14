import { Task } from "../domain/taskEntity";
import type { TaskStore } from "../domain/taskStore";

type CreateTaskStore = Pick<TaskStore, "task" | "createTask" | "addTask">;

const createTaskUseCase = (store: CreateTaskStore, createdBy: (task: Task['description']) => Task) => {
    const createdTask = store.task ? createdBy(store.task['description']) : store.task;
    console.log(createdTask)
    if (!createdTask || store.task.id === createdTask.id) return;

    store.addTask(createdTask)

    return new Promise(() => store.createTask(createdTask['description']))
}

export { createTaskUseCase };
export type { CreateTaskStore };