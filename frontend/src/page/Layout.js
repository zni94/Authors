import { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";

import "../lib/css/common.css";

import Welcome from "./Welcome";
import Footer from "../component/Footer";
import Carousel from "./Carousel";
import About from "./About";
import Gallery from "./Gallery";
import Notice from "./Notice";
import SNS from "./SNS";

const Layout = () => {
  const { isLoading } = useSelector((state) => state.loadingStore);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const posY = window.scrollY;

      const topBtn = document.getElementById("topBtn");
      if (posY > 0) topBtn.style.opacity = "1";
      else topBtn.style.opacity = "0";
    });
  }, []);

  return (
    <Fragment>
      {isLoading ? (
        <Welcome />
      ) : (
        <>
          <div id={"layout"}>
            <section>
              <Carousel />
              <About />
              <Gallery />
              <Notice />
              <SNS />
            </section>
            <Footer />
            <a id={"topBtn"} href={"#top"}>
              ↑
            </a>
          </div>
          <div></div>
        </>
      )}
    </Fragment>
  );
};

export default Layout;
