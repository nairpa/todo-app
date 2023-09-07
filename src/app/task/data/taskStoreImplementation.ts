import React from "react";
import { useDispatch, useSelector } from "react-redux";

import type { AppRootState } from "../../main/data/appStoreImplementation";
import type { TaskStore } from "../domain/taskStore";
import type { Task } from "../domain/taskEntity";

import type { TaskStoreState } from "./taskReducer";

import {
  getTasksAction,
  setTaskAction,
  updateTaskAction
} from "./taskActions";

const taskSelector = (state: AppRootState) => state.task;

const useTaskStoreImplementation = (): TaskStore => {
  const { tasks, isLoading, isUpdating } = useSelector<
    AppRootState,
    TaskStoreState
  >(taskSelector);
  const dispatch = useDispatch();

  const setTask = React.useCallback(
    (task: Task) => setTaskAction(task)(dispatch),
    [dispatch]
  );

  const loadInitialTasks = React.useCallback(
    () => getTasksAction()(dispatch),
    [dispatch]
  );

  const updateTask = React.useCallback(
    (task: Task) => updateTaskAction(task)(dispatch),
    [dispatch]
  );

  return {
    tasks,
    isLoading,
    isUpdating,
    setTask,
    loadInitialTasks,
    updateTask
  };
};

export { useTaskStoreImplementation };