import { Fragment } from "react";
import { useSelector } from "react-redux";

import "../lib/css/layout.css";
import "../lib/css/common.css";

import Welcome from "./Welcome";
import Header from "../component/Header";
import Main from "./Main";
import About from "./About";
import Gallery from "./Gallery";
import SNS from "./SNS";
import Contact from "./Contact";
import Footer from "../component/Footer";

const Layout = () => {
  const { isLoading } = useSelector((state) => state.loadingStore);

  return (
    <Fragment>
      {isLoading ? (
        <Welcome />
      ) : (
        <div className={"layout"}>
          <div id={"backgroundImage"} />
          <Header />
          <section>
            <Main />
            <About />
            <Gallery />
            <SNS />
            <Contact />
          </section>
          <Footer />
        </div>
      )}
    </Fragment>
  );
};

export default Layout;
