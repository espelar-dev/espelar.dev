import * as React from "react";
import { useContext } from "react";
import { PageNameContext } from "../../context/page-name-context";

type HeroHeadingProps = {
  text: string;
}

type HeroHeadingClassName = {
  heroHeadingClassName: string;
}

const HeroHeading = ({ text }: HeroHeadingProps) => {
  const { pageName, setPageName } = useContext(PageNameContext);

  if (typeof window === "undefined") return null;
  const themeType = localStorage.getItem("theme");

  let classNames: HeroHeadingClassName;

  if (themeType === "light" || !themeType) {
    if (pageName === "about") {
      classNames = {
        heroHeadingClassName: "hero-heading-about"
      }
    } else {
      classNames = {
        heroHeadingClassName: "hero-heading"
      }
    }
  } else {
    if (pageName === "about") {
      classNames = {
        heroHeadingClassName: "hero-heading-about"
      }
    } else {
      classNames = {
        heroHeadingClassName: "hero-heading-dark"
      }
    }
  }

  return (
    <h1 className={classNames.heroHeadingClassName}>{text}</h1>
  )
}

export default HeroHeading;