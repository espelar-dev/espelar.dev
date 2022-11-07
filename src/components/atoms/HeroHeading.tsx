import * as React from "react";

const HeroHeading = ({ text }: { text: string }) => {
  return (
    <h1 className="hero-heading">{text}</h1>
  )
}

export default HeroHeading;