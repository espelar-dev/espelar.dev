import * as React from "react";
import { Link } from "gatsby";
import { linkPath, linkText } from "../../util";

type NavLinkProps = {
  text: string;
  type: "link" | "button";
};

const NavLink = ({ type, text }: NavLinkProps) => {
  return (
    type === "link" ?
      <div className={`navlink-${type}`}><Link className="navlink-link-text" to={linkPath(text)}>{linkText(text)}</Link></div> :
      <button className={`navlink-${type}`}><Link className="navlink-button-text" to={linkPath(text)}>{linkText(text)}</Link></button>
  );
}

export default NavLink;