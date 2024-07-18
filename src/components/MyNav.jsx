import { Navbar, Nav, Container, Form } from 'react-bootstrap'

const MyNav = ({ searchQuery, setSearchQuery }) => {
  return (
    <Navbar
      expand="lg"
      className="mb-3"
    >
      <Container fluid>
        <Navbar.Brand href="#">EpiBooks</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Browse</Nav.Link>
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
