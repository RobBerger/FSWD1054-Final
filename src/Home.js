import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'
import { Link, Outlet } from "react-router-dom"
import Card from "react-bootstrap/Card"
import CardGroup from "react-bootstrap/CardGroup"

function Home() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Nav className="me-auto">
            <Navbar.Brand to="/">
              <img
                alt=""
                src="https://d2y5h3osumboay.cloudfront.net/9t2b00oogf2vc4whpyrfbyu9me2o"
                width="30"
                height="30"
                />{' '}
                Ferrari Parts Department
            </Navbar.Brand>
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/parts" className="nav-link">Parts</Link>
            <Link to="/add" className="nav-link">Add A Part</Link>
          </Nav>
        </Container>
      </Navbar>
      <Stack gap={3} className="col-md-10 mx-auto mt-3">
        <Outlet />
      </Stack>
      <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://d2y5h3osumboay.cloudfront.net/g5ff44g73e3fs1wv88asjc4tmtl5" />
        <Card.Body>
          <Card.Title>We Have Parts</Card.Title>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://d2y5h3osumboay.cloudfront.net/qs5zefwqy9v899it2xuczm3h73hz" />
        <Card.Body>
          <Card.Title>We Have Accessories</Card.Title>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://d2y5h3osumboay.cloudfront.net/slqc85ac13w1l8uo75t1iobdw1jj" />
        <Card.Body>
          <Card.Title>We Have Apparel</Card.Title>
        </Card.Body>
      </Card>
    </CardGroup>
    </>
  )
}

export default Home