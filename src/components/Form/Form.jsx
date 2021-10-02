import React, { Component } from "react";
// import { Redirect } from "react-router-dom";

// import { userContext } from "../../context/userContext";

export class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
      
      // redirect: false,
    };
  }

  addCard = (e) => {
    e.preventDefault();
    
    this.props.handleData(this.state.data)

    //  this.setState({ redirect: true, data });
  };

  handleChange = (event)=>{
    this.setState({data: {...this.state.data,[event.target.name]: event.target.value}})
}

  paintCard = () => {
    return this.state.data;
  };

  render() {
    return (
      <>
        <section>
          <h3>Add a new article</h3>
          <form onSubmit={this.addCard} className="form">
            <input type="text" name="title" placeholder="Title" onChange={this.handleChange} />
            <input type="text" name="content" placeholder="Short description" onChange={this.handleChange}/>
            <input type="text" name="url" placeholder="URL" onChange={this.handleChange}/>
            <input type="submit" value="Load" />
            {/* <Redirect to="/list" /> & onSubmit={this.props.history.push('/list')} Redirige automáticamente ?? */}
          </form>
        </section>

        <section>
          <h4>Latest articles added</h4>
          {this.paintCard}
        </section>
      </>
    );
  }
}

export default Form;
