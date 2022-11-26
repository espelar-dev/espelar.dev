import * as React from "react"
import { useState } from "react";
import Content from "../components/organisms/Content"
import NavBar from "../components/organisms/NavBar"
import { PageNameContext } from "../context/page-name-context";
import "../styles.css"

// const pageName = "about";

const AboutPage = () => {
  const [pageName, setPageName] = useState("about");

  return (
    <PageNameContext.Provider value={{ pageName, setPageName }}>
      <main className={pageName}>
        <NavBar />
        <Content />
      </main>
    </PageNameContext.Provider>
  )
}
export const Head = () => <title>About</title>

export default AboutPage