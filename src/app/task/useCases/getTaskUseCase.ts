import type { TaskStore } from "../domain/taskStore";

type GetTaskStore = Pick<TaskStore, "loadInitialTasks">;

const getTaskUseCase = (store: GetTaskStore) => {
    store.loadInitialTasks();
}

export { getTaskUseCase };