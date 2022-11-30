import React from 'react';
import { useState } from 'react';


const useInput = (initialValue : string) => {
   const [inputValue, setInputValue] = useState(initialValue);

   const resetInput = () => {
    setInputValue("");
   }

   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
   }

   return {inputValue, resetInput, handleChange, setInputValue};
}

export default useInput;