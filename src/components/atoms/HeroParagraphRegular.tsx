import * as React from "react";
import { useContext } from "react";
import { PageNameContext } from "../../context/page-name-context";

type HeroParagraphRegularProps = {
  text: string;
}

type HeroParagraphRegularClassName = {
  heroParagraphRegularClassName: string;
}

const HeroParagraphRegular = ({ text }: HeroParagraphRegularProps) => {
  const { pageName, setPageName } = useContext(PageNameContext);
  const themeType = typeof window !== "undefined" && localStorage.getItem("theme") || "light";

  let classNames: HeroParagraphRegularClassName;

  if (themeType === "light") {
    if (pageName === "about") {
      classNames = {
        heroParagraphRegularClassName: "hero-paragraph-regular-about"
      }
    } else {
      classNames = {
        heroParagraphRegularClassName: "hero-paragraph-regular"
      }
    }
  } else {
    if (pageName === "about") {
      classNames = {
        heroParagraphRegularClassName: "hero-paragraph-regular-about-dark"
      }
    } else {
      classNames = {
        heroParagraphRegularClassName: "hero-paragraph-regular"
      }
    }
  }

  return (
    <p className={classNames.heroParagraphRegularClassName}>{text}</p>
  )
}

export default HeroParagraphRegular;