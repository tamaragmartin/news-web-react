import React, { Component } from "react";

import { withRouter } from "react-router-dom";

export class Form extends Component {
  constructor(props) {
    super(props);

  this.state = {
    data: {},
  };
}

  // addCard = (event) => {
  //   event.preventDefault();

  //   const title = event.target.elements.title.value;
  //   const content = event.target.elements.content.value;
  //   const url = event.target.elements.url.value;

  //   if (title && content && url) {
  //     const card = { title, content, url };
  //     this.props.addArticle({ card });
  //   }
  // };

  // versión Silvia,
  // addCard = (e) => {
  //   e.preventDefault();
  //   this.props.handleData(this.state.data);
  // };
  // handleChange = (e) => {
  //   this.setState({
  //     data: { ...this.state.data, [e.target.name]: e.target.value },
  //   });
  // };

  //Para redirigir a list
  submitForm(e) {
    e.preventDefault();
    this.props.history.push("/list");
  } 

  render() {
    return (
      <>
        <section>
          <h3>Add a new article</h3>
          <form onSubmit={this.submitForm.bind(this)} className="form">
            
            <input type="text" name="title" placeholder="Title" />
            <input type="text" name="content" placeholder="Short description" />
            <input type="text" name="url" placeholder="URL" />

            <input type="submit" value="Add" onClick={this.addCard} />
          </form>
        </section>
      </>
    );
  }
}

export default withRouter(Form);
