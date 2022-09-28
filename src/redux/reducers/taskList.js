import { ADD_TASK, DELETE_TASK, TOGGLE_TASK } from "../actions/actionsType";

const initialState = [{id:1,title:'init',isCompleted:false}]

export const tasksList = (state = initialState, action) => {
  switch(action.type){
    case ADD_TASK:
    return [...state,{
      id:new Date().getTime(),
      title: action.payload.title,
      isCompleted:false
    }];
    case TOGGLE_TASK:
      let newState = []
      state.forEach(t => {
        if(t.id === action.payload.id){
          newState.push({...t, isCompleted: !t.isCompleted})
          return
        }
        newState.push(t)
      })
      return newState;
    case DELETE_TASK:
      console.log(action.payload.id)
      return state.filter(t => t.id !== action.payload.id)

    default: return state;
  }
}