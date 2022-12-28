import "../lib/css/page/gallery.css";
import Button from "../component/Button";

import preview_1 from "../lib/img/gallery/preview_1.jpg";
import preview_2 from "../lib/img/gallery/preview_2.jpg";
import preview_3 from "../lib/img/gallery/preview_3.jpg";
import { useEffect, useState } from "react";

const Gallery = () => {
  const [galleryList] = useState([preview_1, preview_2, preview_3]);
  let index = Math.floor(Math.random() * galleryList.length);

  const [view, setView] = useState(false);

  useEffect(() => {
    const background = document.getElementById("backgroundImage");

    background.style.backgroundImage = `url(${galleryList[index]})`;
  }, []);

  const clickHandler = (e) => {
    const type = e.currentTarget.dataset.index;
    const backgroundDiv = document.getElementById("backgroundImage");

    switch (type) {
      case "prev":
        index--;

        if (index < 0) index = galleryList.length - 1;
        backgroundDiv.style.backgroundImage = `url(${galleryList[index]})`;
        break;
      case "next":
        index++;

        if (index > galleryList.length - 1) index = 0;
        backgroundDiv.style.backgroundImage = `url(${galleryList[index]})`;
        break;
      default:
        break;
    }
  };

  const viewHandler = () => {
    const viewMode = document.getElementById("viewMode");

    const header = document.querySelector("header");
    const gallery = document.getElementById("gallery");

    if (view) {
      setView(false);
      viewMode.classList.add("off");
      viewMode.classList.remove("on");

      header.classList.remove("view");
    } else {
      window.location.href = "#gallery";
      document.querySelector("html").style.overflow = "hidden;";
      setView(true);
      viewMode.classList.remove("off");
      viewMode.classList.add("on");

      header.classList.add("view");
    }
  };

  return (
    <div id={"gallery"}>
      <div className={"contents-layout"}>
        <div id={"viewMode"} className={"off"}>
          <div id={"viewState"}>{view ? "ON" : "OFF"}</div>
          <button onClick={viewHandler} />
        </div>
        <div className={"contents-body"}>
          <button onClick={clickHandler} data-index={"prev"}>
            <span className="material-symbols-outlined">arrow_back_ios</span>
            prev
          </button>
          <button onClick={clickHandler} data-index={"next"}>
            next
            <span className="material-symbols-outlined">arrow_forward_ios</span>
          </button>
        </div>
        <Button
          openLink={"https://www.instagram.com/yuri_authors/"}
          btnName={"view more"}
        />
      </div>
    </div>
  );
};

export default Gallery;
