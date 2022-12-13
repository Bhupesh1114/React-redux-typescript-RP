import React, { useEffect, useState } from "react";
import styles from "./Todolist.module.css";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../../state/store/store";
import Todo from "./Todo";
import { initialStateTypes } from "../../state/Reducers/todoReducer";
import { bindActionCreators } from "redux";
import * as actionCreators from "../../state/Action-creators/todoAction";
// import useInput from './../../custom-hooks/useInput';
import { Container, Message } from "../styled-components/styled-components";
import Loading from "../Loading/Loading";


const Todolist = () => {
  // const {inputValue, resetInput, handleChange} = useInput("");
  const [inputValue, setInputValue] = useState<string>("");                   
  const [displayMessage, setDisplayMessage] = useState<boolean>(false);
  const [displayError, setDisplayError] = useState(false);
  const [isDisable, setIsDisable] = useState(0);

  const { allTodos, loading, error}: initialStateTypes = useSelector(
    (state: AppState) => state.GetAllTodos
  );

  const dispatch = useDispatch();
  const { getAllTodos, addTodos,updateTodos} = bindActionCreators(actionCreators, dispatch)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {       
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
 
    if(isDisable){
      console.log(isDisable)
      updateTodos(isDisable, inputValue);
      setInputValue("");
      setIsDisable(0);
      return;
    }

    if (inputValue.trim().length === 0) {
      setDisplayError(true);
    } else {
      getAllTodos();              // This not right, just added there was one error in the reducer while adding the data 
      inputValue.trim() && addTodos({todo : inputValue}); 
     
      setDisplayError(false);
      setInputValue("");                   
      // resetInput()
      setDisplayMessage(true);
    }
  };


  useEffect(() => {
   const timer = setTimeout(() => {
    setDisplayMessage(false);
   }, 4000);
   return () => {
    clearTimeout(timer);
   }
  }, [displayMessage])

  useEffect(() => {
    getAllTodos();
  }, [])

  return ( 
    <>
    {error ? <Message error="error">{error}</Message> : <div className={styles.todolist}>
      {displayError && <Message error="error">Please add a task</Message>}
      {displayMessage && <Message success="success">Task added successfully</Message>}
      
      <h1 className={styles.todolist_title}>Todolist</h1>

      <form action="" className={styles.todolist_form} onSubmit={handleSubmit}>
        <input
          className={styles.text_input}
          type="text"
          placeholder="Enter task"
          value={inputValue}
          onChange={handleChange}
          autoFocus
        />
        <input
          data-testid="add-button"
          className={styles.text_submit}
          type="submit"
          value={isDisable ? "Update" : "Add"}
        />
      </form>
      <Container grid="grid">
        {loading ? <Loading /> : allTodos?.map((todo, index) => {
          const allProps = {todo, index, setInputValue, isDisable, setIsDisable}
          return <Todo key={index} {...allProps}/>;
        })}
      </Container>
    </div>}
        
    </>

  );
};

export default Todolist;
