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
            <p is={"sub-title"}>Smoking</p>
            <p>
              Like cigarette smoke flying in the air. won't our lives someday be
              scattered in the air, too?
            </p>
          </div>
        </div>
        <div className={"background-image art"} id={"img2"}>
          <div>
            <p is={"sub-title"}>Jellyfish</p>
            <p>We sometimes need to live as flexible as jellyfish.</p>
          </div>
        </div>
        <div className={"background-image art"} id={"img3"}>
          <div>
            <p is={"sub-title"}>Agony</p>
            <p>The harder it is, close your eyes and think deeply.</p>
          </div>
        </div>
        <div className={"background-image art"} id={"img4"}>
          <div>
            <p is={"sub-title"}>Rose</p>
            <p>Watch out for thorns on roses. It could bleed.</p>
          </div>
        </div>
        <div className={"background-image art"} id={"img5"}>
          <div>
            <p is={"sub-title"}>Concern</p>
            <p>
              If I treat my surroundings with indifference, even I may not be
              noticed.
            </p>
          </div>
        </div>

        <p is={"summary"} id={"summary1"}>
          <span is={"sub-title"}>What is the most precious thing to you?</span>
          <span>
            The most meaningful, most memorable moment. We paint the moment.
          </span>
        </p>
        <p is={"summary"} id={"summary2"}>
          <span is={"sub-title"}>Soft, but not soft</span>
          <span>
            Sometimes like calm waves, sometimes like rough waves. The painting
            style is as soft and strong as water that cannot be predicted.
          </span>
        </p>
      </div>
    </Fragment>
  );
};

export default Gallery;
