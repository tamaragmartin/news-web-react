import React, { Component } from "react";
import Nav from "../Nav/Nav";

import {userContext} from '../../context/userContext';

class Header extends Component {
  render() {
    return (
    <header>
      <h1>News feed</h1>
      <Nav/>
      <userContext.Consumer>
        {({user}) =>                    
          <>
            <p>Hola de nuevo, {user.name}</p>
          </> 
        }
        </userContext.Consumer>
    </header>
    );
  }
}

export default Header;
