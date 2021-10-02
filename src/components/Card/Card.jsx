import React, { Component } from "react";

export class Card extends Component {
  render() {
    const { title, content, url } = this.props.info;

    return (
      <section>
        <p>{title}</p>
        <p>{content}</p>
        <p> <a href={url} target="_blank" rel="noreferrer">Link</a> </p>
        <button onClick={this.props.removeOne}>Remove</button>
      </section>
    );
  }
}

export default Card;
