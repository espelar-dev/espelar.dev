import * as React from "react";

type HeroParagraphBoldProps = {
  text: string;
  pageName: string;
}

const HeroParagraphBold = ({ text, pageName }: HeroParagraphBoldProps) => {
  return (
    <p className="hero-paragraph-bold">{text}</p>
  )
}

export default HeroParagraphBold;