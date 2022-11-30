import React from 'react';
import styles from "./Todo.module.css";
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from "../../state/Action-creators/todoAction";
import { Link } from 'react-router-dom';
import { AiFillDelete } from "react-icons/ai";
import { IoMdOpen , IoMdCreate} from "react-icons/io";
import { Button } from '../styled-components/styled-components';
import useInput from '../../custom-hooks/useInput';
import { todoPropType } from '../../state/Reducers/todoReducer';



type propType = {
    todo : todoPropType,
    index : number,
    setInputValue :  (value: string) => void;
    isDisable : number,
    setIsDisable : (value: number) => void;
}

const Todo = ({todo : {id,todo}, setInputValue, setIsDisable, isDisable}: propType ) => {
const dispatch = useDispatch();
const {deleteTodos} = bindActionCreators(actionCreators, dispatch);

  const handleEdit = (todo: string, index: number) => {
    setInputValue(todo);
    setIsDisable(index);
  }
  

  return (
    <div className={styles.todo}>
        <h1 className={styles.title}><span>Task: </span>{todo}</h1>
        <div>
          <Button disabled={isDisable === 0 ? false : true} onClick={() => id && handleEdit(todo, id)} className={styles.btn}><IoMdCreate /></Button>
          <Button disabled={isDisable === 0 ? false : true} onClick={()=> id && deleteTodos(id)} className={styles.btn}><AiFillDelete /></Button>
          {isDisable ?  <Button disabled={isDisable === 0 ? false : true} className={styles.btn}><IoMdOpen /></Button> : <Link to={`${id} && /${id}`}>
          <Button disabled={isDisable === 0 ? false : true} className={styles.btn}><IoMdOpen /></Button>
          </Link>
         }
          
        </div>
    </div>
  )
}

export default Todo