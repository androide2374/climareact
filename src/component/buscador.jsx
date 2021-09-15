import { useState } from 'react'
import CurrentWeather from './current'
import Forecast from './forecast'

const Buscador = () => {
  const [localidad, setLocalidad] = useState('')

  const Buscar = async (event) => {
    event.preventDefault()
    setLocalidad(event.target.localidad.value)

  }
  return (
    <>
      <form onSubmit={Buscar}>
        <input
          type="search"
          name="localidad"
        />
        <input type="submit" value="Buscar" />
      </form>
      <CurrentWeather localidad={localidad} />
      <Forecast localidad={localidad} />
    </>
  )
}
export default Buscador
