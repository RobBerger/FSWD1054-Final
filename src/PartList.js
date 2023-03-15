import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Stack from 'react-bootstrap/Stack'
import { Link, Outlet } from 'react-router-dom'
import { PartContext } from './PartContext'
import CardGroup from 'react-bootstrap/CardGroup'

function PartList(props) {
  function partList(parts) {
    if (parts === null) return
    return parts.map((part) =>
      <CardGroup.Item key={part.id}>
        <Link to={`/parts/${part.id}`} key={part.id} >
          {part.partName} {part.partPrice}
        </Link>
      </CardGroup.Item>
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