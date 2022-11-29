import { Link } from "gatsby";
import * as React from "react";

type HeroButtonTypeProps = {
  type: "primary" | "secondary";
  text: string | undefined;
}

const HeroButton = ({ type, text }: HeroButtonTypeProps) => {
  const linkText = (text?: string) => {
    if (text === "Schedule a call") {
      return "/contact-us";
    } else if (text === "Learn more") {
      return "/about";
    } else {
      return "/";
    }
  }

  return (
    <button type="button" className={`hero-button ${type}`}>
      <Link className="navlink-button-text" to={linkText(text)}>{text}</Link>
    </button>
  )
}

export default HeroButton;