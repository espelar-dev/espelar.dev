import * as React from "react";
import { Link } from "gatsby";
import { linkPath, linkText } from "../../util";

type NavLinkProps = {
  text: string;
  type: "link" | "button";
};

type NavLinkClassName = {
  navlinkLinkTextClassName: string;
  navlinkButtonTextClassName: string;
}

const NavLink = ({ type, text }: NavLinkProps) => {
  const themeType = localStorage.getItem("theme") || "light";

  let classNames: NavLinkClassName;

  if (themeType === "light") {
    classNames = {
      navlinkLinkTextClassName: "navlink-link-text",
      navlinkButtonTextClassName: "navlink-button-text"
    }
  } else {
    classNames = {
      navlinkLinkTextClassName: "navlink-link-text-dark",
      navlinkButtonTextClassName: "navlink-button-text"
    }
  }

  return (
    type === "link" ?
      <div className={`navlink-${type}`}>
        <Link
          className={classNames.navlinkLinkTextClassName}
          to={linkPath(text)}>{linkText(text)}
        </Link>
      </div> :
      <button className={`navlink-${type}`}>
        <Link
          className={classNames.navlinkButtonTextClassName}
          to={linkPath(text)}>{linkText(text)}
        </Link>
      </button>
  );
}

export default NavLink;