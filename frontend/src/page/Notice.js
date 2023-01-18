import { Fragment } from "react";

import "../lib/css/page/notice.css";
import Button from "../component/Button";

const Notice = () => {
  return (
    <Fragment>
      <div id={"notice"}>
        <p is={"title"}>Notice</p>
        <p is={"sub-title"}>
          Recruitment of students for tattoo and booth share
        </p>
        <Button
          openLink={"https://open.kakao.com/me/yuri_authors"}
          btnName={"send a message"}
        />
      </div>
    </Fragment>
  );
};

export default Notice;
