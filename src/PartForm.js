import { useState, useContext, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useNavigate, useParams } from "react-router-dom";
import { PartContext } from './PartContext'

function PartForm() {
  let params = useParams()
  let [ part, setPart ] = useState({
    id: params.partId,
    partNumber: "",
    partName: "",
    partPrice: "",
    avalability: "",
    imgURL: ""
  })

  let { getPart, addPart, updatePart } = useContext(PartContext);
  let navigate = useNavigate();
  let { id, partNumber, partName, partPrice, avalability, imgURL } = part;

  useEffect(() => {
    if (id === undefined) return
    async function fetch() {
        await getPart(id)
            .then((part) => setPart(part))
    }
    fetch()
  }, [id])

  function handleChange(event) {
    setPart((preValue) => {
      return { ...preValue, [event.target.name]: event.target.value }})
  }

  function addOrUpdate() {
    if (id === undefined) {
        return addPart(part)
    } else {
        return updatePart(part)
    }
  }

  function handleSubmit(event) {
    event.preventDefault()
    addOrUpdate().then((part) =>
        navigate(`/${part.id}`)
        )
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" >
        <Form.Label>Part Number</Form.Label>
        <Form.Control type="text" name="partNumber" value={partNumber} onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Part Name</Form.Label>
        <Form.Control type="text" name="partName" value={partName} onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Price</Form.Label>
        <Form.Control type="text" name="partPrice" value={partPrice} onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>ETA</Form.Label>
        <Form.Control type="text" name="avalability" value={avalability} onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>imgURL</Form.Label>
        <Form.Control type="text" name="imgURL" value={imgURL} onChange={handleChange} />
      </Form.Group>
      <Button type="submit">Save</Button>
    </Form>
  )
}

export default PartForm