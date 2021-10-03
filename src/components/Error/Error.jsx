import React, { Component } from "react";

class Error extends Component {
  render() {
    return (
      <section className="error">
        <h1>Oops!</h1>
        <h3>The page you're looking for isn't here</h3>
        <a href="/">Take me back</a>
      </section>
    );
  }
}

export default Error;
