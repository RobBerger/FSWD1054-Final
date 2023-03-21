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


    <Navbar fixed="bottom" bg="light" variant="light">
      <Navbar.Brand>
        Ferrari Parts Designed By Robert
      </Navbar.Brand>
    </Navbar>
    </>
  )
}

export default Home