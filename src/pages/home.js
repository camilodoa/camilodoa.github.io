import React from 'react';
import Container from 'react-bootstrap/Container';
import UnstyledRow from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Project from '../components/project';
import Link from '../components/link';
import Image from 'react-bootstrap/Image';
import styled from 'styled-components';

const Row = styled(UnstyledRow)`
  justify-content: center;
`;

const Paragraph = styled.p`
  margin: 1.5rem 0px;
`;

const SectionHeader = styled.h3`
  margin: 1.5rem 0px;
  font-weight: bold;
`;

const Playpen = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  width: 100%;
  height: 22rem;
  margin: 1.5rem 0px;
`;

const LunarBaby = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  border: none;
`;

const HeaderPlaypen = styled(Playpen)`
  height: 30rem;
`;

const Home = () => {
  return (
    <Container>
      <HeaderPlaypen>
        <LunarBaby title='Lunar baby' src='https://camilodoa.ml/ra' name='Lunar baby' />
      </HeaderPlaypen>
        <Row>
          <Col md={'8'}>
            <Paragraph>
              Hi, I'm <b>Camilo</b>.
            </Paragraph>
            <Paragraph>
              I'm interested in web, reinforcement learning, and computational neuroscience.
              I'm a software engineer at <Link src="https://www.google.com">Google</Link> and in my free time
              I
              <Link src='https://github.com/camilodoa/lxai'> solve reinforcement learning problems </Link>
              with Spiking Neural Networks (SNNs).
            </Paragraph>
            <Paragraph>
              In 2019 and 2020, I worked at the University of Oxford with
              <Link src='https://www.cs.ox.ac.uk/michael.benedikt/'> Michael Benedikt </Link>
              on his
              <Link src='http://www.cs.ox.ac.uk/projects/pdq/home.html'> PDQ </Link>
              (Proof-Driven Query planning) project. There, I developed a full-stack
              <Link src='http://pdq-webapp.cs.ox.ac.uk/react-ui'> web application </Link>
              where users can generate, save, and run
              optimal query-plans over semantically-interconnected datasources.
            </Paragraph>
          </Col>
        </Row>
        <Row>
          <Col md={'8'}>
            <SectionHeader>
              Selected projects
            </SectionHeader>
          </Col>
        </Row>
        <Project
          media={<Image alt='AI Melts ICE' src={'../img/ai-melts-ice.png'} fluid />}
          name='AI Melts ICE'
          link='https://ai-melts-ice.ml'
          description={
            'is a web app designed to visualize\n' +
            '          historical and predicted data of county-specific ICE arrests in the US. The predictions are\n' +
            '          generated by an LSTM neural network trained on longitudinal data (2014 - 2018)\n' +
            "          from Syracuse's TRAC web API."
          }
        />
        <Project
          media={
            <Playpen>
              <LunarBaby title='Deep reinforcement learning agent' src='https://camilodoa.ml/lunarbaby' name='Dra' />
            </Playpen>
          }
          name='Dra'
          link='https://camilodoa.ml/dra'
          description={
            'is a Deep Q-Network agent that lives in your browser. Over time, it\n' +
            'learns to approach the goal in the center of the page with the help of a neural network.'
          }
        />
    </Container>
  );
};

export default Home;
