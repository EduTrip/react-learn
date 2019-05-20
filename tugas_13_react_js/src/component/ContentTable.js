import React from "react";
import { Table, Container, Label, Menu, Icon, Input } from "semantic-ui-react";

const ContentTable = () => (
  <Container style={{ marginTop: "24px" }}>
    <Table celled>
      <Table.Header fullWidth>
        <Table.Row>
          <Table.HeaderCell colSpan="2" textAlign="right">
            <Input placeholder="Search Document" floated="right" icon="search">
              <input style={{ borderRadius: "20px"}} />
              <i className="search icon"/>
            </Input>
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Header>
        <Table.HeaderCell>Nama Document</Table.HeaderCell>
        <Table.HeaderCell>Jenis File</Table.HeaderCell>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>
            <Label ribbon>Panduan Belajar Javascript</Label>
          </Table.Cell>
          <Table.Cell>PDF</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Panduan Belajar CSS</Table.Cell>
          <Table.Cell>PDF</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Panduan Belajar Javascript</Table.Cell>
          <Table.Cell>PDF</Table.Cell>
        </Table.Row>
      </Table.Body>
      <Table.Footer>
        <Table.Row>
          <Table.HeaderCell colSpan="2">
            <Menu floated="right" pagination>
              <Menu.Item as="a" icon>
                <Icon name="chevron left" />
              </Menu.Item>
              <Menu.Item as="a">1</Menu.Item>
              <Menu.Item as="a">2</Menu.Item>
              <Menu.Item as="a">3</Menu.Item>
              <Menu.Item as="a">4</Menu.Item>
              <Menu.Item as="a" icon>
                <Icon name="chevron right" />
              </Menu.Item>
            </Menu>
          </Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    </Table>
  </Container>
);

export default ContentTable;
