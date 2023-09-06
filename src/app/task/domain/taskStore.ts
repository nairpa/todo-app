import type { Task } from "./taskEntity";

interface TaskStore {
    // Sate
    task: Task | undefined;
    isLoading: boolean;
    isUpdating: boolean;

    // Actions
    loadInitialTask(): Promise<Task>;
    setTask(task: Task): void;
    updateTask(task: Task): Promise<Task | undefined>;
}

export type { TaskStore };