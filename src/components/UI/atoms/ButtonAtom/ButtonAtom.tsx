import { Button } from "@mui/material"

type appProps={
    title?:string;
    buttonFunc?:()=>void;
    
}

const ButtonAtom =({title,buttonFunc}:appProps):JSX.Element=>{

return <div>
    <Button onClick={buttonFunc}>{title}</Button>
</div>
}

export default ButtonAtom