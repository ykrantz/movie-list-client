
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import React, { useState } from "react";

type appProps={
  label?:string;
}




const InputTextAtom =({label}:appProps):JSX.Element=>{

    const [inputText,setInputText]=useState("");

//    const handleInputText= (text:string):void =>{
   const handleInputText= (e:React.ChangeEvent<HTMLInputElement>):void =>{
    const text:string= e.target.value
    setInputText(text)
   }
   console.log(inputText);
   
// TODO: fix the varinat

return <Box
component="form"
sx={{
  '& > :not(style)': { m: 1, width: '25ch' },
}}
noValidate
autoComplete="off"
>
<TextField id="outlined-basic" label={label} variant="outlined" value={inputText} onChange={handleInputText} />

</Box>

}

export default InputTextAtom

