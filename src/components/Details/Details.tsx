import React from 'react';
import { useParams } from 'react-router-dom';
import Header from './../Header/Header';
import { useSelector } from 'react-redux';
import { AppState } from "../../state/store/store";
import BackButton from './../Back-Button/BackButton';
import { Container } from '../styled-components/styled-components';
import styles from './Details.module.css'

const Details = () => {
    const {allTodos} = useSelector((state: AppState) => state.AddTodoReducer);
    console.log(allTodos);
    const params = useParams();
    console.log(params);
    return (
    <>
    <Header />
    <BackButton />
    <Container>
    <h2>Card Id is: {params.id}</h2>
    <h2 className={styles.task}>Task is: {params.id && allTodos[params.id]}</h2>
    </Container>
    </>
  )
}

export default Details