import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Stack from 'react-bootstrap/Stack'
import { Link, Outlet } from 'react-router-dom'
import { PartContext } from './PartContext'
import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card'
import { Row } from 'react-bootstrap'

function PartList(props) {
  function partList(parts) {
    if (parts === null) return
    return parts.map((part) =>
      <Card key={part.id}>
        <Card.Img variant='top' src={part.imgURL} />
        <Card.Body>
            <Card.Title>{part.partName}</Card.Title>
            <Card.Subtitle>{part.partNumber}</Card.Subtitle>
        </Card.Body>
      </Card>
    )
  }

  return (
    <>
    <h1>Parts</h1>
    <Row xs={1} md={2} lg={3} className="g-4">
    <PartContext.Consumer>
      {({parts}) => (
        partList(parts)
      )}
    </PartContext.Consumer>
    </Row>
    </>
  )
}

export default PartList