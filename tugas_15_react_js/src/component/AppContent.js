import React from "react";
import { Grid } from "semantic-ui-react";
import ContentFeed from "./ContentFeed";
import ContentComment from "./ContentComment";

const AppContent = () => (
  <div>
  <Grid stackable style={{ marginTop: "24px" }}>
    <Grid.Row>
      <Grid.Column width={6} floated="left">
        <ContentComment />
      </Grid.Column>
      <Grid.Column width={6} floated="right">
        <ContentFeed />
      </Grid.Column>
    </Grid.Row>
  </Grid>
  </div>
);

export default AppContent;
