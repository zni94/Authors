import { Fragment } from "react";

import instagram from "../lib/img/icon/insta_icon.png";
import youtube from "../lib/img/icon/youtube_icon.png";
import kakao from "../lib/img/icon/kakao_icon.png";
import blog from "../lib/img/icon/blog_icon.png";

const Footer = () => {
  return (
    <Fragment>
      <footer>
        <div>
          <a
            href={"https://www.instagram.com/yuri_authors/"}
            target={"_blank"}
            rel={"noreferrer noopenner"}
          >
            <img src={instagram} alt={""} />
          </a>
          <a
            href={"https://www.youtube.com/@yuri_authors"}
            target={"_blank"}
            rel={"noreferrer noopenner"}
          >
            <img src={youtube} alt={""} />
          </a>
          <a
            href={"https://open.kakao.com/me/yuri_authors"}
            target={"_blank"}
            rel={"noreferrer noopenner"}
          >
            <img src={kakao} alt={""} />
          </a>
          <a
            href={"https://blog.naver.com/yooxia"}
            target={"_blank"}
            rel={"noreferrer noopenner"}
          >
            <img src={blog} alt={""} />
          </a>
        </div>
        <h3>Visit site to get more info you want.</h3>
        <p>&copy; 2022. Authors. All right reserved.</p>
      </footer>
    </Fragment>
  );
};

export default Footer;
