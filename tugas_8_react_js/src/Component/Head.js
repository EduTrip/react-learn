import React from "react";

import { Row, Dropdown, Col } from "react-bootstrap";

function Head() {
  return (
    <Row style={{ backgroundColor: "black" }}>
      <Col md={2}>
        <Dropdown>
          <Dropdown.Toggle variant="primary" id="dropdown-lang">
            Pilih Bahasa
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#">Indonesia</Dropdown.Item>
            <Dropdown.Item href="#">English</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Col>
      <Col md={{ span: 2, offset: 8 }}>
        <img
          src="https://png.pngtree.com/svg/20161113/ef1b24279e.png"
          width="55"
          alt="profile-img"
        />
        <p style={{ color: "white", marginTop: "10px" }}>Alan Saputra</p>
      </Col>
    </Row>
  );
}

export default Head;
