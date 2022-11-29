import * as React from "react";
import { Link } from "gatsby";
import Content from "../components/organisms/Content";
import NavBar from "../components/organisms/NavBar";
import { PageNameContext } from "../context/page-name-context";
import { useState, useEffect } from "react";
import Calendly from "../components/atoms/Calendly";

type PageProps = {
  page: string;
  children?: any;
}

type LayoutClassName = {
  layoutClassName: string;
}

const Layout = ({ page }: PageProps) => {
  const [pageName, setPageName] = useState(page);
  const themeType = typeof window !== "undefined" && localStorage.getItem("theme") || "light";

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

  const pageContent = () => {
    if (page === "contact-us") {
      return <Calendly />
    } else {
      return <Content />
    }
  }

  return (
    <PageNameContext.Provider value={{ pageName, setPageName }}>
      <main className={classNames.layoutClassName}>
        <NavBar />
        {pageContent()}
      </main>
    </PageNameContext.Provider>
  )
}

export default Layout