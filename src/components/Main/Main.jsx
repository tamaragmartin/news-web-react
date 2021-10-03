import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../Home";
import Form from "../Form";
import ListNews from "../ListNews";
import Error from "../Error";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  addArticle = (newArticle) => {
    this.setState({ data: [...this.state.data, newArticle] });
  };

  render() {
    return (
      <main>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route
            path="/form"
            component={() => <Form addArticle={this.addArticle} />}
          />
          <Route
            path="/list"
            component={() => <ListNews article={this.state.data} />}
          />
          <Route component={Error} />
        </Switch>
      </main>
    );
  }
}

export default Main;
