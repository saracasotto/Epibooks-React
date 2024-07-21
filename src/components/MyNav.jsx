import { Navbar, Nav, Container, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom';



const MyNav = ({ searchQuery, setSearchQuery }) => {
  return (
    <Navbar
      expand="lg"
      className="mb-3 text-white"
      style={{
        backgroundColor: '#22908c',
        opacity: '0.9'}}
    >
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className='text-white fw-bold'>EpiBooks</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className='fw-bold'>Home</Nav.Link>
            <Nav.Link href="#" className='text-white fw-bold'>About</Nav.Link>
            <Nav.Link href="#" className='text-white fw-bold'>Browse</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Form.Group>
              <Form.Control
                type="search"
                placeholder="Find a book"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </Form.Group>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MyNav
