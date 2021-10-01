import React, { Component } from "react";
import axios from "axios";

import Card from "../Card";

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
    //const resp = await axios.get(process.env.REACT_APP_URL);
    const resp = await axios.get("https://pokeapi.co/api/v2/pokemon");
    const data = await resp.data;
    this.setState({
      newsLista: data.results.slice(0, 5),
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
