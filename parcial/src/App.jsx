import './App.css'
import Card from './Components/Card'
import Form from './Components/Form'
import { useState } from 'react'

function App() {
  const [persona, setPersona] = useState({})

  const guardarPersona = (nombre, edad, red) => {
    setPersona({ nombre, edad, red})
  }
  return (
    <>
      <Form guardarPersona={guardarPersona} />
      {Object.keys(persona).length === 0 ? undefined : (
        <Card nombre={persona.nombre} 
        edad={persona.edad}
        red={persona.red} />
      )}
    </>
  )
}

export default App