import "../lib/css/page/gallery.css";
import Button from "../component/Button";

const Gallery = () => {
  return (
    <div id={"gallery"}>
      <div className={"contents-layout"}>
        <h2 className={"contents-title"}>Gallery</h2>
        <div className={"contents-body"}></div>
        <Button
          openLink={"https://www.instagram.com/yuri_authors/"}
          btnName={"VIEW MORE"}
        />
      </div>
    </div>
  );
};

export default Gallery;
