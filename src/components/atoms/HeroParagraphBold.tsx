import * as React from "react";

type HeroParagraphBoldProps = {
  text: string;
}

const HeroParagraphBold = ({ text }: HeroParagraphBoldProps) => {
  return (
    <p className="hero-paragraph-bold">{text}</p>
  )
}

export default HeroParagraphBold;