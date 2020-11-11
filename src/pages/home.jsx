import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Project from "../components/project";

export default function Home () {
  let images = '../img/';

  return (
    <Container className='my-2 top mb-4 pb-4'>
      <Row className="my-4 top justify-content-md-center">
      </Row>
      <Row className='justify  my-4 justify-content-md-center'>
        <Col md={'8'} className='mx-4'>
          <div className={'babycontainer header my-4'}>
              <iframe className={'lunarbaby'} title='lunar baby' src="https://camilodoa.ml/lunarbaby" name="lunar baby"/>
          </div>
          <p className='my-4'>
            Hi, I'm <b>Camilo</b>.
          </p>
          <p className='my-4'>
            My interests lie in the space between machine learning, web development,
            and contemporary art. Right now I'm using AI techniques to predict future ICE raids in the US.
          </p>
          <p className='my-2'>
            In 2018, I was involved in the development of <a href="https://bampfa.org/program/dimensionism-modern-art-age-einstein"
            rel="noopener noreferrer" target="_blank">Dimensionism</a>,
            an exhibition that analyzed the influence of modern physics on the artistic processes of the
            early 20th century. Jonathon Keats  wrote an <a href="https://www.forbes.com/sites/jonathonkeats/2019/02/28/dimensionism/#101870147b0f"
            rel="noopener noreferrer" target="_blank">article</a> about it for Forbes Magazine.
          </p>
          <p className='my-4'>
            I was recently a research assistant at <a href="http://www.cs.ox.ac.uk/"
            rel="noopener noreferrer" target="_blank">Oxford</a>'s
            Department of Computer Science, working on Professor <a href="https://www.cs.ox.ac.uk/michael.benedikt/"
            rel="noopener noreferrer" target="_blank">Michael Benedikt</a>'s <a href="http://www.cs.ox.ac.uk/projects/pdq/home.html"
            rel="noopener noreferrer" target="_blank">PDQ</a> (Proof-Driven Query) planning application. There, I
             developed a full-stack <a href="http://pdq-webapp.cs.ox.ac.uk/react-ui"
             rel="noopener noreferrer" target="_blank">web app</a> that provides an interface
             for programmers to generate and save efficient query-plans for
             semantically-interconnected datasources. Currently, I'm working in
             software engineering at <a href="https://www.jpmorgan.com/country/US/en/jpmorgan"
             rel="noopener noreferrer" target="_blank">JPMorgan Chase & Co.</a>
          </p>
        </Col>
      </Row>
      <Row className='align justify justify-content-md-center mt-2'>
        <Col md={'8'} >
          <h3 className='my-2'>
            <b>
            <u>projects</u>
            </b>
          </h3>
        </Col>
      </Row>
      <Project
          path={images + 'ai-melts-ice.png'}
          name={'ai-melts-ice.ml'}
          link={'https://ai-melts-ice.ml'}
          description={'is a web app designed to source and visualize\n' +
          '          predictions of ICE raids in the US. These predictions are\n' +
          '          generated by an LSTM neural network trained on longitudinal data (2014 - 2018)\n' +
          '          from Syracuse\'s TRAC web API.'}
      />
      <Row className='align justify mb-3 justify-content-md-center'>
          <Col md={8}>
              <div className={'babycontainer mt-4'}>
                  <iframe className={'ra'} title='RA' src="https://camilodoa.ml/ra" name="ra"/>
              </div>
              <h4 className='my-4'>
                  <b>
                      <a href={'https://camilodoa.ml/ra'}
                         rel="noopener noreferrer" target="_blank">{'Ra'}</a>
                  </b>
              </h4>
              <p className='my-4'>
                  <b>Ra</b> {'is a q-learning agent that lives in your browser. Over time, it\n' +
                  'learns to approach the concentric circles in the center of the page.\n' }
              </p>
          </Col>
      </Row>
      <Row className='align justify mb-3 justify-content-md-center'>
          <Col md={8}>
              <div className={'babycontainer mt-4'}>
                  <iframe className={'dra'} title='DRA' src="https://camilodoa.ml/dra" name="dra"/>
              </div>
              <h4 className='my-4'>
                  <b>
                      <a href={'https://camilodoa.ml/dra'}
                         rel="noopener noreferrer" target="_blank">{'Dra'}</a>
                  </b>
              </h4>
              <p className='my-4'>
                  <b>Dra</b> {'is the second iteration of Ra. Dra is an\n' +
                  'agent that moves in the browser with the help of a neural network.'}
              </p>
          </Col>
      </Row>
    </Container>
  );
}
