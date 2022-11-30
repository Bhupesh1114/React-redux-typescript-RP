import { Dispatch } from "redux";
import { actionType, todoPropType } from "../Reducers/todoReducer";
import axios from "axios";

import {
  TODO_ADD_REQUEST,
  TODO_ADD_SUCCESS,
  TODO_ADD_FAIL,
  TODO_DELETE_REQUEST,
  TODO_DELETE_SUCCESS,
  TODO_DELETE_FAIL,
  GET_ALLTODOS_REQUEST,
  GET_ALLTODOS_SUCCESS,
  GET_ALLTODOS_FAIL,
  UPDATE_TODO_SUCCESS,
  UPDATE_TODO_REQUEST,
  UPDATE_TODO_FAIL,
} from "../Action-types/todoConstants";




// Action Creators
export const getAllTodos = () => (dispatch:Dispatch<actionType>) => {
 dispatch({type : GET_ALLTODOS_REQUEST});
 axios.get('http://localhost:3000/allTodos')
 .then(function (response) {
   console.log(response.data);
   dispatch({type : GET_ALLTODOS_SUCCESS, payload : response.data})
 })
 .catch(function (error) {
   console.log(error);
   dispatch({
    type : GET_ALLTODOS_FAIL,
    payload : error.message ? error.message : "Internal Server Error"
  })
 })
}


export const addTodos = (data : todoPropType) => (dispatch: Dispatch<actionType>) => {
    dispatch({type : TODO_ADD_REQUEST});

    axios.post("http://localhost:3000/allTodos", data)
    .then(function(response){
      console.log(response);
      dispatch({ type: TODO_ADD_SUCCESS, payload : response.data });   
    })
    .catch(function(error){
      console.log(error);
      dispatch({type : TODO_ADD_FAIL,  payload : error.message ? error.message : "Internal Server Error"});
    })

  };



export const deleteTodos = (payload: number) => (dispatch: Dispatch<actionType>, getState:() => {GetAllTodos: {loading : boolean, allTodos : todoPropType[]}}) => {
  dispatch({type : TODO_DELETE_REQUEST});
  axios.delete(`http://localhost:3000/allTodos/${payload}`)
 .then(function(response){
  console.log(getState().GetAllTodos.allTodos);
  const filteredData = getState().GetAllTodos.allTodos.filter(todo => {
    return todo.id !== payload;
  })
  dispatch({type : TODO_DELETE_SUCCESS, payload : filteredData});
 })
.catch(function(error){
  console.log(error);
  dispatch({type : TODO_DELETE_FAIL})
})
  };



  export const updateTodos = (payload1:number, payload2:string) => (dispatch: Dispatch<actionType>, getState:() => {GetAllTodos: {loading : boolean, allTodos : todoPropType[]}}) => {
    console.log(payload2);
    dispatch({type : UPDATE_TODO_REQUEST});

    axios.patch(`http://localhost:3000/allTodos/${payload1}`, {todo : payload2})
    .then(function(response){
      console.log(response)
      const updatedTodos = getState().GetAllTodos.allTodos.map((todo) => {
        if(todo.id === payload1){
         return {...todo,todo : payload2};
        }else{
         return todo;
        }
       });
       console.log(updatedTodos)
       dispatch({ type: UPDATE_TODO_SUCCESS, payload : updatedTodos});
    })
    .catch(function(error){
      console.log(error);
      dispatch({type : UPDATE_TODO_FAIL});
    })
  };
