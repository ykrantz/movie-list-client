import { Button } from "@mui/material"

type appProps={
    title?:string;
}

const ButtonAtom =({title}:appProps):JSX.Element=>{

return <div>
    <Button>{title}</Button>
</div>
}

export default ButtonAtom