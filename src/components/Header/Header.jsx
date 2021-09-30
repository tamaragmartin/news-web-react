import React, { Component } from "react";
import Nav from "../Nav/Nav";

import {userContext} from '../../context/userContext';

class Header extends Component {
  render() {
    return (
    <header>
      <h1>News feed</h1>
      <Nav/>
    </header>
    );
  }
}

export default Header;
