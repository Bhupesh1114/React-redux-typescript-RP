import styled from "styled-components"


export const Button = styled.button`
border : 1px solid gray;
padding : 10px 15px;
font-size : 20px;
border-radius : 5px;
margin : 30px 50px;
cursor : pointer;
color : gray;
background-color : #fff;
&:hover{
    background-color : #000;
    color : #fff;
}
`

export const Container = styled.div`
max-width: 1320px;
margin: auto;
`
