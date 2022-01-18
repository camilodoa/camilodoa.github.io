import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from './link';
import styled from 'styled-components';

const ProjectRow = styled(Row)`
  justify-content: center;
`;

const ProjectTitle = styled.h4`
  margin: 1.5rem 0px;
  font-weight: bold;
`;

const ProjectBody = styled.p`
  margin: 1.5rem 0px;
`;

const Project = ({ media, name, link, description }) => {
  return (
    <ProjectRow>
      <Col md={'8'}>
        {media}
        <ProjectTitle>
          <Link src={link}>
            {name}
          </Link>
        </ProjectTitle>
        {description && (
          <ProjectBody>
            <b>{name}</b> {description}
          </ProjectBody>
        )}
      </Col>
    </ProjectRow>
  )
};

export default Project;
