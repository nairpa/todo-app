import type { Task } from "../domain/taskEntity";
import { getTasks, createTask, updateTask } from "./taskService";
import * as actionTypes from "./taskActionTypes";

const addTaskAction = (task: Task) => (dispatch: any) => dispatch({ type: actionTypes.ADD_TASK, task });

const getTasksAction = () => (dispatch: any) => {
    dispatch({ type: actionTypes.GET_TASKS });

    return getTasks().then((tasks) => {
        dispatch({ type: actionTypes.GET_TASKS_SUCCESS, tasks });
        return tasks;
    })
}

const createTaskAction = (task: Task['description']) => (dispatch: any) => {
    dispatch({ type: actionTypes.CREATE_TASK });
    
    return createTask(task).then((task) => {
        dispatch({ type: actionTypes.CREATE_TASK_SUCCESS, task })
        return task;
    })
}

const updateTaskAction = (task: Task) => (dispatch: any) => {
    dispatch({ type: actionTypes.UPDATE_TASK });

    return updateTask(task).then((task) => {
        dispatch({ type: actionTypes.UPDATE_TASK_SUCCESS, task })
        return task;
    })
}

export { getTasksAction, createTaskAction, addTaskAction, updateTaskAction };