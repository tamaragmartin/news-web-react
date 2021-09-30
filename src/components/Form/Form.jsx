import React, { Component } from "react";
import Card from '../Card'
import cards from '../../data.json'



export class Form extends Component {

      constructor(props) {
      super(props)
    
      this.state = {
        data: {},
        cards: cards,     
      };
    }

    addCard = (e) => {
      e.preventDefault();
      const title = e.target.title.value;
      const category = e.target.category.value;
      
      let newCard = {title,category}; 
      this.setState({ cards: [...this.state.cards, newCard] });
    }
    
    removeOne = (i) => {
      const remainingCards = this.state.cards.filter((card, j) => j!==i)
      this.setState({cards:remainingCards})
    }

    paintCards = () => {
      return this.state.cards.map((card, i) => (
        <Card info={card} key={i} remove={() => this.removeOne(i)} />
      ));
    }

    render() {
      return (
      <>
                 
        <form onSubmit={this.addCard} className="form"> 
          <label>
          <input type="text" name="title" placeholder="Añade una noticia" className="newCard" />
          </label> 
          <label>
          <input type="text" name="category" placeholder="Añade una categoria" />
          </label> 
          <input type="submit" value="Add" className="addButton"/>
        </form>  
        
        <section> 
          <article>
             <h4>Noticias añadidas:</h4> 
             {this.paintCards()} 
          </article>
        </section> 
        
        
        
      </>
      )
    }
  }


export default Form;
