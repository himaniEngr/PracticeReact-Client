import React from "react";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client.init({
        clientId:
          "883674799360-c0pa2k8vc3q8eibc6bb22rv6530j86mq.apps.googleusercontent.com",
        scope: "email",
      });
    });
  }
  render() {
    return <div>google auth</div>;
  }
}

export default GoogleAuth;
