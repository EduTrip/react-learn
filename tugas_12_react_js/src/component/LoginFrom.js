import React from "react";
import {
  Form,
  Checkbox,
  Button,
  Segment,
  Input,
  Grid,
  Header,
  Image
} from "semantic-ui-react";

const LoginForm = () => (
  <div style={{ height: "100%"}}>
    <Grid textAlign="center" verticalAlign="middle" style={{ height: "100%"}}>
      <Grid.Column style={{ maxWidth: 450 , marginTop: "10%"}}>
          <Header as="h2" color="teal" textAlign="center">
            <Image src="https://s3-ap-southeast-1.amazonaws.com/niomic/img-v1/c_login_logo.png" />
            Member Login
          </Header>
        <Segment textAlign="center">
          <Form>
            <Form.Field>
              <Input
                icon="user"
                iconPosition="left"
                placeholder="E-mail address"
              />
            </Form.Field>
            <Form.Field>
              <Input icon="lock" iconPosition="left" placeholder="Password" />
            </Form.Field>
            <Form.Field>
              <Checkbox label="i agree to terms and condition" />
            </Form.Field>
            <Button type="submit" color="teal" fluid size="large">Login</Button>
          </Form>
        </Segment>
        <Segment secondary>
            Tidak punya akun? Silahkan <a href="#">register</a>
        </Segment>
      </Grid.Column>
    </Grid>
  </div>
);

export default LoginForm;
