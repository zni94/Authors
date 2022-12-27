import { Fragment } from "react";
import Nav from "./Nav";

const Header = () => {
  return (
    <Fragment>
      <header id={"header"}>
        <Nav />
      </header>
    </Fragment>
  );
};

export default Header;
