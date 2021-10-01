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
        <h2>Introduce tu nombre de usuario</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Nombre:</label>
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            ref={this.name}
          />
          <userContext.Consumer>
            {({ user, login }) => (
              <input
                type="submit"
                value="Enviar"
                onClick={() => login(this.name.current.value)}
              />
            )}
          </userContext.Consumer>
        </form>
      </section>
    );
  }
}

export default Home;
