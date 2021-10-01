import React, { Component } from "react";
import axios from "axios";

import Card from "../Card";

import env from "react-dotenv";

class ListNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsLista: [],
    };
  }

  removeOne = (i) => {
    const fetchedNews = this.state.newsLista.filter((card, j) => j !== i);
    this.setState({ newsLista: fetchedNews });
  };

  async componentDidMount() {
    await new Promise((resolve) => setTimeout(resolve, 2000));
       
    const resp = await axios.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${process.env.REACT_APP_API_KEY}`);
       
     const data = await resp.data.articles;
    
      this.setState({
         newsLista: data.slice(0, 5),
      });
    console.log("componentDidMount");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps: ", prevProps, "prevState: ", prevState);
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    return (
      <section>
        <h3>Noticias sugeridas</h3>
        {this.state.newsLista.map((card, i) => (
          <Card info={card} key={i} removeOne={() => this.removeOne(i)} />
        ))}
      </section>
    );
  }
}

export default ListNews;
