import { useEffect, useState } from 'react'
import { GetForecast } from '../services/forecast'

const Forecast = ({ localidad }) => {
  const [forecastdata, setForecastdata] = useState({})
  const [forecast, setForecast] = useState([])
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(false)
    const load = async () => {
      const forecastres = await GetForecast(localidad)
      const { forecast } = forecastres
      setForecast(forecast)
      setForecastdata(forecastres)
      setVisible(true)
    }
    load()
  }, [localidad])
  console.log(forecast)

  return (
    <>
      {visible ? (
        <div>
          <h2>Clima en 5 dias</h2>
          {localidad}
          {forecast.map((item) => (
            <div key={item.dt}>
              <hr />
              <img
                src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                title={item.weather[0].description}
                alt={item.weather[0].main}
              />
              <p>Min: {item.temp.min.toString().split('.')[0]} °</p>
              <p>Max: {item.temp.max.toString().split('.')[0]} °</p>
              <p>Humedad: {item.humidity} %</p>
              <p>
                {new Date(item.dt * 1000).toLocaleDateString('en-GB', {
                  year: 'numeric',
                  month: 'numeric',
                  day: 'numeric',
                })}
              </p>
            </div>
          ))}
        </div>
      ) : (
        'cargando data'
      )}
    </>
  )
}
export default Forecast
