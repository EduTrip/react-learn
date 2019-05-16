import React from "react";
import { Breadcrumb, Col, Row } from "react-bootstrap";

function Nav() {
  return (
    <Row>
      <Col lg={{ span: 5, offset: 7 }}>
        <Breadcrumb>
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="#">Berita</Breadcrumb.Item>
          <Breadcrumb.Item active>Bola</Breadcrumb.Item>
        </Breadcrumb>
      </Col>
    </Row>
  );
}

export default Nav;
