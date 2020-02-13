import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

export default function Home () {
  let root = '../home/';
  return (
    <Container className='my-2 full'>
      <Row className='align justify my-2 justify-content-md-center bottom'>
        <Col lg={8} className='top'>
          <Image alt="cover" src={root + 'cover.jpg'} fluid />
        </Col>
        <Col lg={8}>
          <h5 className='my-4'>Hi, I'm Camilo.</h5>
          <h5 className='my-4'>
            I study Computer Science at <a href="https://www.amherst.edu/" rel="noreferrer noopener" target="_blank">
            Amherst College</a>.
          </h5>
          <h5 className='my-4'>
            I'm interested in Deep Learning, Web Development, and Generative Art.
          </h5>
          <h5 className='my-4'>
            Say hi! :-)
          </h5>
        </Col>
      </Row>
    </Container>
  );
}
