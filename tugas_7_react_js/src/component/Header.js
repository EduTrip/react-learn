import React, { Component } from "react";
import {
  Alert,
  Row,
  Col,
  Button,
  Badge,
  ButtonGroup
} from "react-bootstrap";

class Header extends Component {
  render() {
    return (
      <Row>
        <Col md={3}>
          <Alert variant="primary">Website React WIth Bootsrap</Alert>
        </Col>
        <Col sm={{ span: 5, offset: 4 }}>
          <ButtonGroup className="mr-5">
            <Button variant="primary">
              Notification
              <Badge variant="light" className="ml-1">
                9
              </Badge>
            </Button>
            <Button variant="primary">
              Message
              <Badge variant="light" className="ml-1">
                10
              </Badge>
            </Button>
          </ButtonGroup>
          <img
            src="https://banner2.kisspng.com/20180420/kuq/kisspng-computer-icons-user-clip-art-my-vector-5ad9a348cd2ce1.8035052415242125528404.jpg"
            alt="user"
            width="30"
            className="mr-2"
          />{" "}
          Halo
        </Col>
      </Row>
    );
  }
}

export default Header;
