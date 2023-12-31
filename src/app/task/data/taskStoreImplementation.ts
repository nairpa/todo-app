import React from "react";
import { useDispatch, useSelector } from "react-redux";

import type { AppRootState } from "../../main/data/appStoreImplementation";
import type { TaskStore } from "../domain/taskStore";
import type { Task } from "../domain/taskEntity";

import type { TaskStoreState } from "./taskReducer";

import {
  getTasksAction,
  addTaskAction,
  createTaskAction,
  updateTaskAction,
  deleteTaskAction
} from "./taskActions";

const taskSelector = (state: AppRootState) => state.task;

const useTaskStoreImplementation = (): TaskStore => {
  const { tasks, task, isLoading, isUpdating } = useSelector<
    AppRootState,
    TaskStoreState
  >(taskSelector);
  const dispatch = useDispatch();

  const addTask = React.useCallback(
    (task: Task) => addTaskAction(task)(dispatch),
    [dispatch]
  );

  const loadInitialTasks = React.useCallback(
    () => getTasksAction()(dispatch),
    [dispatch]
  );

  const createTask = React.useCallback(
    (task: Task['description']) => createTaskAction(task)(dispatch),
    [dispatch]
  );

  const updateTask = React.useCallback(
    (task: Task) => updateTaskAction(task)(dispatch),
    [dispatch]
  );

  const deleteTask = React.useCallback(
    (task: Task) => deleteTaskAction(task)(dispatch),
    [dispatch]
  )

  return {
    task,
    tasks,
    isLoading,
    isUpdating,
    addTask,
    loadInitialTasks,
    createTask,
    updateTask,
    deleteTask,
  };
};

export { useTaskStoreImplementation };