import type { Task } from "./taskEntity";

interface TaskStore {
    // Sate
    task: Task;
    tasks: Task[] | undefined;
    isLoading: boolean;
    isUpdating: boolean;

    // Actions
    loadInitialTasks(): Promise<Task[]>;
    addTask(task: Task): void;
    // updateTask(task: Task): Promise<Task | undefined>;
    createTask(task: Task['description']): Promise<Task>;
}

export type { TaskStore };