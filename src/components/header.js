import React from 'react'
import Navbar from 'react-bootstrap/Navbar'

export default function Header() {
  return (
    <Navbar bg='white' expand='md' fixed='top'>
      <Navbar.Brand href='/'>
        <b>camilo ortiz</b>
      </Navbar.Brand>
    </Navbar>
  )
}
