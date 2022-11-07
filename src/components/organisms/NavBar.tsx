import * as React from "react";
import Logo from "../atoms/Logo";
import Nav from "../molecules/Nav";

const NavBar = () => {
  return (
    <div className="navbar">
      <Logo />
      <Nav />
    </div>
  )
}

export default NavBar;