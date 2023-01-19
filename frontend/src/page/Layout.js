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

          <div id={"pop"}>
            <div id={"pop-header"}>
              <strong>Welcome Authors</strong>
              <br />
              <br />
              <p is={"sub-contents"}>
                This webpage is designed for your PC environment. When operating
                in mobile and tablet environments, some animation functions may
                not function normally.
              </p>
              <p is={"sub-contents"}>
                Therefore, it is recommended that you see through the PC for a
                more accurate picture appreciation and explanation of the work.
              </p>
              <p is={"sub-contents"}>
                If you want to proceed with a mobile device, you can see the
                description of the work by touching each picture to appreciate
                the picture.
              </p>
              <p is={"sub-contents"}>
                I would appreciate it if you could refer to this point.
              </p>
              <p is={"sub-contents"}>Thank you.</p>
            </div>
            <div id={"pop-footer"}>
              <p
                is={"sub-contents"}
                onClick={() => {
                  document.getElementById("pop").style.display = "none";
                }}
              >
                &times;&nbsp;close
              </p>
            </div>
          </div>
        </>
      )}
    </Fragment>
  );
};

export default Layout;
