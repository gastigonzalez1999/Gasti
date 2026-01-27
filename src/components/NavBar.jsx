import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';

import '../styles/NavBar.css';

function NavBar() {
  return (
    <Navbar fixed="top" className="navbar-custom navbar-light">
      <Container>
        <Navbar.Brand href="#">Gasti</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#intro">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link href="mailto:gastongonzalez2550.gg@gmail.com">
              <FiMail style={{ fontSize: 20 }} />
            </Nav.Link>
            <Nav.Link
              href="https://github.com/gastigonzalez1999"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub style={{ fontSize: 19 }} />
            </Nav.Link>
            <Nav.Link
              href="https://www.linkedin.com/in/gaston-gonzalezz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiLinkedin style={{ fontSize: 21 }} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
