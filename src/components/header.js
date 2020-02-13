import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function Header () {
  return (
    <Navbar bg='white' expand='md' fixed='top' className='mb-4'>
      <Navbar.Brand href='/'>
        <b>Camilo Ortiz</b>
      </Navbar.Brand>

      <Nav>
        <Nav.Link href='/photos'>
          photography
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}
