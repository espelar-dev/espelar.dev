import * as React from "react";
import Space from "../atoms/Space";
import HeroButtonGroup from "../molecules/HeroButtonGroup";
import HeroTextGroup from "../molecules/HeroTextGroup";
import { ContentProps } from "./Content";

type HeroContentProps = {
  content: ContentProps
}

const Hero = ({ content }: HeroContentProps) => {
  return (
    <div className="hero">
      <HeroTextGroup text={content.text} />
      <Space />
      <Space />
      <HeroButtonGroup btnText={content.btnText} />
    </div>
  )
}

export default Hero;