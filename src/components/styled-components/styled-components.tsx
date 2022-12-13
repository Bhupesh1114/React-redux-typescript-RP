import styled from "styled-components";



export const Button = styled.button`
border : 1px solid gray;
padding : 10px 15px;
font-size : 20px;
border-radius : 5px;
cursor : pointer;
color : gray;
background-color : #fff;
margin:0px 5px;
&:hover{
    background-color : #000;
    color : #fff;
}
`

type containerPropsTypes = {
    grid? : string
}

export const Container = styled.div<containerPropsTypes>`
max-width: 1320px;
margin: 20px auto;
${props => props.grid && `
width: 100%;
margin-top: 40px;
display: grid;
grid-template-columns: repeat(4,1fr);
gap: 20px;
`}
`

type messagePropsTypes = {
    error? : string,
    success? : string
}

export const Message = styled.h2<messagePropsTypes>`
${props => props.error && `
max-width : 1320px;
color: red;
transition: 0.3s ease-in-out;
width: 100%;
text-align: center;
margin: 0px auto 10px auto;
padding: 10px 0px;
background-color: rgb(249, 184, 184);
`}

${props => props.success && `
max-width : 1320px;
transition: 0.3s ease-in-out;
background-color: rgb(208, 247, 208);
color: green;
width: 100%;
text-align: center;
margin: 0px auto 10px auto;
padding: 10px 0px;
`}
`
