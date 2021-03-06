import React from "react";
import { Segment, Dimmer, Image, Loader } from "semantic-ui-react";

const ContentLoader = () => (
  <Segment>
    <Dimmer active>
      <Loader />
    </Dimmer>

    <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
  </Segment>
);

export default ContentLoader;
