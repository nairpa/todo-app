import React from "react";
import { TaskStore } from "../domain/taskStore";
import { getTaskUseCase } from "../useCases/getTaskUseCase";
import { createTaskUseCase } from "../useCases/createTaskUseCase";
import { create } from "../domain/taskModel";
import { addTaskUseCase } from "../useCases/addTaskUseCase";
import { Task } from "../domain/taskEntity";

function useTaskViewController(store: TaskStore) {
  const getTasks = React.useCallback(
    function () {
      getTaskUseCase({
        loadInitialTasks: store.loadInitialTasks
      });
    },
    [store.loadInitialTasks]
  );

  const createTask = React.useCallback(
    function(task: Task['description']) {
      addTaskUseCase({
        task: { ...store.task, description: task },
        createTask: store.createTask,
        addTask: store.addTask
      })
    },
    [store.createTask, store.task, store.addTask]
  )
  return {
    tasks: store.tasks,
    isLoading: typeof store.tasks === "undefined" || store.isLoading,
    getTasks,
    createTask
  };
}

export { useTaskViewController };