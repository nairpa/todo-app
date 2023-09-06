import type { Task } from "../domain/taskEntity";
import type { TaskStore } from "../domain/taskStore";

type UpdateTaskStore = Pick<TaskStore, "task" | "updateTask" | "setTask">;

const updateTaskUseCase = (store: UpdateTaskStore, updateBy: (task: Task) => Task) => {
    const updatedTask = store.task ? updateBy(store.task) : store.task;

    if(!updatedTask || store.task?.description === updatedTask.description) return;

    store.setTask(updatedTask);

    return store.updateTask(updatedTask);
}

export type { UpdateTaskStore };
export { updateTaskUseCase };