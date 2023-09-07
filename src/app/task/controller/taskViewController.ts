import React from "react";
import { TaskStore } from "../domain/taskStore";
import { getTaskUseCase } from "../useCases/getTaskUseCase";

function useTaskViewController(store: TaskStore) {
  const getTasks = React.useCallback(
    function () {
      getTaskUseCase({
        loadInitialTasks: store.loadInitialTasks
      });
    },
    [store.loadInitialTasks]
  );

  return {
    tasks: store.tasks,
    isLoading: typeof store.tasks === "undefined" || store.isLoading,
    getTasks,
  };
}

export { useTaskViewController };