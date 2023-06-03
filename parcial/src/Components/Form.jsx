import { useState } from 'react'
import './styles.modules.css'

 function Form(props) {
  const [nombre, setNombre] = useState('')
  const [edad, setEdad] = useState(0)
  const [error, setError] = useState('')
  const [red, setRed] = useState('')

  const onChangeNombre = e => {
    setNombre(e.target.value)
  }

  const onChangeEdad = e => {
    setEdad(e.target.value)
  }

  const onChangeRed = e => {
    setRed(e.target.value)
  }  

  const handleSubmit = e => {
    e.preventDefault()

    if (nombre.trim() && red.length <= 6) {
      setError('Por favor chequea que la información sea correcta')
    } else if (nombre.length <= 3) {
      setError('El nombre debe tener al menos 3 caracteres')
    
    } else {
      setError('')  
      props.guardarPersona(nombre, edad, red)
    }
  }

  return (
    <form onSubmit={handleSubmit} className='form'>
      <label htmlFor='nombre-apellido'>Nombre</label>
      <input
        type='text'
        id='nombre-apellido'
        value={nombre}
        placeholder='Ingrese su nombre'
        onChange={onChangeNombre}
      />

      <label htmlFor='edad'>Edad</label>
      <input
        type='number'
        id='edad'
        value={edad}
        placeholder='Ingrese su edad'
        onChange={onChangeEdad}
      />
       <label htmlFor='red'>Intagram</label>
      <input
        type='text'
        id='red'
        value={red}
        placeholder='Ingresar instagram'
        onChange={onChangeRed}
      />
      <button>Enviar data 📨</button>
      {error && <p>{error}</p>}
    </form>
  )
}
export default Form