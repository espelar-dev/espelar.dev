import * as React from "react";
import { useState } from "react";
import IconTheme from "../atoms/IconTheme";
import NavLink from "../atoms/NavLink";
import Calendly from "../atoms/Calendly";

const Nav = () => {
  const [showCalendly, setShowCalendly] = useState(false);

  const toggleCalendly = (toggle: boolean) => setShowCalendly(toggle);

  return (
    <div className="nav">
      <NavLink type="link" text="home" />
      <NavLink type="link" text="about" />
      <NavLink type="button" text="contact us" onClick={() => toggleCalendly(true)} />
      <IconTheme />
    </div>
  )
}

export default Nav;