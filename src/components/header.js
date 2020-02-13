import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Link from 'react-router-dom/Link';

export default function Header () {
  return (
    <Navbar bg='white' expand='md' fixed='top' className='mb-4'>
      <Navbar.Brand href='/'>
        <b>camilo ortiz</b>
      </Navbar.Brand>

      <Nav>
        <Link to='/photos'>
          photography
        </Link>
      </Nav>
    </Navbar>
  );
}
