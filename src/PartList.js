import React from 'react'
import { Link, Outlet, useParams, useNavigate } from 'react-router-dom'
import { PartContext } from './PartContext'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'

function PartList(props) {

  function partList(parts) {
    if (parts === null) return
    return parts.map((part) =>
      <Card key={part.id}>
        <Card.Img variant='top' src={part.imgURL} />
        <Card.Body>
            <Card.Title>{part.partName}</Card.Title>
            <Card.Subtitle>OEM Ferrari Part # {part.partNumber}</Card.Subtitle>
            <Link to={`/${part.id}`} className="btn btn-primary">Details</Link>
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