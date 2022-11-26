import * as React from "react";
import { useContext } from "react";
import HeroHeading from "../atoms/HeroHeading";
import HeroParagraphBold from "../atoms/HeroParagraphBold";
import HeroParagraphRegular from "../atoms/HeroParagraphRegular";
import Space from "../atoms/Space";
import { TextProps } from "../organisms/Hero";
import { PageNameContext } from "../../context/page-name-context";

type HeroTextGroupProps = {
  text: TextProps;
}

const HeroTextGroup = ({ text }: HeroTextGroupProps) => {
  const { pageName, setPageName } = useContext(PageNameContext);

  const heroHeading = text.heroHeading.map((item: string) => <HeroHeading text={item} />);

  let heroParagraphBold;
  let heroParagraphRegular;

  if (pageName === "about") {
    heroParagraphRegular = text?.heroParagraphRegular?.map((item: string) => (<>
      <HeroParagraphRegular text={item} />
      <Space />
    </>));
  } else {
    heroParagraphBold = text?.heroParagraphBold?.map((item: string) => <HeroParagraphBold text={item} />);
    heroParagraphRegular = text?.heroParagraphRegular?.map((item: string) => <HeroParagraphRegular text={item} />);
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