import { useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { GetForecast } from '../services/forecast'
import { CardForecast } from './cardforecast'
import { Spinner } from './spinner'

const Forecast = ({ localidad }) => {
  const [forecast, setForecast] = useState([])
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(false)
    const load = async () => {
      const forecastres = await GetForecast(localidad)
      const { forecast } = forecastres
      setForecast(forecast)
      setVisible(true)
    }
    load()
  }, [localidad])

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
                  <CardForecast forecastday={item} />
                </Col>
              ))}
            </Row>
          </Container>
        </Card.Body>
      ) : (
        <Spinner />
      )}
    </>
  )
}
export default Forecast
