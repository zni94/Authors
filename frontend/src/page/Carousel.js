import "../lib/css/page/carousel.css";
import { Fragment, useEffect, useState } from "react";

import logo from "../lib/img/authors_title.png";

import img_1 from "../lib/img/gallery/carousel_1.jpg";
import img_2 from "../lib/img/gallery/carousel_2.jpg";
import img_3 from "../lib/img/gallery/carousel_3.jpg";

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const [imgList] = useState([img_1, img_2, img_3]);

  useEffect(() => {
    const carousel = document.getElementById("carousel");
    carousel.style.backgroundImage = `url(${imgList[index]})`;
  }, [index, imgList]);

  const clickHandler = (e) => {
    const type = e.currentTarget.dataset.type;

    switch (type) {
      case "prev":
        if (index > 0) return setIndex((state) => state - 1);
        setIndex(imgList.length - 1);
        break;
      case "next":
        if (index < imgList.length - 1) return setIndex((state) => state + 1);
        setIndex(0);
        break;
      default:
        break;
    }
  };

  return (
    <Fragment>
      <div className={"background-image"} id={"carousel"}>
        <div
          className={"btn"}
          id={"leftArrow"}
          data-type={"prev"}
          onClick={clickHandler}
        >
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </div>
        <div
          className={"btn"}
          id={"rightArrow"}
          data-type={"next"}
          onClick={clickHandler}
        >
          <p>
            <span aria-current={"page"}>0{index + 1}</span>
            <span>&nbsp;/&nbsp;0{imgList.length}</span>
          </p>
          <span className="material-symbols-outlined">arrow_forward_ios</span>
        </div>
      </div>
      <div id={"logoImg"}>
        <img src={logo} alt={"Authors"} />
      </div>
    </Fragment>
  );
};

export default Carousel;
