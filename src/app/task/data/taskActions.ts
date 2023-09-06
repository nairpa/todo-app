import type { Task } from "../domain/taskEntity";
import { getTask, updateTask } from "./taskService";
import * as actionTypes from "./taskActionTypes";

const setTaskAction = (task: Task) => (dispatch: any) => dispatch({ type: actionTypes.SET_TASK, task });

const getTaskAction = () => (dispatch: any) => {
    dispatch({ type: actionTypes.GET_TASK });

    return getTask().then((task) => {
        dispatch({ type: actionTypes.GET_TASK_SUCCESS, task });
        return task;
    })
}

const updateTaskAction = (task: Task) => (dispatch: any) => {
    dispatch({ type: actionTypes.UPDATE_TASK });
    
    return updateTask(task).then((task) => {
        dispatch({ type: actionTypes.UPDATE_TASK_SUCCESS, task})
        return task;
    })
}

export { getTaskAction, updateTaskAction, setTaskAction };