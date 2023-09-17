import type { TaskStore } from "../domain/taskStore";

type DeleteTaskStore = Pick<TaskStore, "task" | "deleteTask">;

const deleteTaskUseCase = (store: DeleteTaskStore) => {
    const deletedTask = store.task;

    if (!deletedTask) return;

    return new Promise(() => store.deleteTask(deletedTask))
}

export { deleteTaskUseCase };
export type { DeleteTaskStore };