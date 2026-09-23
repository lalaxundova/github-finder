import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaGithub } from "react-icons/fa";
const Header = () => {
  return (

    <Navbar expand="lg" className="bg-dark navbar-dark">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Navbar.Brand href="https://github.com" target='_blank' > <FaGithub className='mb-1' />  GitHub Finder</Navbar.Brand>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

export default Header