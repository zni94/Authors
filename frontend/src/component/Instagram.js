import { Fragment } from "react";

import "../lib/css/components/instagram.css";
import avatar from "../lib/img/avatar.jpg";
import sample1 from "../lib/img/tattoo_sample_1.jpg";

const Instagram = () => {
  return (
    <Fragment>
      <div className={"instagram"}>
        <div className={"ig-header"}>
          <img id={"avatar"} src={avatar} alt={"avatar"} />
          <div>
            <p id={"nickname"}>yuri_authors</p>
            <p id={"follower"}>Follower 10.1k</p>
          </div>
          <button
            onClick={() => {
              window.open("https://www.instagram.com/yuri_authors/", "_blank");
            }}
          >
            Follow
          </button>
        </div>
        <div className={"ig-body"}>
          <img src={sample1} alt={"sample"} />
        </div>
        <div className={"ig-footer"}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
            <path
              d="m12 21-1.45-1.3q-2.525-2.275-4.175-3.925T3.75 12.812Q2.775 11.5 2.388 10.4 2 9.3 2 8.15 2 5.8 3.575 4.225 5.15 2.65 7.5 2.65q1.3 0 2.475.55T12 4.75q.85-1 2.025-1.55 1.175-.55 2.475-.55 2.35 0 3.925 1.575Q22 5.8 22 8.15q0 1.15-.387 2.25-.388 1.1-1.363 2.412-.975 1.313-2.625 2.963-1.65 1.65-4.175 3.925Z"
              fill={"rgb(237, 73, 86)"}
            />
          </svg>
        </div>
      </div>
    </Fragment>
  );
};

export default Instagram;
