import * as React from "react";

type HeroButtonTypeProps = {
  type: "primary" | "secondary";
  text: string;
}

const HeroButton = ({ type, text }: HeroButtonTypeProps) => {
  return (
    <button className={`hero-button ${type}`}>{text}</button>
  )
}

export default HeroButton;