import React, { Component } from "react";
import {
  Popover,
  OverlayTrigger,
  Button,
  Fade,
  Row,
  Col
} from "react-bootstrap";

export default class ContentButtonGroup extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false
    };
  }

  render() {
    const { open } = this.state;

    const popover = (
      <Popover id="popover-informasi" title="Informasi Website">
        Website ini Dibuat untuk memudahkan dalam pencarian informasi berita
        terkini tentang olahraga
      </Popover>
    );

    return (
      <Row>
        <Col md={1}>
          <OverlayTrigger trigger="click" placement="right" overlay={popover}>
            <Button variant="primary">Informasi</Button>
          </OverlayTrigger>
        </Col>
        <Col md>
          <Button
            onClick={() => this.setState({ open: !open })}
            aria-expanded={open}
          >
            Versi Website
          </Button>
          <Fade in={this.state.open}>
            <div id="fade-web-version">Akses sport V1.0</div>
          </Fade>
        </Col>
      </Row>
    );
  }
}
