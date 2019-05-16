import React, { Component } from "react";
import Header from "./component/Header";
import Nav from "./component/Navbar"
import Content from "./component/Content";
import { Container } from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <div>
        <Container>
        <Header />
        <Nav />
        <Content />
        </Container>
      </div>
    );
  }
}
export default App;
