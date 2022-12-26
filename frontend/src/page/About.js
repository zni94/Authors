import "../lib/css/page/about.css";
import { Fragment } from "react";
import Button from "../component/Button";

const About = () => {
  return (
    <Fragment>
      <div id={"about"}>
        <div className={"contents-layout"}>
          <h2 className={"contents-title"}>About</h2>
          <div className={"contents-body"}>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
            <p>
              The point of using Lorem Ipsum is that it has a more-or-less
              normal distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
          </div>
          <Button
            openLink={"https://www.instagram.com/yuri_authors/"}
            btnName={"VIEW MORE"}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default About;
