import "../lib/css/page/gallery.css";
import Button from "../component/Button";

import preview_1 from "../lib/img/tattoo/preview_1.jpg";
import preview_2 from "../lib/img/tattoo/preview_2.jpg";
import preview_3 from "../lib/img/tattoo/preview_3.jpg";

const Gallery = () => {
  const galleryList = [preview_1, preview_2, preview_3];
  let index = 0;

  const clickHandler = (e) => {
    const type = e.currentTarget.dataset.type;
    const backgroundDiv = document.getElementById("backgroundImage");

    switch (type) {
      case "prev":
        console.log("PREV");
        index--;

        if (index < 0) index = galleryList.length - 1;
        backgroundDiv.style.backgroundImage = `url(${galleryList[index]})`;
        break;
      case "next":
        console.log("NEXT");
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
        <h2 className={"contents-title"}>Gallery</h2>
        <div className={"contents-body"}>
          <span
            className="material-symbols-outlined"
            onClick={clickHandler}
            data-type={"prev"}
          >
            arrow_back_ios
          </span>
          <span
            className="material-symbols-outlined"
            onClick={clickHandler}
            data-type={"next"}
          >
            arrow_forward_ios
          </span>
        </div>
        <Button
          openLink={"https://www.instagram.com/yuri_authors/"}
          btnName={"VIEW MORE"}
        />
      </div>
    </div>
  );
};

export default Gallery;
