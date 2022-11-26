import { Link } from "gatsby";
import * as React from "react";

type HeroButtonTypeProps = {
  type: "primary" | "secondary";
  text: string | undefined;
}

const HeroButton = ({ type, text }: HeroButtonTypeProps) => {
  return (
    <button type="button" className={`hero-button ${type}`}>
      <Link className="navlink-button-text" to="">{text}</Link>
    </button>
  )
}

export default HeroButton;