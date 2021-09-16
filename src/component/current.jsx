import { useEffect, useState } from 'react'
import { Card, Container, Button, Row, Col } from 'react-bootstrap'
import { GetCurrentCity } from '../services/currentcity'
import getDayOfWeek from '../services/days'
import { GetCurrent } from '../services/weather'

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
            <Card key={index}>
              <Row className="align-items-end">
                <Col sm="7" className="align-bottom">
                  <Card.Img
                    src={`http://openweathermap.org/img/wn/${wea.icon}@2x.png`}
                    alt="logo"
                  />
                </Col>
                <Col sm="5" className="align-bottom">
                  <h2>{current.main.temp.toString().split('.')[0]}°</h2>
                </Col>
              </Row>
              <Card.Title>
                <Container>HOY</Container>
              </Card.Title>
              <Card.Body>
                <h5>Min: 1 °</h5>
                <h5>Max: 2 °</h5>
                <h6>Humedad: 3 %</h6>
              </Card.Body>
            </Card>
          ))}
        </Card.Body>
      ) : (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="sr-only"></span>
          </div>
        </div>
      )}
    </>
  )
}

export default CurrentWeather
