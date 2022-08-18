import { Input } from "@mui/material";
import React, { useState } from "react";

type appProps={
    placeHolder?:string;
}

const InputAtom =({placeHolder}:appProps):JSX.Element=>{

    const [inputText,setInputText]=useState("");

//    const handleInputText= (text:string):void =>{
   const handleInputText= (e:React.ChangeEvent<HTMLInputElement>):void =>{
    const text:string= e.target.value
    setInputText(text)
   }
   console.log(inputText);
   

return <div>
    <Input placeholder={placeHolder} value={inputText} onChange={handleInputText}></Input>
</div>
}

export default InputAtom