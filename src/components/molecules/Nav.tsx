import * as React from "react";
import NavLink from "../atoms/NavLink";

const Nav = () => {
  return (
    <div className="nav">
      <NavLink type="link" text="home" />
      <NavLink type="link" text="about" />
      <NavLink type="button" text="contact us" />
    </div>
  )
}

export default Nav;