import * as React from "react";
import Content from "../components/organisms/Content";
import Footer from "../components/organisms/Footer";
import NavBar from "../components/organisms/NavBar";
import "../styles.css"

const IndexPage = () => {
  return (
    <main className="index">
      <NavBar />
      <Content />
      {/* <Footer /> */}
    </main>
  );
};

export const Head = () => <title>Home</title>

export default IndexPage
