import { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import { GetCurrentCity } from '../services/currentcity'
import { GetCurrent } from '../services/weather'
import { CardCurrent } from './cardcurrent'
import { Spinner } from './spinner'

const CurrentWeather = ({ localidad }) => {
  const [current, setCurrent] = useState({})
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(false)
    async function load() {
      const data = await GetCurrent(localidad)
      await GetCurrentCity()
      setCurrent(data)
      setVisible(true)
    }
    load()
  }, [localidad])
  return (
    <>
      {visible ? (
        <Card.Body>
          <Card.Title>
            <h2>Clima actual</h2>
          </Card.Title>
          {current.weather.map((wea, index) => (
            <CardCurrent key={index} current={current} weather={wea} />
          ))}
        </Card.Body>
      ) : (
        <Spinner />
      )}
    </>
  )
}

export default CurrentWeather
