import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'

export default function Footer () {
  return (
    <Navbar bg='white' fixed='bottom'>
      <Nav>
        <Nav.Link href='mailto: camilodortiz@gmail.com'>
          mail
        </Nav.Link>

        <Nav.Link href='https://www.linkedin.com/in/camilodortiz/'>
          linkedin
        </Nav.Link>

        <Nav.Link href='https://github.com/camilodoa'>
          github
        </Nav.Link>

        <Nav.Link href='https://twitter.com/camilodoa'>
          twitter
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}
