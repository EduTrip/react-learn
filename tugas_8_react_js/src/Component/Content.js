import React from "react";
import Popup from "./Popup";
import { ListGroup, Row, Col, Jumbotron, Button } from "react-bootstrap";

function Content() {
  return (
    <Row className="mt-3">
      <Col xs={4} md={3}>
        <ListGroup>
          <ListGroup.Item active> Foo</ListGroup.Item>
          <ListGroup.Item> Bar</ListGroup.Item>
          <ListGroup.Item> Baz</ListGroup.Item>
          <ListGroup.Item> qux</ListGroup.Item>
          <ListGroup.Item> quux</ListGroup.Item>
          <ListGroup.Item> corge</ListGroup.Item>
        </ListGroup>
      </Col>
      <Col xs={4} md={5}>
      <Jumbotron>
          <h1>Divisi Pirmenar</h1>
          <p>Lorem ipsum dolor sit amet, exvisa di upvest</p>
          <Button variant="primary">
            Read More
          </Button>
      </Jumbotron>
      </Col>
      <Col>
      <img
          src="https://png.pngtree.com/svg/20161113/ef1b24279e.png"
          alt="profile-img"
          width="75"
         style={{ marginLeft: "auto", marginRight: "auto", display: "block" }}
        />
        <h4 style={{ textAlign: "center"}}> SILAHKAN LOGIN</h4>
        <Popup />
      </Col>
    </Row>
  );
}

export default Content;
