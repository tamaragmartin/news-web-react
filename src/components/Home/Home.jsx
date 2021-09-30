import React, { Component } from "react";

class Home extends Component {

  render() {
    return (
      <section>
            <h2>Enter username</h2>
            <form> 
                <label>Name:</label>
                <input type="text" name="name" />      
                <input type="submit" value="Send" />
            </form>
      </section>
    );
  }
}

export default Home;
