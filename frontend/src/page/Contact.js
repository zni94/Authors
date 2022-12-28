import "../lib/css/page/contact.css";
import Button from "../component/Button";

const Contact = () => {
  return (
    <div id={"contact"}>
      <div id={"contactImg"} />
      <div className={"contents-layout"}>
        <h2 className={"contents-title"}>Contact</h2>
        <div className={"contents-body"}>
          <p>Gangnam-daero 124-gil, Gangnam-gu, Seoul, 46</p>
          <p>Anything else...?</p>
          <p>
            You can send a message by clicking the button below. (Only Kakao)
          </p>
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
