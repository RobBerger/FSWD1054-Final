import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import { useParams, useNavigate, Link } from "react-router-dom";
import { PartContext } from './PartContext'
import { useContext, useState, useEffect } from 'react'
import Spinner from "react-bootstrap/Spinner";

function Part(props) {

  let params = useParams()
  let navigate = useNavigate()

  let { getPart, deletePart } = useContext(PartContext)
  let [ part, setPart ] = useState()

  useEffect(() => {
    async function fetch() {
        await getPart(params.partId)
            .then((part) => setPart(part))
    }
    fetch()
  }, [params.partId]);

  function handleDeletePart(id) {
    deletePart(id)
    navigate('/parts')
  }

  function loading() {
    return <div className="w-25 text-center"><Spinner animation="border" /></div>
  }

  function partCard() {
    let { id, partNumber, partName, partPrice, avalability, imgURL} = part
    return (
        <Card className="align-self-start w-25">
          <Card.Img variant="top" src={imgURL} />
          <Card.Body>
            <Card.Title>{partNumber}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{partName}</Card.Subtitle>
            <Card.Text>
              <strong>Price:</strong> <span>{partPrice}</span>
              <br />
              <strong>ETA:</strong> <span>{avalability}</span>
            </Card.Text>
            <Link to={`/parts/${id}/edit`} className="btn btn-primary mx-3">Edit</Link>
            <Button variant="danger" onClick={handleDeletePart.bind(this, id)}>Delete</Button>
          </Card.Body>
      </Card>
      )
  }
  if (part === undefined) return loading()
  return part.id !== parseInt(params.partId) ? loading() : partCard()

}

export default Part