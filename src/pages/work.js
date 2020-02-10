import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Work () {
  return (
    <Container className='my-4 '>
      <Row className='align justify my-4 full'>
        <Col className='mt-5' lg={8}>
          <h5 className='mt-5'>
            I'm currently a research assistant at <a href="http://www.cs.ox.ac.uk/"
            rel="noopener noreferrer" target="_blank">Oxford</a>'s
            Department of Computer Science, working on Professor <a href="https://www.cs.ox.ac.uk/michael.benedikt/"
            rel="noopener noreferrer" target="_blank">Michael Benedikt</a>'s <a href="http://www.cs.ox.ac.uk/projects/pdq/home.html"
            rel="noopener noreferrer" target="_blank">PDQ</a> (Proof-Driven Query) planning application. There, I am
             developing a full-stack web application that will provide an interface
             for programmers to generate and save efficient query-plans for
             semantically-interconnected datasources.
          </h5>
        </Col>
        <Col className='align justify my-4' lg={8}>
          <h5>
            Outside of Computer Science, I'm greatly interested
            in the art world. In 2018, I was involved in the development of <a href="https://bampfa.org/program/dimensionism-modern-art-age-einstein"
            rel="noopener noreferrer" target="_blank">Dimensionism</a>,
            an exhibition that analyzed the influence of science,
            specifically modern physics, on the artistic processes of the
            early 20th century. Recently, it appeared in <a href="https://www.forbes.com/sites/jonathonkeats/2019/02/28/dimensionism/#101870147b0f"
            rel="noopener noreferrer" target="_blank">Forbes Magazine</a>.
          </h5>
        </Col>
      </Row>
    </Container>
  );
}
