import React from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';

function Welcome() {
    return (
    <>
    <h1>Welcome To Ferrari Parts</h1>
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
)}

export default Welcome