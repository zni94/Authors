import "../lib/css/page/gallery.css";
import Button from "../component/Button";

import preview_1 from "../lib/img/gallery/preview_1.jpg";
import preview_2 from "../lib/img/gallery/preview_2.jpg";
import preview_3 from "../lib/img/gallery/preview_3.jpg";

const Gallery = () => {
  const galleryList = [preview_1, preview_2, preview_3];
  let index = 0;

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

  return (
    <div id={"gallery"}>
      <div className={"contents-layout"}>
        <h2 className={"contents-title"}></h2>
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
