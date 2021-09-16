import { useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import getDayOfWeek from '../services/days'
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
        <Card.Body>
          <Card.Title>
            <h2>Clima en 5 dias</h2>
          </Card.Title>
          <Container>
            <Row>
              {forecast.map((item) => (
                <Col key={item.dt}>
                  <Card>
                    <Card.Img
                      src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                      alt="logo"
                    />
                    <Card.Title>
                      <Container>
                        {getDayOfWeek(new Date(item.dt * 1000))}
                      </Container>
                    </Card.Title>
                    <Card.Body>
                      <h5>Min: {item.temp.min.toString().split('.')[0]} °</h5>
                      <h5>Max: {item.temp.max.toString().split('.')[0]} °</h5>
                      <h6>Humedad: {item.humidity} %</h6>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
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
export default Forecast
