import React from "react";
import { Slider, Slide, Caption } from "react-materialize";

const HeadSlider = () => (
  <Slider>
    <Slide
      image={
        <img
          src="https://photos.mandarinoriental.com/is/image/MandarinOriental/paris-2017-home?wid=2880&hei=1280&fmt=jpeg&crop=9,336,2699,1200&anchor=1358,936&qlt=75,0&fit=wrap&op_sharpen=0&resMode=sharp2&op_usm=0,0,0,0&iccEmbed=0&printRes=72"
          alt="slide 1"
        />
      }
    >
      <Caption placement="left">
        <h3>Paris</h3>
        <h5>Dapatkan Jalan Jalan ke Paris</h5>
      </Caption>
    </Slide>
    <Slide
      image={
        <img src=" https://s-ec.bstatic.com/images/hotel/max1024x768/106/106114417.jpg" alt="slide 2"/>
      }
    >
      <Caption placement="right">
        <h3>PANTAI</h3>
        <h5>Dapatkan Jalan Jalan ke Pantai</h5>
      </Caption>
    </Slide>
    <Slide
      image={
        <img src="https://cdn.pixabay.com/photo/2015/12/08/00/26/cityscape-1081704_960_720.jpg" alt="slide 3"/>
      }
    >
      <Caption>
        <h3>Hong Kong</h3>
        <h5>Dapatkan Jalan Jalan ke Hong Kong</h5>
      </Caption>
    </Slide>
  </Slider>
);

export default HeadSlider;

//
