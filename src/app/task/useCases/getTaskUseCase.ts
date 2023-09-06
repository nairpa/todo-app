import type { TaskStore } from "../domain/taskStore";

type GetTaskStore = Pick<TaskStore, "loadInitialTask">;

const getTaskUseCase = (store: GetTaskStore) => {
    store.loadInitialTask();
}

export { getTaskUseCase };