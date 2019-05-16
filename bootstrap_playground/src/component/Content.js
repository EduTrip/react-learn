import React, { Component } from "react";
import Slide from "./Slide";
import {
  Row,
  Col,
  Media,
  Alert,
  Badge,
  Button,
  ButtonToolbar,
  ButtonGroup,
  Card,
  Dropdown,
  Form
} from "react-bootstrap";

class Content extends Component {
  render() {
    return (
      <div>
        <Slide />
        <Row className="mt-5">
          <Col>
            <Media>
              <img
                width={64}
                alt={64}
                className="mr-3"
                src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png "
              />
            </Media>
            <Media.Body>
              <h5>Sate</h5>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
                quod reiciendis, quibusdam accusamus nihil adipisci. Tempore
                rerum officia exercitationem nam inventore sunt soluta
                accusantium. Omnis quis perspiciatis enim saepe velit?
              </p>
            </Media.Body>
          </Col>
          <Col>
            <Media>
              <img
                width={64}
                alt={64}
                className="mr-3"
                src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png "
              />
            </Media>
            <Media.Body>
              <h5>Sate</h5>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
                quod reiciendis, quibusdam accusamus nihil adipisci. Tempore
                rerum officia exercitationem nam inventore sunt soluta
                accusantium. Omnis quis perspiciatis enim saepe velit?
              </p>
            </Media.Body>
          </Col>
        </Row>
        <Row>
          <Col>
            <Alert variant="danger">Hello</Alert>
          </Col>
          <Col>
            <h5>
              Foo <Badge variant="secondary">Bar</Badge>
            </h5>
            <Button variant="success">
              Foo <Badge variant="light">Bar</Badge>
            </Button>
          </Col>
          <Col>
            <Button variant="outline-info">Foo</Button>
            <ButtonToolbar aria-label="Toolbar">
              <ButtonGroup className="mr-2 mt-2">
                <Button variant="primary">1</Button>
                <Button variant="primary">2</Button>
                <Button variant="primary">3</Button>
                <Button variant="primary">4</Button>
              </ButtonGroup>
              <ButtonGroup className="mr-2 mt-2">
                <Button variant="outline-dark">5</Button>
                <Button variant="outline-dark">6</Button>
              </ButtonGroup>
            </ButtonToolbar>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png "
              />
              <Card.Body>
                <Card.Title>Makanan</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                  ipsam deserunt iure. Nulla doloribus ea aliquid deserunt non
                  saepe quibusdam fugiat eius, ut mollitia recusandae
                  repudiandae sit incidunt hic. Obcaecati?
                </Card.Text>
                <Button variant="outline-primary">Button</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Dropdown>
              <Dropdown.Toggle variant="info" id="dropdown-basic">
                Button
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#">1</Dropdown.Item>
                <Dropdown.Item href="#">2</Dropdown.Item>
                <Dropdown.Item href="#">3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col>
            <Form>
              <Form.Group controlId="fromBasicEmail">
                <Form.Label> Email Address</Form.Label>
                <Form.Control type="email" placeholder="Enter Email" />
              </Form.Group>
              <Form.Group controlId="fromBasicPassword">
                <Form.Label> Password</Form.Label>
                <Form.Control type="password" />
              </Form.Group>
              <Button variant="outline-info" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Content;
