import React, { Component } from "react";

// import { withRouter } from "react-router-dom";
// import { Redirect } from 'react-router-dom'

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

  //*Para redirigir a List
  // submitForm(e) {
  //   e.preventDefault();
  //   this.props.history.push("/list");
  // }

  //   onSubmit = () => {
  //     return <Redirect to='/list' />
  // }

  render() {
    return (
      <>
        <h3>Add a new article</h3>
        {/* <form onSubmit={this.submitForm.bind(this)} className="form"> */}
        <form action="">
          <input type="text" placeholder="Title" ref={this.title} />
          <input
            type="text"
            placeholder="Short description"
            ref={this.content}
          />
          <input type="text" placeholder="URL" ref={this.url} />
          <button onClick={this.addCard}>Add</button>
          {/* <input type="submit" value="Add" onClick={this.addCard} /> */}
        </form>
      </>
    );
  }
}

// export default withRouter(Form);
export default Form;
