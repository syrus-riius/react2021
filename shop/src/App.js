import { Navbar, Container,Nav, NavDropdown, Button } from 'react-bootstrap';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">SYRUS X NIKE</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="jumbotron background">
        <div className="bg-light p-5 rounded-lg m-3 bg-opacity-10">
          <h1 className="display-4">20% Off 2021 w/f</h1>
          <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
          <hr className="my-4" />
          <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
          <Button className="btn btn-primary btn-lg" href="#" role="button">Learn more</Button>
        </div>
      </div>


      <div className="container">
        <div className="row">
          <div className="col-md-4">dddd</div>
          <div className="col-md-4">dddd</div>
          <div className="col-md-4">dddd</div>
        </div>
      </div>
    </div>
  );
}

export default App;
