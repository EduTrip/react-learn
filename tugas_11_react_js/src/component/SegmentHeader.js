import React from "react";
import {
  Segment,
  Grid,
  Divider,
  Header,
  Icon,
  Search,
  Button
} from "semantic-ui-react";

const SegmentHeader = () => (
  <Segment placeholder>
    <Grid columns={2} stackable textAlign="center">
      <Divider vertical> Or </Divider>
      <Grid.Row verticalAlign="middle">
        <Grid.Column>
          <Header icon>
            <Icon name="search" />
            Cari Document
          </Header>
          <Search placeholder="search document..." />
        </Grid.Column>

        <Grid.Column>
          <Header icon>
            <Icon name="file pdf outline" />
            Tambah Document baru
          </Header>
          <Button primary>Create document</Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
);

export default SegmentHeader;
