import Container from 'react-bootstrap/Container';
import {Nav, Navbar, NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Link to="/">React-Bootstrap</Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="about">About Us</Link>
            <Link to="contact">Contact</Link>
       
          </Nav>
          <Nav>
            <Link to="/">More deets</Link>
            <Link to="/">
              Dank memes
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default Header;