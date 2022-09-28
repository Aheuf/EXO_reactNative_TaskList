import { store } from "./store";

export const getTasks = store => store.tasksList;
export const getCompletedTasks = store => store.tasksList.filter(t => t.isCompleted);