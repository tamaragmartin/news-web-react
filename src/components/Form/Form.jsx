import React, { Component } from "react";

import { Link } from "react-router-dom";

export class Form extends Component {
  constructor(props) {
    super(props);

    this.title = React.createRef();
    this.content = React.createRef();
    this.url = React.createRef();

    this.state = {
      data: [],
    };
  }

  addCard = (e) => {
    e.preventDefault();

    const title = this.title.current.value;
    const content = this.content.current.value;
    const url = this.url.current.value;

    if (title && content && url) {
      const article = { title, content, url };
      this.props.addArticle(article);
    }
  };

  render() {
    return (
      <>
        <form action="" className="form">
          <h3>Add a new article</h3>
          <input type="text" placeholder="Title" ref={this.title} />
          <input
            type="text"
            placeholder="Short description"
            ref={this.content}
          />
          <input type="text" placeholder="URL" ref={this.url} />
          <button type="submit" onClick={this.addCard}>
            <Link to="/list">Add</Link>
          </button>
        </form>
      </>
    );
  }
}

export default Form;
