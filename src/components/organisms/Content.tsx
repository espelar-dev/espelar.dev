import * as React from "react";
import { useContext } from "react";
import Hero from "./Hero";
import { PageNameContext } from "../../context/page-name-context";

const Content = () => {
  const { pageName, setPageName } = useContext(PageNameContext);

  let heroContent;

  if (pageName === "about") {
    heroContent = {
      text: {
        heroHeading: [
          "We're espelar.dev"
        ],
        heroParagraphRegular: [
          "espelar.dev was born out of a vision to provide purpose-driven high-quality design and development consulting & services to leaders with visionary ideas but wanting for access to the right knowledge and resources to bring their projects to life.",
          "We work with founders and their teams from the get-go, from wireframing, design, product vision and ideation, web development, Android and iOS app development and DevOps.",
          "We analyze your needs over a series of free consultations and arrive at weekly deliverables so we can work with regular feedback, making sure what you want is what you get.😄"
        ],
      },
      btnText: {
        btnPrimaryText: "Schedule a call",
      }
    }
  } else {
    heroContent = {
      text: {
        heroHeading: [
          "We're a web & mobile development and design studio"
        ],
        heroParagraphRegular: [
          "Schedule a free call with us!",
          "We'll align ourselves with your vision, and make you a proposal."
        ],
        heroParagraphBold: [
          "Weekly deliverables, an obsession with perfection!🦄"
        ],
      },
      btnText: {
        btnPrimaryText: "Schedule a call",
        btnSecondaryText: "Learn more"
      }
    }
  }

  return (
    <div className="content">
      <Hero content={heroContent} />
    </div>
  )
}

export default Content;