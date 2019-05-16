import React from "react";
import { Row, Spinner, Col } from "react-bootstrap";

function Header() {
  return (
    <Row className="mb-4">
      <Col xs={12} md={8}>
        <h3>Transfer Pemain</h3>
      </Col>
      <Col sm={{ span: 1, offset: 2}}>
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
        <Spinner animation="grow" />
      </Col>
    </Row>
  );
}

export default Header;
