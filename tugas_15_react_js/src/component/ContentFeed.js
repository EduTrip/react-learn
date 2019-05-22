import React from "react";
import { Feed, Icon } from "semantic-ui-react";

const ContentFeed = () => (
  <Feed>
    <Feed.Event>
      <Feed.Label>
        <img
          src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg"
          alt="avatar"
        />
      </Feed.Label>
      <Feed.Content>
        <Feed.Summary>
          <Feed.User>Anton</Feed.User> added you as friend
          <Feed.Date>3 Hour Ago</Feed.Date>
        </Feed.Summary>
        <Feed.Meta>
          <Feed.Like>
            <Icon name="like" />4 Likes
          </Feed.Like>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>
    <Feed.Event>
      <Feed.Label>
        <Icon name="pencil" />
      </Feed.Label>
      <Feed.Content>
        <Feed.Summary>You submitted a new post to the page</Feed.Summary>
        <Feed.Date style={{ marginTop: "5px" }}>3 days Ago</Feed.Date>
        <Feed.Extra text>Saya Senang Belajar Bahasa Pemograman</Feed.Extra>
        <Feed.Meta>
          <Feed.Like>
            <Icon name="like" /> 11 likes
          </Feed.Like>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>
    <Feed.Event>
      <Feed.Label>
        <img
          src="https://react.semantic-ui.com/images/avatar/small/helen.jpg"
          alt="avatart"
        />
      </Feed.Label>
      <Feed.Content>
        <Feed.Date>4 days Ago</Feed.Date>
        <Feed.Summary>David Added 2 new image</Feed.Summary>
        <Feed.Extra images>
          <a href="#a">
            <img
              src="https://s3-ap-southeast-1.amazonaws.com/niomic/img-v1/c_login_logo.png"
              alt="niomic logo"
            />
          </a>
          <a href="#b">
            <img
              src="https://cdn-images-1.medium.com/max/1600/1*6kK9j74vyOmXYm1gN6ARhQ.png"
              alt="react logo"
            />
          </a>
        </Feed.Extra>
        <Feed.Meta>
          <Feed.Like>
            <Icon name="like" /> 2 Likes
          </Feed.Like>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>
  </Feed>
);

export default ContentFeed;
