import type { Task } from "./taskEntity";

interface TaskStore {
    // Sate
    tasks: Task[] | undefined;
    isLoading: boolean;
    isUpdating: boolean;

    // Actions
    loadInitialTasks(): Promise<Task[]>;
    setTask(task: Task): void;
    updateTask(task: Task): Promise<Task | undefined>;
}

export type { TaskStore };