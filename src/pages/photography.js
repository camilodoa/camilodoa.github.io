import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

export default function Photography () {
  let root = '../photography/';
  let imagelist = ['IMG_1388.jpg', 'IMG_5552.JPG', 'ORTIZ_RURAL_IMG3.JPG',
    'ORTIZ_URBAN1.jpg', 'ORTIZ_URBAN3.JPG',
    'IMG_1911.JPG', 'IMG_1578.JPG', 'IMG_2127.JPG', 'ORTIZ_URBAN_2.jpg',
    'ORTIZ_RURAL_IMG1.JPG', 'IMG_1607.JPG',
    'IMG_4467.JPG', 'IMG_4103.JPG', 'IMG_3445.JPG',
    ];
  return (
    <Container className='mt-4 full'>
      {imagelist.map((i, index) => (
        <Photo src={root + i} key={'photo'+index}/>
      ))}
    </Container>
  );
}

function Photo ({src}) {
  return (
    <Row className='align justify my-2 justify-content-md-center'>
      <Col lg={8} className='top bottom'>
        <Image alt="photo" src={src} fluid />
      </Col>
    </Row>
  )
};
