import type { AnyAction } from "@reduxjs/toolkit";
import type { TaskStore } from "../domain/taskStore";
import * as actionTypes from "./taskActionTypes";

type TaskStoreState = Omit<TaskStore, "loadInitialTasks" | "setTask" | "updateTask">;

const INITIAL_STATE: TaskStoreState = {
    tasks: [],
    isLoading: false,
    isUpdating: false,
}

const taskReducer = (state: TaskStoreState = INITIAL_STATE, action: AnyAction) => {
    switch(action.type) {
        case actionTypes.SET_TASK:
            return { ...state, task: action.task };
        case actionTypes.GET_TASKS:
            return { ...state, isLoading: true };
        case actionTypes.GET_TASKS_SUCCESS:
            return { ...state, isLoading: false, tasks: action.tasks };
        case actionTypes.UPDATE_TASK:
            return { ...state, isUpdating: true };
        case actionTypes.UPDATE_TASK_SUCCESS:
            return { ...state, isUpdating: false };
        default:
            return state;
    }
}

export { taskReducer };
export type { TaskStoreState };