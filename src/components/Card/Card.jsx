import React, { Component } from "react";

export class Card extends Component {
  
    render() {
      const {title,category} = this.props.info 
  
      return (
        <section>
          <p>{title}</p> 
          <p>{category}</p> 
          <button onClick={this.props.remove}>Borrar</button>
        </section>
      )
  }
}

export default Card;
