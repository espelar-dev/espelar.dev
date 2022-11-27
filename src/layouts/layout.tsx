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

const Layout = ({ page }: PageProps) => {
  const [pageName, setPageName] = useState(page);

  // useEffect(() => setPageName(page), [page]);

  return (
    <PageNameContext.Provider value={{ pageName, setPageName }}>
      <main className={pageName}>
        <NavBar />
        <Content />
      </main>
    </PageNameContext.Provider>
  )
}

export default Layout