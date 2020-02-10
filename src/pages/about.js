import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

export default function About () {
  return (
    <Container className='my-2'>
      <Row className='align justify full my-4 justify-content-md-center'>
        <Col className='my-5 mx-4' sm={12} md={6}>
          <Image alt='me' src='../me.jpg' roundedCircle className='profile'/>
        </Col>
        <Col>
          <h5 className='my-4'>
            I study Computer Science at <a href="https://www.amherst.edu/" rel="noreferrer noopener" target="_blank">
            Amherst College</a>.
          </h5>
          <h5 className='my-4'>
            I'm interested in Deep Learning, Web Development, and Generative Art.
          </h5>
          <h5 className='my-4'>
            I care about efficiency, durability, and design.
          </h5>
        </Col>
      </Row>
    </Container>
  );
}
