const EmptySection = (props) => {
  const { index } = props;

  let linearGradient;

  switch (index) {
    case 0:
      linearGradient = "linear-gradient(rgba(0,0,0,.7), rgba(0,0,0,1))";
      break;
    case 1:
      linearGradient = "linear-gradient(rgba(0,0,0,1), rgba(0,0,0,0))";
      break;
    case 2:
      linearGradient = "linear-gradient(rgba(0,0,0,0), rgba(255,255,255,1)";
      break;
    case 3:
      linearGradient = "linear-gradient(rgba(255,255,255,1), rgba(0,0,0,0))";
      break;
    default:
      break;
  }

  return (
    <div
      id={"emptySection"}
      style={{
        backgroundImage: `${linearGradient}`,
      }}
    />
  );
};

export default EmptySection;
