import { useEffect, useState } from "react";

import "../lib/css/imageSequence.css";
import { authors } from "../store/data/authors";
import { useDispatch } from "react-redux";
import { offLoading } from "../store/src/loadingStore";

const ImageSequence = () => {
  const dispatch = useDispatch();

  const [index, setIndex] = useState(0);
  const [img] = useState(authors);
  const [src, setSrc] = useState(img[index]);

  useEffect(() => {
    // 시퀀스가 끝나면 메인 화면으로 전환.
    if (index > 137) dispatch(offLoading());

    const interval = setInterval(() => {
      setIndex((prevState) => prevState + 1);
      setSrc(img[index]);
    }, 4200 / 137);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <div id={"imageSequence"}>
      <svg viewBox={"0 0 1920 920"}>
        <image href={src} width={1920} height={920} />
      </svg>
    </div>
  );
};

export default ImageSequence;
