import { useEffect, useState } from "react";

import "../lib/css/page/welcome.css";
import { useDispatch } from "react-redux";
import { offLoading } from "../store/src/loadingStore";

import welcome_authors from "../lib/img/authors/welcome_authors.mp4";

const Welcome = () => {
  const dispatch = useDispatch();

  const [index, setIndex] = useState(0);

  useEffect(() => {
    // 시퀀스가 끝나면 메인 화면으로 전환.
    if (index > 4) dispatch(offLoading());

    const interval = setInterval(() => {
      setIndex((prevState) => prevState + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [index, dispatch]);

  return (
    <div id={"welcome"}>
      <video
        muted={true}
        autoPlay={true}
        style={{ width: "100%", height: "100%" }}
      >
        <source src={welcome_authors} type={"video/mp4"} />
        <strong>Your browser does not support the video</strong>
      </video>
    </div>
  );
};

export default Welcome;
