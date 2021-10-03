import React, { Component } from "react";

import { userContext } from "../../context/userContext";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.name = React.createRef();
  }

  handleChange = (e) => {
    console.log(e.target.value);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Nombre de usuario:" + this.name.current.value);
  };

  render() {
    //borrar texto del input
    const inputs = document.querySelectorAll("input");
    inputs.forEach((input) => (input.value = ""));

    return (
      <>
        <form onSubmit={this.handleSubmit} className="home">
          <h2>Login</h2>
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            ref={this.name}
            placeholder="Enter username"
          />
          <userContext.Consumer>
            {({ user, login }) => (
              <button
                type="submit"
                value="Let's go"
                onClick={() => login(this.name.current.value)}
              >
                Send
              </button>
            )}
          </userContext.Consumer>
        </form>
      </>
    );
  }
}

export default Home;
