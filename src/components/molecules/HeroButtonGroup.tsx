import * as React from "react";
import HeroButton from "../atoms/HeroButton";
import Space from "../atoms/Space";
import { ButtonProps } from "../organisms/Hero";

type HeroButtonGroupProps = {
  btnText: ButtonProps;
}

const HeroButtonGroup = ({ btnText }: HeroButtonGroupProps) => {
  return (
    <div className="hero-button-group">
      <HeroButton type="primary" text={btnText.btnPrimaryText} />
      <HeroButton type="secondary" text={btnText.btnSecondaryText} />
    </div>
  )
}

export default HeroButtonGroup;