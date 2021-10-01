import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import { userContext } from "../../context/userContext";

export class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
      redirect: false,
    };
  }

  addCard = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const content = e.target.content.value;
    const url = e.target.url.value;

    const data = { title, content, url };

    this.setState({ redirect: true, data });
  };

  render() {
    return (
      <>
        <h3>Añade una noticia nueva</h3>

        <form onSubmit={this.addCard} className="form">
          <input type="text" name="title" placeholder="Añade un titular" />
          <input type="text" name="content" placeholder="Breve descripción" />
          <input type="text" name="url" placeholder="Añade la URL" />
          <input type="submit" value="Añadir" />
          {/* <Redirect to="/list" /> & onClick={this.props.history.push('/list')} Redirige automáticamente ?? */}
        </form>
      </>
    );
  }
}

export default Form;
