import React from "react";
import { useNavigate } from "react-router-dom";
import Header from './../Header/Header';
import BackButton from './../Back-Button/BackButton';
import { Container } from "../styled-components/styled-components";


const About = () => {
  return (
    <>
    <Header />
    <BackButton />
    <Container>
    <h1>About</h1>
    </Container>
    </>
  );
};

export default About;
