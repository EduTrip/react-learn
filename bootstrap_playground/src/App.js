import React, { Component } from "react";
import Nav from "./component/Nav";
import Content from "./component/Content";
import { Container } from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <div>
        <Container>
          <Nav />
          <Content />
        </Container>
      </div>
    );
  }
}

export default App;
