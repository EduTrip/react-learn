import React from 'react';
import { Header, List } from 'semantic-ui-react';

const LinkList = () => (
    <div>
        <Header>Website Terkait</Header>
          <List>
            <List.Item>
              <List.Icon name="linkify" />
              <List.Content>
                <a href="#a">Google</a>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="linkify" />
              <List.Content>
                <a href="#b">Facebook</a>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="linkify" />
              <List.Content>
                <a href="#c">Twitter</a>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="linkify" />
              <List.Content>
                <a href="#d">Github</a>
              </List.Content>
            </List.Item>
          </List>
    </div>
)

export default LinkList;