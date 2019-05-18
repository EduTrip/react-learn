import React from "react";
import { Flag, Grid, Icon, Input, Image } from "semantic-ui-react";

import DividerHeader from "./DividerHeader";

const style = {
  header: {
    marginTop: "1em"
  },
  img: {
    marginTop: "10px"
  },
  headerSpan: {
    marginLeft: "10px",
    fontSize: "16px"
  }
};

const Head = () => (
  <div>
    <Grid container style={style.header}>
      <Grid.Column>
        <Flag name="id" style={style.img} />
      </Grid.Column>
      <Grid.Column>
        <Icon link name="angle left" size="big" />
      </Grid.Column>
      <Grid.Column>
        <Icon link name="angle right" size="big" />
      </Grid.Column>
      <Grid.Column width={10}>
        <Input fluid icon="star" placeholder="search..." />
      </Grid.Column>
      <Grid.Column mobile={3}>
        <Image
          src="https://png.pngtree.com/svg/20161113/ef1b24279e.png"
          size="mini"
          avatar
        />
        <span style={style.headerSpan}>
          <b>Berkah</b>
        </span>
      </Grid.Column>
    </Grid>
    <DividerHeader />
  </div>
);

export default Head;
