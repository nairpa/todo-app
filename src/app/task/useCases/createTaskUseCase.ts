import { Task } from "../domain/taskEntity";
import type { TaskStore } from "../domain/taskStore";

type CreateTaskStore = Pick<TaskStore, "task" | "createTask" | "addTask">;

const createTaskUseCase = (store: CreateTaskStore, createdBy: (task: Task['description']) => Omit<Task, 'id'>) => {
    const createdTask = store.task ? createdBy(store.task['description']) : store.task;

    if (!createdTask) return;

    store.addTask(createdTask)

    return new Promise(() => store.createTask(createdTask['description']))
}

export { createTaskUseCase };
export type { CreateTaskStore };