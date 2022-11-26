import * as React from "react";
import HeroHeading from "../atoms/HeroHeading";
import HeroParagraphBold from "../atoms/HeroParagraphBold";
import HeroParagraphRegular from "../atoms/HeroParagraphRegular";
import Space from "../atoms/Space";
import { TextProps } from "../organisms/Hero";

type HeroTextGroupProps = {
  text: TextProps;
  pageName: string;
}

const HeroTextGroup = ({ text, pageName }: HeroTextGroupProps) => {
  const heroHeading = text.heroHeading.map((item: string) => <HeroHeading
    text={item}
    pageName={pageName} />);

  let heroParagraphBold;

  let heroParagraphRegular;

  if (pageName === "about") {
    heroParagraphRegular = text?.heroParagraphRegular?.map((item: string) => (<><HeroParagraphRegular
      text={item}
      pageName={pageName} />
      <Space /></>));
  } else {
    heroParagraphBold = text?.heroParagraphBold?.map((item: string) => <HeroParagraphBold
      text={item}
      pageName={pageName} />);

    heroParagraphRegular = text?.heroParagraphRegular?.map((item: string) => <HeroParagraphRegular
      text={item}
      pageName={pageName} />);
  }

  return (
    <div className="hero-text-group">
      {heroHeading}
      <Space />
      <Space />
      {heroParagraphRegular}
      {pageName === "about" ? null : <Space />}
      {heroParagraphBold}
      {pageName === "about" ? null : <Space />}
    </div>
  )
}

export default HeroTextGroup;