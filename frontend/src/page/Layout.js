import ImageSequence from "./ImageSequence";
import { Fragment } from "react";
import { useSelector } from "react-redux";

import "../lib/css/layout.css";
import "../lib/css/common.css";
import Header from "../component/Header";
import Main from './Main';
import About from './About';
import Gallery from './Gallery';

const Layout = () => {
  const { isLoading } = useSelector((state) => state.loadingStore);

   return (
     <Fragment>
      {isLoading ? (
        <ImageSequence />
      ) : (
        <div className={"layout"}>
          <Header />
          <section>
            <Main/>
            <About/>
            <Gallery/>
          </section>
        </div>
      )}
    </Fragment>
    )

};

export default Layout;
