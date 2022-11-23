import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../state/store/store';

interface propsTpyes{
  label : string;
  onClick? : () => void,
  count : number
}

const Button = ({label, onClick, count}:propsTpyes) => {
  return (
    <>
    <h1 data-testid="count">{count}</h1>
     <button onClick={onClick} data-testid="button">{label}</button>
    </>
   
  )
}

export default Button; 