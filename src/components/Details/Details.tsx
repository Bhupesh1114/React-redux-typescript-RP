import React from 'react';
import { useParams } from 'react-router-dom';
import Header from './../Header/Header';
import { useSelector } from 'react-redux';
import { AppState } from "../../state/store/store";
import BackButton from './../Back-Button/BackButton';
import { Container } from '../styled-components/styled-components';
import styles from './Details.module.css';
import { initialStateTypes } from '../../state/Reducers/todoReducer';


const Details = () => {
    const {allTodos}: initialStateTypes  = useSelector((state: AppState) => state.GetAllTodos);
    const params = useParams();
    const currentTodo = allTodos.find(todo => {
      return todo.id?.toString() === params.id;
    })
    return (
    <>
    <Header />
    <BackButton />
    <Container>
    <h2>Card Id is: {params.id}</h2>
    <h2 className={styles.task}>Task is: {params.id && currentTodo?.todo}</h2>
    </Container>
    </>
  )
}

export default Details