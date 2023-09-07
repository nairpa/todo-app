import type { Task } from "../domain/taskEntity";
import { getTasks, updateTask } from "./taskService";
import * as actionTypes from "./taskActionTypes";

const setTaskAction = (task: Task) => (dispatch: any) => dispatch({ type: actionTypes.SET_TASK, task });

const getTasksAction = () => (dispatch: any) => {
    dispatch({ type: actionTypes.GET_TASKS });

    return getTasks().then((tasks) => {
        dispatch({ type: actionTypes.GET_TASKS_SUCCESS, tasks });
        return tasks;
    })
}

const updateTaskAction = (task: Task) => (dispatch: any) => {
    dispatch({ type: actionTypes.UPDATE_TASK });
    
    return updateTask(task).then((task) => {
        dispatch({ type: actionTypes.UPDATE_TASK_SUCCESS, task})
        return task;
    })
}

export { getTasksAction, updateTaskAction, setTaskAction };