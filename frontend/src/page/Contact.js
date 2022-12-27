import "../lib/css/page/contact.css";
import Button from "../component/Button";

const Contact = () => {
  return (
    <div id={"contact"}>
      <div id={"contactImg"} />
      <div className={"contents-layout"}>
        <h2 className={"contents-title"}>Contact</h2>
        <div className={"contents-body"}>
          <p>contact coming soon . . .</p>
        </div>
        <Button
          openLink={"https://open.kakao.com/me/yuri_authors"}
          btnName={"send a message"}
        />
      </div>
    </div>
  );
};

export default Contact;
