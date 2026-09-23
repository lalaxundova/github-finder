import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col } from 'react-bootstrap';

const SingleCard = ({ image, title, url, des }) => {
  return (
    <Col
      md="3"
      sm="6"
      xs="12"
      className="mb-4">
      <Card
        style={{ width: "19rem" }}
        className='shadow-lg '>
        <Card.Img
          variant="top"
          src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {des}
          </Card.Text>
          <Button
            variant="dark"
            href={url}
            target='_blank' >Read More</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleCard