import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Stack from 'react-bootstrap/Stack'
import { Link, Outlet } from 'react-router-dom'
import { PartContext } from './PartContext'
import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card'

function PartList(props) {
  function partList(parts) {
    if (parts === null) return
    return parts.map((part) =>
      <Card key={part.id}>
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
    <CardGroup>
    <PartContext.Consumer>
      {({parts}) => (
        partList(parts)
      )}
    </PartContext.Consumer>
    </CardGroup>
    </>
  )
}

export default PartList