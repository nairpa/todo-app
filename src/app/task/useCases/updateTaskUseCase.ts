import { Task } from "../domain/taskEntity";
import type { TaskStore } from "../domain/taskStore";

type UpdateTaskStore = Pick<TaskStore, "task" | "updateTask">;

const updateTaskUseCase = (store: UpdateTaskStore, updatedBy: (id: Task) => Task) => {
    const updatedTask = store.task ? updatedBy(store.task) : store.task;

    if (!updatedTask) return;

    return new Promise(() => store.updateTask(updatedTask))
}

export { updateTaskUseCase };
export type { UpdateTaskStore };