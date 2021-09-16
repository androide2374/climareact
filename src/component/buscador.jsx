import { useEffect, useState } from 'react'
import CurrentWeather from './current'
import Forecast from './forecast'
import ciudades from '../services/ciudades.json'
import { Card, Col, Row, Form, Button } from 'react-bootstrap'

const Buscador = () => {
  const [localidad, setLocalidad] = useState('')
  const [currentCity, setCurrentCity] = useState('')

  const city = window.localStorage.getItem('city')
  const Buscar = async (event) => {
    event.preventDefault()
    const { target } = event
    setLocalidad(target.localidad.value)
  }
  useEffect(() => {
    localidad === '' ? setCurrentCity(city) : setCurrentCity(localidad)
  }, [localidad])
  return (
    <>
      <Form onSubmit={Buscar} className="pt-3">
        <Row>
          <Col sm="10">
            <Form.Select aria-label="Seleccione una localidad" name="localidad">
              {ciudades.map((item) => (
                <option key={item.name} value={item.name}>
                  {item.name === '' ? 'Ubicacion Actual' : item.name}
                </option>
              ))}
            </Form.Select>
          </Col>
          <Col sm="2">
            <div className="d-grid gap-2">
              <Button type="submit">Buscar</Button>
            </div>
          </Col>
        </Row>
      </Form>
      <Card.Title sm="12" className="pt-3">
        <h2>{currentCity}</h2>
      </Card.Title>
      <Row>
        <Col sm="3" className="pt-2">
          <Card>
            <CurrentWeather localidad={localidad} />
          </Card>
        </Col>
        <Col sm="9" className="pt-2">
          <Card>
            <Forecast localidad={localidad} />
          </Card>
        </Col>
      </Row>
    </>
  )
}
export default Buscador
