import { ADD_TASK, DELETE_TASK, TOGGLE_TASK } from "./actionsType"

export function addTask(title){
  return{
    type:ADD_TASK,
    payload:{
      title
    }
  }
}

export const toggleTask = (id) => ({
  type: TOGGLE_TASK,
  payload:{id}
})

export const deleteTask = (id) => ({
  type: DELETE_TASK,
  payload:{id}
})