import React, { Component } from "react";
import { Row, Col, Breadcrumb } from "react-bootstrap";

class Nav extends Component {
    render() {
        return (                        
            <Row>
                <Col lg={{ span: 4, offset: 8}}>
                <Breadcrumb>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>Berita</Breadcrumb.Item>
                <Breadcrumb.Item>Bola</Breadcrumb.Item>
                </Breadcrumb>
                </Col>
            </Row>
        );
    }
}

export default Nav;