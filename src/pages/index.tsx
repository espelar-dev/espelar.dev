import * as React from "react";
import { useState } from "react";
import Content from "../components/organisms/Content";
import Footer from "../components/organisms/Footer";
import NavBar from "../components/organisms/NavBar";
import { PageNameContext } from "../context/page-name-context";
import "../styles.css"

// const pageName = "index";

const IndexPage = () => {
  const [pageName, setPageName] = useState("index");

  return (
    <PageNameContext.Provider value={{ pageName, setPageName }}>
      <main className={pageName}>
        <NavBar />
        <Content />
      </main>
    </PageNameContext.Provider>
  );
};

export const Head = () => <title>Home</title>

export default IndexPage
