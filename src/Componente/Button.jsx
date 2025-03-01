import { useRef } from "react"

export const Button = ({guardar}) => {

    const inputref=useRef() 

return <>
<input ref={inputref}type="text" />

<button onClick={()=> {guardar(inputref.current.value)}}>Buscar</button>

</>
}