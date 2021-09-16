import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

export const CardCurrent = ({ current, weather }) => {
  return (
    <Card>
      <Row className="align-items-end">
        <Col md="7" className="align-bottom">
          <Card.Img
            src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
            alt="logo"
          />
        </Col>
        <Col md="5" className="align-bottom">
          <h2>{current.main.temp.toString().split('.')[0]}°</h2>
        </Col>
      </Row>
      <Card.Title>
        <Container>HOY</Container>
      </Card.Title>
      <Card.Body>
        <h5>Min: {current.main.temp_min.toString().split('.')[0]} °</h5>
        <h5>Max: {current.main.temp_max.toString().split('.')[0]} °</h5>
        <h6>Humedad: {current.main.humidity} %</h6>
      </Card.Body>
    </Card>
  )
}
