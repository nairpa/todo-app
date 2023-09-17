import type { AnyAction } from "@reduxjs/toolkit";
import type { TaskStore } from "../domain/taskStore";
import * as actionTypes from "./taskActionTypes";

type TaskStoreState = Omit<TaskStore, 
    "loadInitialTasks" | 
    "setTask" | 
    "createTask" | 
    "addTask" | 
    "updateTask" |
    "deleteTask"
>;

const INITIAL_STATE: TaskStoreState = {
    task: undefined,
    tasks: [],
    isLoading: false,
    isUpdating: false,
}

const taskReducer = (state: TaskStoreState = INITIAL_STATE, action: AnyAction) => {
    switch(action.type) {
        case actionTypes.ADD_TASK:
            return { ...state, task: action.task, tasks: state.tasks?.length ? [ ...state.tasks, action.task] : [{ ...action.task, id: (state.task?.id || 0) + 1 }]};
        case actionTypes.GET_TASKS:
            return { ...state, isLoading: true };
        case actionTypes.GET_TASKS_SUCCESS:
            return { ...state, isLoading: false, tasks: action.tasks };
        case actionTypes.CREATE_TASK:
            return { ...state, isUpdating: true };
        case actionTypes.CREATE_TASK_SUCCESS:
            return { ...state, isUpdating: false };
        case actionTypes.UPDATE_TASK:
            return { ...state, isUpdating: true };
        case actionTypes.UPDATE_TASK_SUCCESS:
            return { ...state, tasks: state.tasks?.length ? [ ...state.tasks?.filter(task => task.id !== action.task.id), {...action.task} ] : undefined, isUpdating: false };
        case actionTypes.DELETE_TASK:
            return { ...state, isUpdating: true };
        case actionTypes.DELETE_TASK_SUCCESS:
            return { ...state, tasks: state.tasks?.filter(task => task.id !== action.id )};
        default:
            return state;
    }
}

export { taskReducer };
export type { TaskStoreState };