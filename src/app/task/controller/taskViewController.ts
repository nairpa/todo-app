import React from "react";
import { TaskStore } from "../domain/taskStore";
import { getTaskUseCase } from "../useCases/getTaskUseCase";
import { addTaskUseCase } from "../useCases/addTaskUseCase";
import { Task } from "../domain/taskEntity";
import { completeTaskUseCase } from "../useCases/completeTaskUseCase";

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
        task: store.task ? { ...store.task, description: task } : { id: 1, description: task, isCompleted: false },
        createTask: store.createTask,
        addTask: store.addTask
      })
    },
    [store.createTask, store.task, store.addTask]
  )

  const updateTask = React.useCallback(
    function(task: Task) {
      completeTaskUseCase({
        task: task,
        updateTask: store.updateTask,
      })
    },
    [store.updateTask]
  )

  return {
    tasks: store.tasks,
    isLoading: typeof store.tasks === "undefined" || store.isLoading,
    getTasks,
    createTask,
    updateTask,
  };
}

export { useTaskViewController };