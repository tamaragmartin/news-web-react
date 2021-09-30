import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (         
    <nav className="nav">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/form">Form</Link></li>
        <li><Link to="/list">List</Link></li>
      </ul>
    </nav>);
  }
}

export default Nav;
