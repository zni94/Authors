import { Fragment } from "react";

import "../lib/css/page/gallery.css";

const Gallery = () => {
  return (
    <Fragment>
      <div className={"background-image"} id={"gallery"}>
        <div id={"opacity"} />
        <p is={"title"}>Art Gallery</p>

        <div className={"background-image art"} id={"img1"}>
          <div>
            <p is={"sub-title"}>Lorem Ipsum</p>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
        </div>
        <div className={"background-image art"} id={"img2"}>
          <div>
            <p is={"sub-title"}>Lorem Ipsum</p>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
        </div>
        <div className={"background-image art"} id={"img3"}>
          <div>
            <p is={"sub-title"}>Lorem Ipsum</p>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
        </div>
        <div className={"background-image art"} id={"img4"}>
          <div>
            <p is={"sub-title"}>Lorem Ipsum</p>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
        </div>
        <div className={"background-image art"} id={"img5"}>
          <div>
            <p is={"sub-title"}>Lorem Ipsum</p>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
        </div>

        <p is={"summary"} id={"summary1"}>
          <span is={"sub-title"}>Lorem Ipsum</span>
          <span>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.{" "}
          </span>
        </p>
        <p is={"summary"} id={"summary2"}>
          <span is={"sub-title"}>Lorem Ipsum</span>
          <span>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.{" "}
          </span>
        </p>
      </div>
    </Fragment>
  );
};

export default Gallery;
