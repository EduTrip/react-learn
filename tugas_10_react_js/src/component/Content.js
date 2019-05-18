import React from "react";
import { Button, Container, Label, Segment, Grid } from "semantic-ui-react";

const Content = () => (
  <Container>
    <Grid>
      <Grid.Row columns={10}>
        <Grid.Column floated="right">
          <Label as="Sport" color="teal" tag>
            SPORT
          </Label>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <Segment basic textAlign="center">
      <p style={{ fontSize: "16px"}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, libero
        minima soluta esse quae delectus maxime. Optio velit ea quasi nulla,
        dolores sequi voluptates ratione repellat quod magnam, modi eaque. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Saepe, libero minima
        soluta esse quae delectus maxime. Optio velit ea quasi nulla, dolores
        sequi voluptates ratione repellat quod magnam, modi eaque. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Saepe, libero minima soluta
        esse quae delectus maxime. Optio velit ea quasi nulla, dolores sequi
        voluptates ratione repellat quod magnam, modi eaque. Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Saepe, libero minima soluta esse
        quae delectus maxime. Optio velit ea quasi nulla, dolores sequi
        voluptates ratione repellat quod magnam, modi eaque. Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Saepe, libero minima soluta esse
        quae delectus maxime. Optio velit ea quasi nulla, dolores sequi
        voluptates ratione repellat quod magnam, modi eaque.
      </p>

      <Button
        color="teal"
        content="Tambah ke tautan List"
        icon="add"
        labelPosition="left"
      />
    </Segment>
  </Container>
);

export default Content;
