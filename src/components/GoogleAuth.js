import React from "react";

class GoogleAuth extends React.Component {
  state = { isSignedIn: null };
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "883674799360-c0pa2k8vc3q8eibc6bb22rv6530j86mq.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
        });
    });
  }
  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return <div>don't know if signed in or not</div>;
    } else if (this.state.isSignedIn === true) {
      return <div>signed in </div>;
    } else {
      return <div>not signed in</div>;
    }
  }
  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;
