import {
  TODO_ADD_REQUEST,
  TODO_ADD_SUCCESS,
  TODO_ADD_FAIL,

  TODO_DELETE_SUCCESS
} from "../Action-types/todoConstants";


export interface initialStateTypes{   
  allTodos : string[];
  error : string
}


const initalState: initialStateTypes = {
  allTodos: [],
  error: ""
};

export interface actionType {
  type: string;
  payload : string | string[]; 
}


const AddTodoReducer = (state = initalState, { type, payload }: actionType) => {
  switch (type) {
    case TODO_ADD_REQUEST:
      return { loading: true };
    case TODO_ADD_SUCCESS:
      return { loading: false, allTodos: [...state.allTodos, payload]};
    case TODO_ADD_FAIL:
      return { loading: false, error: payload, allTodos : [...state.allTodos] };

      // Writing Here only for the delete
      case TODO_DELETE_SUCCESS: 
      return {loading : false, allTodos : payload};
    default:
      return state;
  }
};


const DeleteTodoReducer = (state = initalState, {type, payload} : actionType) => {
  switch(type){


    
  }
}
export {AddTodoReducer};
