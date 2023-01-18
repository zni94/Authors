import { Fragment } from "react";

import icon_1 from "../lib/img/icon/kakao_icon.png";
import icon_2 from "../lib/img/icon/insta_icon.png";
import icon_3 from "../lib/img/icon/youtube_icon.png";

const Footer = () => {
  return (
    <Fragment>
      <footer>
        <div className={"footer-section"}>
          <p is={"contents"}>Info</p>
          <p is={"sub-contents"}>
            <strong>Authors</strong>&emsp;|&emsp;
            <strong>Owner.</strong>&nbsp;Yuri&emsp;|&emsp;
            <strong>Location.</strong>&nbsp;Nonhyeon-dong, Gangnam-gu, Seoul
          </p>
          <p is={"sub-contents"}>
            <strong>Tel.</strong>&nbsp;+82.10-1234-5678&emsp;|&emsp;
            <strong>E-mail.</strong>&nbsp;yooxia@naver.com
          </p>
        </div>
        <div className={"footer-section"}>
          <p is={"contents"}>Social</p>
          <div id={"snsIcon"}>
            <img
              src={icon_1}
              alt={"kakao"}
              onClick={() => {
                window.open("https://open.kakao.com/me/yuri_authors", "_blank");
              }}
            />
            <img
              src={icon_2}
              alt={"instagram"}
              onClick={() => {
                window.open(
                  "https://www.instagram.com/yuri_authors/",
                  "_blank"
                );
              }}
            />
            <img
              src={icon_3}
              alt={"youtube"}
              onClick={() => {
                window.open("https://www.youtube.com/@yuri_authors", "_blank");
              }}
            />
          </div>
        </div>
        <div className={"footer-section"}>
          <p is={"sub-contents"}>&copy; 2022. Authors. All right reserved.</p>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
