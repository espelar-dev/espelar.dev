import * as React from "react";
import { Link } from "gatsby";
import Content from "../components/organisms/Content";
import NavBar from "../components/organisms/NavBar";
import { PageNameContext } from "../context/page-name-context";
import { useState, useEffect } from "react";

type PageProps = {
  page: string;
  children?: any;
}

type LayoutClassName = {
  layoutClassName: string;
}

const Layout = ({ page }: PageProps) => {
  const [pageName, setPageName] = useState(page);
  const themeType = localStorage.getItem("theme") || "light";

  let classNames: LayoutClassName;

  if (themeType === "light") {
    classNames = {
      layoutClassName: "main"
    }
  } else {
    classNames = {
      layoutClassName: "main-dark"
    }
  }

  return (
    <PageNameContext.Provider value={{ pageName, setPageName }}>
      <main className={classNames.layoutClassName}>
        <NavBar />
        <Content />
      </main>
    </PageNameContext.Provider>
  )
}

export default Layout