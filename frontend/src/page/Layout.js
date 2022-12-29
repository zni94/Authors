import { Fragment } from "react";
import { useSelector } from "react-redux";

import "../lib/css/layout.css";
import "../lib/css/common.css";

import Welcome from "./Welcome";
import Header from "../component/Header";
import Home from "./Home";
import About from "./About";
import Gallery from "./Gallery";
import SNS from "./SNS";
import Contact from "./Contact";
import Footer from "../component/Footer";
import EmptySection from "../component/EmptySection";

const Layout = () => {
  const { isLoading } = useSelector((state) => state.loadingStore);

  const viewHandler = () => {
    const layout = document.getElementById("layout");
    document.querySelector("html").style.overflow = "auto";
    layout.classList.remove("view");
  };

  return (
    <Fragment>
      {isLoading ? (
        <Welcome />
      ) : (
        <div id={"layout"}>
          <div id={"closeBtn"} onClick={viewHandler}>
            &times;
          </div>
          <div id={"backgroundImage"} />
          <Header />
          <section>
            <Home />
            <EmptySection index={0} />
            <About />
            <EmptySection index={1} />
            <Gallery />
            <EmptySection index={2} />
            <SNS />
            <Contact />
            <EmptySection index={3} />
          </section>
          <Footer />
          <a id={"topBtn"} href={"#top"}>
            ↑
          </a>
        </div>
      )}
    </Fragment>
  );
};

export default Layout;
