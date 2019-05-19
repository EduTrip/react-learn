import React from "react";
import { Grid, Segment, Placeholder, List } from "semantic-ui-react";

const Content = () => (
  <Grid columns={3} stackable>
    <Grid.Column width={5}>
      <Segment raised>
        <Placeholder>
          <Placeholder.Header image>
            <Placeholder.Line />
            <Placeholder.Line />
          </Placeholder.Header>
          <Placeholder.Paragraph>
            <Placeholder.Line length="medium" />
            <Placeholder.Line length="short" />
          </Placeholder.Paragraph>
        </Placeholder>
      </Segment>
    </Grid.Column>
    <Grid.Column width={7}>
      <Segment raised>
        <Placeholder>
          <Placeholder.Header image>
            <Placeholder.Line />
            <Placeholder.Line />
          </Placeholder.Header>
          <Placeholder.Paragraph>
            <Placeholder.Line length="medium" />
            <Placeholder.Line length="short" />
          </Placeholder.Paragraph>
        </Placeholder>
      </Segment>
    </Grid.Column>
    <Grid.Column width={3}>
        <h3>Website Terkait</h3>
        <List>
            <List.Item icon='linkify' content={<a href="www.google.com">Google</a>}/>
            <List.Item icon='linkify' content={<a href="www.google.com">Google</a>}/>
            <List.Item icon='linkify' content={<a href="www.google.com">Google</a>}/>
            <List.Item icon='linkify' content={<a href="www.google.com">Google</a>}/>
        </List>
    </Grid.Column>
  </Grid>
);

export default Content;
