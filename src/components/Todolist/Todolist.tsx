import React, { useEffect, useState } from "react";
import styles from "./Todolist.module.css";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../../state/store/store";
import Todo from "./Todo";
import { initialStateTypes } from "../../state/Reducers/todoReducer";
import { bindActionCreators } from "redux";
import * as actionCreators from "../../state/Action-creators/todoAction";
import useInput from './../../custom-hooks/useInput';
import { Container } from "../styled-components/styled-components";


const Todolist = () => {
  const {inputValue, resetInput, handleChange} = useInput("");
  // const [inputValue, setInputValue] = useState<string>("");                   // replaced by custom-hook(useInput)
  const [displayMessage, setDisplayMessage] = useState(false);
  const [displayError, setDisplayError] = useState(false);

  const { allTodos}: initialStateTypes = useSelector(
    (state: AppState) => state.AddTodoReducer
  );
  const dispatch = useDispatch();
  const {addTodos} = bindActionCreators(actionCreators, dispatch)

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {       // replaced by custom-hook(useInput)
  //   setInputValue(event.target.value);
  // };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputValue.trim().length === 0) {
      setDisplayError(true);
    } else {
      inputValue.trim() && addTodos(inputValue); 
      setDisplayError(false);
      // setInputValue("");                   // replaced by custom-hook(useInput)
      resetInput()
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

  return (
    <div className={styles.todolist}>
      <h2 className={styles.error}>{displayError && "Please add a task"}</h2>
      <h2 className={styles.message}>{displayMessage && "Task added successfully"}</h2>
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
          value="Add"
        />
      </form>
      <Container className={styles.todoContainer}>
        {allTodos.map((todo, index) => {
          return <Todo key={index} todo={todo} index={index} />;
        })}
      </Container>
    </div>
  );
};

export default Todolist;
