import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

export default function Work () {
  return (
    <Container className='my-2'>
      <Row className='align justify full my-4 justify-content-md-center'>
        <Col className='mx-4 top'>
          <Image alt='me' src='../me.jpg' roundedCircle className='profile'/>
        </Col>
        <Col className='my-4'>
          <h5 className='my-4'>
            I was recently a research assistant at <a href="http://www.cs.ox.ac.uk/"
            rel="noopener noreferrer" target="_blank">Oxford</a>'s
            Department of Computer Science, working on Professor <a href="https://www.cs.ox.ac.uk/michael.benedikt/"
            rel="noopener noreferrer" target="_blank">Michael Benedikt</a>'s <a href="http://www.cs.ox.ac.uk/projects/pdq/home.html"
            rel="noopener noreferrer" target="_blank">PDQ</a> (Proof-Driven Query) planning application. There, I
             developed a full-stack <a href="http://pdq-webapp.cs.ox.ac.uk/react-ui"
             rel="noopener noreferrer" target="_blank">web application</a> that provides an interface
             for programmers to generate and save efficient query-plans for
             semantically-interconnected datasources. Next Fall, I'll be starting
             as a Software Engineer for <a href="https://www.jpmorgan.com/country/US/en/jpmorgan"
             rel="noopener noreferrer" target="_blank">JPMorgan Chase & Co.</a>
          </h5>
          <h5 className='my-4'>
            Outside of computer science, I'm greatly interested
            in the art world. In 2018, I was involved in the development of <a href="https://bampfa.org/program/dimensionism-modern-art-age-einstein"
            rel="noopener noreferrer" target="_blank">Dimensionism</a>,
            an exhibition that analyzed the influence of science,
            specifically modern physics, on the artistic processes of the
            early 20th century. Jonathon Keats wrote about it for <a href="https://www.forbes.com/sites/jonathonkeats/2019/02/28/dimensionism/#101870147b0f"
            rel="noopener noreferrer" target="_blank">Forbes Magazine</a>.
          </h5>
        </Col>
      </Row>
    </Container>
  );
}
