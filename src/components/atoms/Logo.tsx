import { Link } from "gatsby";
import * as React from "react";
import logo from "../../images/logo.png";

const Logo = () => {
  return (
    <Link className="logo-container" to="/">
      <img className="logo" src={logo} />
    </Link>
  )
}

export default Logo;