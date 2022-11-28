import * as React from "react";
import { useContext } from "react";
import HeroButton from "../atoms/HeroButton";
import Space from "../atoms/Space";
import { ButtonProps } from "../organisms/Hero";
import { PageNameContext } from "../../context/page-name-context";

type HeroButtonGroupProps = {
  btnText: ButtonProps;
}

const HeroButtonGroup = ({ btnText }: HeroButtonGroupProps) => {
  const { pageName, setPageName } = useContext(PageNameContext);

  return (
    <div className="hero-button-group">
      <HeroButton type="primary" text={btnText.btnPrimaryText} />
      {pageName === "index" && <HeroButton type="secondary" text={btnText.btnSecondaryText} />}
    </div>
  )
}

export default HeroButtonGroup;