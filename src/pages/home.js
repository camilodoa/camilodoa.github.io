import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

export default function Home () {
  return (
    <Container className='my-2 full'>
      <Row className='align justify my-2 justify-content-md-center'>
        <Col lg={8}>
          <Image alt="cover" src='../cover.jpg' fluid />
        </Col>
        <Col lg={8} className="my-4">
          <h5>Hi, I'm Camilo.</h5>
        </Col>
      </Row>
    </Container>
  );
}
