import React from "react";
import { Breadcrumb, Col } from "react-bootstrap";

function SubMenu() {
  return (
      <Col lg={{ span: 3, offset: 8}}>
        <Breadcrumb>
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="#">Liga Inggris</Breadcrumb.Item>
          <Breadcrumb.Item active>Transfer pemain</Breadcrumb.Item>
        </Breadcrumb>
      </Col>
  );
}

export default SubMenu;
