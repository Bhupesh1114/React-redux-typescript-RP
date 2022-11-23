import React from 'react';
import styles from "./Todo.module.css";
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from "../../state/Action-creators/todoAction";
import { Link } from 'react-router-dom';
import { AiFillDelete } from "react-icons/ai";
import { IoMdOpen , IoMdCreate} from "react-icons/io";

interface propType{
    todo : string,
    index : number
}

const Todo = ({todo, index}: propType ) => {
const dispatch = useDispatch();
const {deleteTodos} = bindActionCreators(actionCreators, dispatch)
  return (
    <div className={styles.todo}>
        <h1 className={styles.title}><span>Task: </span>{todo}</h1>
        <div>
          {/* <button className={styles.btn}><IoMdCreate /></button> */}
          <button onClick={()=> deleteTodos(index)} className={styles.btn}><AiFillDelete /></button>
          <Link to={`/${index}`}>
          <button className={styles.btn}><IoMdOpen /></button>
          </Link>
         
        </div>
    </div>
  )
}

export default Todo