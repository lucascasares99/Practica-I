import { useEffect, useState } from "react"


export const Filtros = ({count}) => {
const [personajes,setpersonajes]= useState ([])

const obtenerPersonajes= async ()=>{

let response = await fetch ("https://rickandmortyapi.com/api/character/?name=" +count)
let data = await response.json()
setpersonajes(data.results)
}

useEffect (()=>{
obtenerPersonajes()
}, [count])

return <>
 {personajes.map((element, index)=>{
 return <div key={index}>
<h3>{element.name}</h3>
<img src={element.image} alt="" />
<h3>element.gender</h3>
<h4>element.species</h4>
<h5>element,status</h5>
</div>
 })  }
 </>
}


    