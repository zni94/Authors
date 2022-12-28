import "../lib/css/page/sns.css";
import Button from "../component/Button";

const SNS = () => {
  return (
    <div id={"sns"}>
      <div className={"contents-layout"}>
        <div id={"snsImg"} />
        <div className={"contents-body"}>
          <iframe
            width={"100%"}
            height="315"
            src="https://www.youtube.com/embed/Scni6nLKm3M?controls=1"
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
            <p>
              There are many variations of passages of Lorem Ipsum available,
            </p>
          </div>
        </div>
        <Button
          openLink={"https://www.youtube.com/@yuri_authors"}
          btnName={"subscribe on channel"}
        />
      </div>
    </div>
  );
};

export default SNS;
