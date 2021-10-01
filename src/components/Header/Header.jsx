import React, { Component } from "react";
import Nav from "../Nav/Nav";

import { userContext } from "../../context/userContext";

// import logo from '../../assets/newspaper.svg'

class Header extends Component {
  render() {
    return (
      <header className="header">
        {/* <img src={logo} alt="newspaper"/> */}
        <h1>Tamara's News Feed</h1>
        <Nav />
        <userContext.Consumer>
          {({ user, logout }) =>
            user.name ? (
              <>
                <p>Hola de nuevo, {user.name}</p>
                <button onClick={() => logout()}>Cerrar sesión</button>
              </>
            ) : (
              ""
            )
          }
        </userContext.Consumer>
      </header>
    );
  }
}

export default Header;
