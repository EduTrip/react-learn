import React, { Component } from "react";
import { Form, Button, Modal } from "react-bootstrap";

export default class Popup extends Component {
constructor(props, state) {
    super(props,state);

    this.state = {
        show: false
    }

    this.handleClose = this.handleClose.bind(this);
    this.handleShow= this.handleShow.bind(this)
}

handleClose() {
this.setState( { show: false} );
}

handleShow() {
    this.setState({ show: true } );
}


  render() {
    return (
      <Form>
        <Form.Group>
          <Form.Control type="email" placeholder="Masukkan Email" />
        </Form.Group>
        <Form.Group>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group>
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" onClick={this.handleShow}>
          Login
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Anda Berhasil Login
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={this.handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={this.handleClose}>
                    Save username dan password
                </Button>
            </Modal.Footer>
        </Modal>
      </Form>
    );
  }
}
