import { complete } from "../domain/taskModel";
import { UpdateTaskStore, updateTaskUseCase } from "./updateTaskUseCase";

const completeTaskUseCase = (store: UpdateTaskStore) => {
    return updateTaskUseCase(store, complete)
}

export { completeTaskUseCase };