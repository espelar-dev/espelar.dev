import * as React from "react";
import { useContext } from "react";
import Space from "../atoms/Space";
import HeroButtonGroup from "../molecules/HeroButtonGroup";
import HeroTextGroup from "../molecules/HeroTextGroup";
import { PageNameContext } from "../../context/page-name-context";

export type TextProps = {
  heroHeading: Array<string>;
  heroParagraphRegular?: Array<string>;
  heroParagraphBold?: Array<string>;
}

export type ButtonProps = {
  btnPrimaryText?: string;
  btnSecondaryText?: string;
}

export type HeroProps = {
  text: TextProps;
  btnText: ButtonProps;
}

export type HeroContentProps = {
  content: HeroProps;
  // pageName: string;
}

type HeroClassName = {
  heroClassName: string;
}

const Hero = ({ content }: HeroContentProps) => {
  const { pageName, setPageName } = useContext(PageNameContext);

  let classNames: HeroClassName;

  if (pageName === "about") {
    classNames = {
      heroClassName: "hero-about"
    }
  } else {
    classNames = {
      heroClassName: "hero"
    }
  }

  return (
    <div className={classNames.heroClassName}>
      <HeroTextGroup text={content.text} />
      <Space />
      <Space />
      <HeroButtonGroup btnText={content.btnText} />
    </div>
  )
}

export default Hero;