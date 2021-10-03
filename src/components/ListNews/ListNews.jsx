import React, { Component } from "react";
import axios from "axios";

import { Ellipsis } from "react-spinners-css";

import Card from "../Card";

class ListNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsList: [],
    };
  }

  //Fetch de noticias
  fetchNews = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const resp = await axios.get(
      `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${process.env.REACT_APP_API_KEY}`
    );

    const data = await resp.data.articles;
    const result = data.slice(0, 5); //limitar a 5

    //resultado del fetch + añadidos form
    this.setState({
      newsList: [...result, ...this.props.article],
    });
  };

  componentDidMount() {
    this.fetchNews();
  }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log("prevProps: ", prevProps, "prevState: ", prevState);
  //   console.log("componentDidUpdate");
  // }

  // componentWillUnmount() {
  //   console.log("componentWillUnmount");
  // }

  removeOne = (i) => {
    const originalNews = this.state.newsList.filter((card, j) => j !== i);
    this.setState({ newsList: originalNews });
  };

  render() {
    const newsList = this.state.newsList;

    if (newsList.length === 0) {
      return (
        <div>
          <Ellipsis color="#f08c33" size={100} />
        </div>
      );
    } else {
      return (
        <section className="list">
          <h3>Suggested posts</h3>
          {this.state.newsList.map((card, i) => (
            <Card info={card} key={i} removeOne={() => this.removeOne(i)} /> //TODO: revisar fuera de render no funciona
          ))}
        </section>
      );
    }
  }
}

export default ListNews;
