import { Dispatch } from "redux";
import { actionType } from "../Reducers/todoReducer";

import {
  TODO_ADD_REQUEST,
  TODO_ADD_SUCCESS,
  TODO_ADD_FAIL,
  TODO_DELETE_REQUEST,
  TODO_DELETE_SUCCESS,
  TODO_DELETE_FAIL,
} from "../Action-types/todoConstants";



// Action Creators
export const addTodos = (payload: string) => (dispatch: Dispatch<actionType>) => {
    // dispatch({type : TODO_ADD_REQUEST});
    dispatch({ type: TODO_ADD_SUCCESS, payload });
   // dispatch({type : TODO_ADD_FAIL});
  };



export const deleteTodos = (payload: number) => (dispatch: Dispatch<actionType>, getState:() => {AddTodoReducer: {loading : boolean, allTodos : string[]}}) => {
    // dispatch({type : TODO_ADD_REQUEST});

    console.log(getState().AddTodoReducer.allTodos);
    const filteredData = getState().AddTodoReducer.allTodos.filter((item, index) => {
      return index !== payload;
    })
    dispatch({type : TODO_DELETE_SUCCESS, payload : filteredData});

    // dispatch({type : TODO_ADD_FAIL})
  };
