import React from 'react';
import Container from 'react-bootstrap/Container';
import Project from "../components/project";

export default function PhotoStream () {
  let root = '../photography/';
  let imageList = ['farm fest.jpg', 'red hook.jpg', 'parade gardens, bath.jpg',
    'bath, linear.jpg', 'bath, exponential.jpg',
    'montañas.jpg', 'centered marsh.jpg', 'the shard.jpg', 'radcliffe camera.jpg', 'santa marta.jpg',
    'center and periphery.jpg',
    ];
  return (
    <Container className='mt-4 full bottom'>
      {imageList.map((path, index) => (
        <Project path={root + path} key={'photo'+index} name={path.slice(0, -4)}/>
      ))}
    </Container>
  );
}

