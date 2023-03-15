import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Stack from 'react-bootstrap/Stack'
import { Link, Outlet } from 'react-router-dom'
import { PartContext } from './PartContext'

function PartList(props) {
  function partList(parts) {
    if (parts === null) return
    return parts.map((part) =>
      <ListGroup.Item key={part.id}>
        <Link to={`/parts/${part.id}`} key={part.id} >
          {part.partName} ${part.price}
        </Link>
      </ListGroup.Item>
    )
  }

  return (
    <>
    <h1>Parts</h1>
    <Stack direction="horizontal" gap={3}>
    <ListGroup className="align-self-start w-75">
    <PartContext.Consumer>
      {({parts}) => (
        partList(parts)
      )}
    </PartContext.Consumer>
    </ListGroup>
    <Outlet />
    </Stack>
    </>
  )
}

export default PartList