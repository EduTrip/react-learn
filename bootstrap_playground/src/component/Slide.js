import React from "react";
import { Carousel } from "react-bootstrap";

const Slide = () => (
  <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/travel1.jpeg"
        alt="travel"
      />

      <Carousel.Caption>
        <h3>Caption</h3>
        <p>lorem ipsum dolor sit ame amertha opseum</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/travel2.png"
        alt="travel"
      />

      <Carousel.Caption>
        <h3>Caption</h3>
        <p>lorem ipsum dolor sit ame amertha opseum</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/travel3.jpeg"
        alt="travel"
      />

      <Carousel.Caption>
        <h3>Caption</h3>
        <p>lorem ipsum dolor sit ame amertha opseum</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);

export default Slide;
