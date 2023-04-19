import { type } from '@testing-library/user-event/dist/type';
import { combineReducers } from 'redux';
import {createStore ,applyMiddleware,bindActionCreators} from 'redux'
const All=()=>{
      //Store
     
      //Actions
      const increament = ()=>{
            return{
                  type : "INCREAMENT"
            }
      } 
      const decreament =()=>{
            return{
                  type : "DECREAMENT"
            }
      }

      //Reducers
const CounterReducer = (state = 0,actions)=>{
      switch (actions.type) {
            case "INCREAMENT":
                  return state+1;
            case "DECREAMENT":
                  return state-1;
            default:
                  return state;
      }
}
let store = createStore(CounterReducer);
store.subscribe(()=>console.log(store.getState()))
store.dispatch(increament());
}
export default All;