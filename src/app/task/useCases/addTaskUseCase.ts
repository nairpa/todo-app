import { create } from "../domain/taskModel";
import { CreateTaskStore, createTaskUseCase } from "./createTaskUseCase";

const addTaskUseCase = (store: CreateTaskStore) => {
    return createTaskUseCase(store, create)
}

export { addTaskUseCase };