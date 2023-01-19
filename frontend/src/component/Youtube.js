import { Fragment } from "react";
import youtube_avatar from "../lib/img/avatar/youtube_avatar.jpg";
import "../lib/css/components/youtube.css";

const Youtube = () => {
  return (
    <Fragment>
      <div className={"youtube"}>
        <div className={"yb-header"}>
          <img id={"avatar"} src={youtube_avatar} alt={"avatar"} />
          <div>
            <p id={"nickname"}>Authors 어터즈</p>
            <p id={"id"}>@yuri_authors</p>
            <p id={"subscriber"}>Subscriber 107</p>
          </div>
          <button
            onClick={() => {
              window.open("https://www.youtube.com/@yuri_authors", "_blank");
            }}
          >
            Subscribe
          </button>
        </div>
        <div className={"yb-body"}>
          <iframe
            height={"380"}
            src="https://www.youtube-nocookie.com/embed/Scni6nLKm3M"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Youtube;
