import { Card, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import Buscador from './component/buscador'

function App() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>Desafio Clima React</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Container>
      </Navbar>
      <Container className="pt-2">
        <Card>
          <Card.Body>
            <Buscador />
          </Card.Body>
        </Card>
      </Container>
    </>
  )
}

export default App
