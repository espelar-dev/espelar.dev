import * as React from "react";
import { useState } from "react";
import IconTheme from "../atoms/IconTheme";
import NavLink from "../atoms/NavLink";
import Calendly from "../atoms/Calendly";

const Nav = () => {
  return (
    <div className="nav">
      <NavLink type="link" text="home" />
      <NavLink type="link" text="about" />
      <NavLink type="button" text="contact us" />
      <IconTheme />
    </div>
  )
}

export default Nav;