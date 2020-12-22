import React from "react";
import { Fragment } from "react";
import { Button } from "semantic-ui-react";

export default function SocialLogin() {
  return (
    <Fragment>
      <Button
        icon="facebook"
        fluid
        color="facebook"
        style={{
          marginBottom: 10,
        }}
        content="Login with Facebook"
      />
      <Button
        icon="google"
        fluid
        color="google plus"
        style={{
          marginBottom: 10,
        }}
        content="Login with Google"
      />
    </Fragment>
  );
}
