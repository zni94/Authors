import { Fragment } from "react";
import "../lib/css/page/about.css";

const About = () => {
  return (
    <Fragment>
      <div id={"about"}>
        <p is={"title"}>Who is Authors ?</p>
        <p is={"contents"}>She is a female tattooist in South Korea.</p>
        <p is={"contents"}>
          After graduating from Hongik University with a master's degree, I am
          currently pursuing a Ph.D. program.
        </p>
        <p is={"contents"}>
          Her ability with tens of thousands of followers is already well known.
        </p>
        <p is={"contents"}>Aren't you curious, too?</p>
      </div>
    </Fragment>
  );
};

export default About;
