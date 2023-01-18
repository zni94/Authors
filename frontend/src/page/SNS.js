import { Fragment } from "react";
import Button from "../component/Button";
import "../lib/css/page/sns.css";
import Instagram from "../component/Instagram";
import Youtube from "../component/Youtube";

const SNS = () => {
  return (
    <Fragment>
      <div id={"sns"}>
        <p is={"title"}>Latest Activities</p>
        <div id={"contentsBox"}>
          <div is={"contents"}>
            <Youtube />
            <Button
              openLink={"https://www.youtube.com/@yuri_authors"}
              btnName={"subscribe on channel"}
            />
          </div>
          <div is={"contents"}>
            <Instagram />
            <Button
              openLink={"https://www.instagram.com/yuri_authors/"}
              btnName={"follow instagram"}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SNS;
