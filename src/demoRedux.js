import { createStore } from 'redux'
function counterReducer(state=0,action){
  if(action.type == "ADD"){
    state = state + action.number;
    return state;
  }
  return state
}
let store = createStore(counterReducer)
let actionAdd = {
  type: "ADD",
  number: 10
}

console.log(store);
store.dispatch(actionAdd)
console.log(store.getState());
