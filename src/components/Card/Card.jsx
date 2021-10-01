import React, { Component } from "react";

export class Card extends Component {
  
    render() {
      const {title,content,url} = this.props.info 
  
      return (
        <section>
          <p>{title}</p> 
          <p>{content}</p> 
          <p>{url}</p>
          <button onClick={this.props.removeOne}>Borrar</button>
        </section>
      )
  }
}

export default Card;
