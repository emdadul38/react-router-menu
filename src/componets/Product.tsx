import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

const Product = () => {
  const cardStyle = {
    width: "18rem"
  };
  return (
    <div>
      <h1>Product List</h1>

      <Card style={cardStyle}>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Link to="/product/details/1">
            <Button variant="primary">Go somewhere</Button>
          </Link>
        </Card.Body>
      </Card>

      <Card style={cardStyle}>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Link to="/product/details/2">
            <Button variant="primary">Go somewhere</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
