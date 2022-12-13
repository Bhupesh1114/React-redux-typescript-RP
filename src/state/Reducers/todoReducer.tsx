import {
  TODO_ADD_REQUEST,
  TODO_ADD_SUCCESS,
  TODO_ADD_FAIL,

  TODO_DELETE_SUCCESS,
  GET_ALLTODOS_REQUEST,
  GET_ALLTODOS_SUCCESS,
  GET_ALLTODOS_FAIL,
  UPDATE_TODO_SUCCESS,
  TODO_DELETE_REQUEST,
  TODO_DELETE_FAIL
} from "../Action-types/todoConstants";



export type todoPropType = {
  id? : number,
  todo : string
}


export interface initialStateTypes{   
  allTodos : todoPropType[];
  error : string,
  loading? : boolean
}


const initialStates: initialStateTypes = {
  allTodos: [],
  error: ""
};

export interface actionType {
  type: string;
  payload? : todoPropType | string | todoPropType[];
}

const GetAllTodos = (state = initialStates, {type, payload} : actionType) => {

  //  Added all the actions here only just for now 
  switch(type){                                // Merge Same actions results
    case GET_ALLTODOS_REQUEST :
      return {loading : true};
      case GET_ALLTODOS_SUCCESS: 
      return {loading : false, allTodos : payload};
      case GET_ALLTODOS_FAIL:
      return {loading : false, error : payload};
      case TODO_ADD_REQUEST:
        return { loading: true };
       case TODO_ADD_SUCCESS:
        return { loading: false, allTodos: [...state.allTodos, payload]};   
      case TODO_ADD_FAIL:
        return { loading: false, error: payload };
      // case TODO_DELETE_REQUEST: 
      // return {loading : true}
      case TODO_DELETE_SUCCESS: 
        return {loading : false, allTodos : payload};
        // case TODO_DELETE_FAIL : 
        // return {loading : false, error : payload};
      case UPDATE_TODO_SUCCESS:
        return {loading : false, allTodos : payload}
    default:
      return state;
  }
}


const AddTodoReducer = (state = initialStates, { type, payload }: actionType) => {
  switch (type) {
   
      // Writing Here only for the delete todo
      case TODO_DELETE_SUCCESS: 
      return {loading : false, allTodos : payload};

      // Writing here only for update todo
      case UPDATE_TODO_SUCCESS:
        return {loading : false, allTodos : payload}
    default:
      return state;
  }
};


const DeleteTodoReducer = (state = initialStates, {type, payload} : actionType) => {
  switch(type){
  
  default:
    return state;
  }
}
export {AddTodoReducer, GetAllTodos};
