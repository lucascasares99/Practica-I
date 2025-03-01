import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './Componente/Button'
import { Filtros } from './Componente/Filtros'

function App() {
  const [count, setCount] = useState("")
console.log(count)
  return (
    <>
      <Button guardar={setCount}/>
      <Filtros count={count}/>
    </>
  )
}

export default App
