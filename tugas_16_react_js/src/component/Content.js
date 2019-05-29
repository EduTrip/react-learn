import React from "react";
import { Col, Row, Card } from "react-materialize";
import CardTitle from "react-materialize/lib/CardTitle";

const Content = () => (
  <div>
    <p>Hot List</p>
    <Row fluid>
      <Col>
        <Card
          className="small"
          header={
            <CardTitle image="https://ecs7.tokopedia.net/img/cache/300/attachment/2018/8/15/25749302/25749302_274a89a6-ea41-4a3a-ac6b-ce2881016369.jpg">
              Audio
            </CardTitle>
          }
        >
          audio technica mulai dari <span style={{ backgroundColor: "red" }}>Rp.910 rb</span>
        </Card>
      </Col>
      <Col>
        <Card className="small"
          header={<CardTitle image="https://ecs7.tokopedia.net/img/cache/300/attachment/2019/1/16/25287362/25287362_a79f0aa6-cf1f-484f-b1a8-83993245cd6f.jpg">
            Handphone
          </CardTitle>
          }
        >
          handphone samsung mulai dari  <span style={{ backgroundColor: "red" }}>Rp.200 rb</span>
        </Card>
      </Col>
      <Col>
        <Card className="small"
          header={<CardTitle image="https://ecs7.tokopedia.net/img/cache/300/attachment/2018/6/26/28201197/28201197_856195f2-b0ba-4711-8200-fd95beaf1df5.jpg">
            Squishy
          </CardTitle>
          }
        >
          Squishy mulai dari  <span style={{ backgroundColor: "red" }}>Rp.5,5 rb</span>
        </Card>
      </Col>
      <Col>
        <Card className="small" 
        header={<CardTitle image="https://ecs7.tokopedia.net/img/cache/300/attachment/2018/4/23/28201197/28201197_0383072a-1766-453c-951a-8b53a719cff0.jpg">
          Kolkes The Avenger
        </CardTitle>
      }>
          Koleksi the avenger mulai dari  <span style={{ backgroundColor: "red" }}>Rp.10 rb</span>
        </Card>
      </Col>
    </Row>
  </div>
);

export default Content;

//
//
//
//
