import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const Navbars = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
      <Container>
        <Navbar.Brand href="#home">Brand</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <NavDropdown title="categories" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">clothes</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Accesoires</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">chaussures</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Robes</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#home">about</Nav.Link>
            <Nav.Link href="#link">contact</Nav.Link>
            </Nav>
         <Nav>
          <NavDropdown title={<FontAwesomeIcon icon={faUser}/>} id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Profil</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">log out</NavDropdown.Item>
            
            </NavDropdown>
            <Nav.Link href="#cart">{<FontAwesomeIcon icon={faCartShopping}/>}</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbars;
