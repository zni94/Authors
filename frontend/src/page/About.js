import { Fragment } from "react";
import "../lib/css/page/about.css";

const About = () => {
  return (
    <Fragment>
      <div id={"about"}>
        <p is={"title"}>Who is Authors ?</p>
        <p is={"contents"}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <p is={"contents"}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
        <p is={"contents"}>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
      </div>
    </Fragment>
  );
};

export default About;
