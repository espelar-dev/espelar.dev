import * as React from "react";
import HeroHeading from "../atoms/HeroHeading";
import HeroParagraphBold from "../atoms/HeroParagraphBold";
import HeroParagraphRegular from "../atoms/HeroParagraphRegular";
import Space from "../atoms/Space";
import { TextProps } from "../organisms/Content";

type HeroTextGroupProps = {
  text: TextProps;
}

const HeroTextGroup = ({ text }: HeroTextGroupProps) => {
  return (
    <div className="hero-text-group">
      {text.heroHeading.map((item: string) => <HeroHeading text={item} />)}
      <Space />
      <Space />
      {text.heroParagraphRegular.map((item: string) => <HeroParagraphRegular text={item} />)}
      <Space />
      {text.heroParagraphBold.map((item: string) => <HeroParagraphBold text={item} />)}
    </div>
  )
}

export default HeroTextGroup;