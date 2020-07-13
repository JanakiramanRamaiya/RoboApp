import React from "react";
import { Component } from "react";

class ErrorBoundry extends Component {
  constructor() {
    super();
    this.state = { isError: false };
  }
  componentDidCatch() {
    this.setState({ isError: true });
  }

  render() {
    if (this.state.isError) {
      return <h1>something went Wrong Error</h1>;
    } else {
      return <div>{this.props.children}</div>;
    }
  }
}

export default ErrorBoundry;
