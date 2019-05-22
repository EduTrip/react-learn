import React from "react";
import { Comment, Header, Form, Button } from "semantic-ui-react";

const ContentComment = () => (
  <Comment.Group threaded>
    <Header as="h3" dividing>
      Komentar
    </Header>

    <Comment>
      <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/matt.jpg" />
      <Comment.Content>
        <Comment.Author as="a">Satria</Comment.Author>
        <Comment.Metadata>
          <div>Today at 5.42 PM</div>
        </Comment.Metadata>
        <Comment.Text>Hallo</Comment.Text>
        <Comment.Action>Reply</Comment.Action>
      </Comment.Content>
    </Comment>

    <Comment>
      <Comment.Avatar src=" https://react.semantic-ui.com/images/avatar/small/elliot.jpg" />
      <Comment.Content>
        <Comment.Author as="a">Danang</Comment.Author>
        <Comment.Metadata>
          <div>Today at 5.50 PM</div>
        </Comment.Metadata>
        <Comment.Text>Kerjakan Sesuai Kemampuan kamu</Comment.Text>
        <Comment.Action>Reply</Comment.Action>
      </Comment.Content>
      <Comment.Group>
        <Comment>
          <Comment.Avatar
            as="a"
            src=" https://react.semantic-ui.com/images/avatar/small/jenny.jpg"
          />
          <Comment.Content>
            <Comment.Author as="a">Ricky</Comment.Author>
            <Comment.Metadata>
              <div>Just Now</div>
            </Comment.Metadata>
            <Comment.Text>Kamu sekarang dimana danag</Comment.Text>
            <Comment.Action>Reply</Comment.Action>
          </Comment.Content>
        </Comment>
      </Comment.Group>
    </Comment>

    <Comment>
      <Comment.Avatar src=" https://react.semantic-ui.com/images/avatar/small/joe.jpg" />
      <Comment.Content>
        <Comment.Author as="a">Joe</Comment.Author>
        <Comment.Metadata>
          <div>1 days ago</div>
        </Comment.Metadata>
        <Comment.Text>Terima kasih atas Nasihat nya</Comment.Text>
        <Comment.Action>Reply</Comment.Action>
      </Comment.Content>
    </Comment>

    <Form reply>
      <Form.TextArea />
      <Button content="Add reply" labelPosition="left" icon="edit" primary />
    </Form>
  </Comment.Group>
);

export default ContentComment;
