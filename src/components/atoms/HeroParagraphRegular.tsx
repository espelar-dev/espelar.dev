import * as React from "react";

type HeroParagraphRegularProps = {
  text: string;
  pageName: string;
}

type HeroParagraphRegularClassName = {
  heroParagraphRegularClassName: string;
}

const HeroParagraphRegular = ({ text, pageName }: HeroParagraphRegularProps) => {
  let classNames: HeroParagraphRegularClassName;

  if (pageName === "about") {
    classNames = {
      heroParagraphRegularClassName: "hero-paragraph-regular-about"
    }
  } else {
    classNames = {
      heroParagraphRegularClassName: "hero-paragraph-regular"
    }
  }

  return (
    <p className={classNames.heroParagraphRegularClassName}>{text}</p>
  )
}

export default HeroParagraphRegular;