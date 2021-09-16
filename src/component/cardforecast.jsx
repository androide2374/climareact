import { Card, Col, Container } from 'react-bootstrap'
import getDayOfWeek from '../services/days'

export const CardForecast = ({ forecastday }) => {
  return (
    <div>
      <Card>
        <Card.Img
          src={`http://openweathermap.org/img/wn/${forecastday.weather[0].icon}@2x.png`}
          alt="logo"
        />
        <Card.Title>
          <Container>{getDayOfWeek(new Date(forecastday.dt * 1000))}</Container>
        </Card.Title>
        <Card.Body>
          <h5>Min: {forecastday.temp.min.toString().split('.')[0]} °</h5>
          <h5>Max: {forecastday.temp.max.toString().split('.')[0]} °</h5>
          <h6>Humedad: {forecastday.humidity} %</h6>
        </Card.Body>
      </Card>
    </div>
  )
}
