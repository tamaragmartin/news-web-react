import React, { Component } from "react";

export class Card extends Component {
  render() {
    const { title, content, url } = this.props.info;

    return (
      <section className="card">
        <h2>{title}</h2>
        <h3>{content}</h3>
        <a href={url} target="_blank" rel="noreferrer">
          Read full article
        </a>
        <button onClick={this.props.removeOne}>Delete</button>
      </section>
    );
  }
}

export default Card;
