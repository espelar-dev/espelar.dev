import * as React from "react";
import Hero from "./Hero";

export type TextProps = {
  heroHeading: Array<string>;
  heroParagraphRegular: Array<string>;
  heroParagraphBold: Array<string>;
}

export type ButtonProps = {
  btnPrimaryText: string;
  btnSecondaryText: string;
}

export type ContentProps = {
  text: TextProps;
  btnText: ButtonProps;
}

const content: ContentProps = {
  text: {
    heroHeading: [
      "We're a web & mobile development and design studio"
    ],
    heroParagraphRegular: [
      "Schedule a free call with us!",
      "We'll align ourselves with your vision, and make you a proposal."
    ],
    heroParagraphBold: [
      "Weekly deliverables, an obsession with perfection!\u{1F984}"
    ],
  },
  btnText: {
    btnPrimaryText: "Schedule a call",
    btnSecondaryText: "Learn more"
  }
}

const Content = () => {
  return (
    <div className="content">
      <Hero content={content} />
    </div>
  )
}

export default Content;