import { Outlet, Link } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Layout = () => {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="Navbar">
      <Container className="Container">
        <Navbar.Brand><Link to="/" className="brand">TRIVIA</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link to="/" className="nav-item">Home</Link></Nav.Link>
            <Nav.Link><Link to="/TFQuestions" className="nav-item">True/False</Link></Nav.Link>
            <Nav.Link><Link to="/MultiQuestions" className="nav-item">Multiple Choice</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <Outlet />
    </>
  );
};

export default Layout;