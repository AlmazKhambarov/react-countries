import React, { Component, ErrorInfo } from "react";


class ErrorBoundary extends Component{
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error: ", error, errorInfo);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h2>Oops, xatolik yuzberdi!</h2>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
