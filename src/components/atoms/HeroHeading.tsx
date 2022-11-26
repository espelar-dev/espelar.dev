import * as React from "react";

type HeroHeadingProps = {
  text: string;
  pageName: string;
}

type HeroHeadingClassName = {
  heroHeadingClassName: string;
}

const HeroHeading = ({ text, pageName }: HeroHeadingProps) => {
  let classNames: HeroHeadingClassName;

  if (pageName === "about") {
    classNames = {
      heroHeadingClassName: "hero-heading-about"
    }
  } else {
    classNames = {
      heroHeadingClassName: "hero-heading"
    }
  }

  return (
    <h1 className={classNames.heroHeadingClassName}>{text}</h1>
  )
}

export default HeroHeading;