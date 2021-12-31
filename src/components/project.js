import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

export default function Project({ path, name, link, description }) {
  /*
    Project is a full - level container for project images and descriptions
     */
  return (
    <>

    <Row className='justify my-2 justify-content-md-center'>
      <Col md={'8'} className='mx-4'>
      <Image alt={name} src={path} fluid />
        <h4 className='my-4'>
          <b>
            <a href={link} rel='noopener noreferrer' target='_blank' className="body-link">
              {name}
            </a>
          </b>
        </h4>
        {description ? (
          <p className='my-4'>
            <b>{name.slice(0, -3)}</b> {description}
          </p>
        ) : null}
      </Col>
    </Row>
    </>
  )
}
