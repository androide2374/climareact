import { useEffect, useState } from 'react'
import { GetCurrent } from '../services/weather'

const CurrentWeather = ({ localidad }) => {
  const [current, setCurrent] = useState({})
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(false)
    async function load() {
      const data = await GetCurrent(localidad)
      setCurrent(data)
      setVisible(true)
    }
    load()
  }, [localidad])
  return (
    <div>
      {visible ? (
        <>
        <h2>Clima actual</h2>
          <p>{current.name}</p>
          {current.weather.map((wea, index) => (
            <div key={index}>
              <p>{wea.description}</p>
              <img
                src={`http://openweathermap.org/img/wn/${wea.icon}@2x.png`}
                title={wea.main}
                alt={wea.main}
              />
            </div>
          ))}
          <p>{current.main.temp.toString().split('.')[0]}°</p>
        </>
      ) : (
        <p>Cargando</p>
      )}
    </div>
  )
}

export default CurrentWeather
