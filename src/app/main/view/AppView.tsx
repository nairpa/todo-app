"use client"
import React from "react";
import { Provider } from "react-redux";
import TaskView from "../../task/view/TaskView";

import { appStoreImplementation } from "../data/appStoreImplementation";

function AppView() {
  return (
    <Provider store={appStoreImplementation}>
      <TaskView />
    </Provider>
  );
}

export default AppView;