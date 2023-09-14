import type { Task } from "./taskEntity";

interface TaskStore {
    // Sate
    task: Task | undefined;
    tasks: Task[] | undefined;
    isLoading: boolean;
    isUpdating: boolean;

    // Actions
    loadInitialTasks(): Promise<Task[]>;
    addTask(task: Omit<Task, 'id'>): void;
    // updateTask(task: Task): Promise<Task | undefined>;
    createTask(task: Task['description']): Promise<Omit<Task, 'id'>>;
}

export type { TaskStore };