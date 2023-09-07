import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import { taskReducer } from '@/app/task/data/taskReducer';

const rootReducer = combineReducers({
  task: taskReducer
});

const appStoreImplementation = configureStore({
    reducer: rootReducer, 
    middleware: [thunk] 
});

type AppRootState = ReturnType<typeof appStoreImplementation.getState>;

export { appStoreImplementation };
export type { AppRootState };