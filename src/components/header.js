import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function Header () {
  return (
    <Navbar bg='white' expand='md' fixed='top' className='mb-4'>
      <Navbar.Brand href='/'>
        <b>Camilo Ortiz</b>
      </Navbar.Brand>
      <Navbar.Toggle/>

      <Navbar.Collapse>
        <Nav>
          <Nav.Link href='/work'>
            work
          </Nav.Link>

          <Nav.Link href='/projects'>
            projects
          </Nav.Link>

          <Nav.Link href='/photos'>
            photography
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
