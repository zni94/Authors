import "../lib/css/components/button.css";

const Button = (props) => {
  const { openLink, btnName } = props;

  const openerEvent = () => {
    window.open(openLink, "_blank");
  };

  return (
    <div className={"authors-btn"} onClick={openerEvent}>
      <span />
      <p>{btnName}</p>
    </div>
  );
};

export default Button;