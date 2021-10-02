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
    return (
      <section>
      <container className="home">
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            ref={this.name}
            placeholder="Enter username"
          />
          <userContext.Consumer>
            {({ user, login }) => (
              <p>
              <input
                type="submit"
                value="Let's go"
                onClick={() => login(this.name.current.value)}
              />
              </p>
            )}
          </userContext.Consumer>
        </form>
        </container>
      </section>
    );
  }
}

export default Home;
