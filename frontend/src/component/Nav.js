import { Fragment, useEffect, useState } from "react";

const Nav = () => {
  const pageList = ["about", "gallery", "sns", "contact"];
  const [page, setPage] = useState(null);

  const clickHandler = (e) => {
    const index = e.currentTarget.dataset.index;

    setPage(pageList[index]);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const posY = window.scrollY;
      console.log("posY", posY);

      if (posY < 840) {
        return setPage(null);
      }
      if (posY < 1680) {
        document.getElementById("about").classList.add("active");
        return setPage("about");
      }
      if (posY < 2520) {
        const header = document.getElementById("header");
        header.classList.remove("transform");

        const sns = document.getElementById("sns");
        sns.classList.remove("transform");
        return setPage("gallery");
      }
      if (posY < 3360) {
        const header = document.getElementById("header");
        header.classList.add("transform");

        const sns = document.getElementById("sns");
        sns.classList.add("transform");
        sns.classList.add("active");
        return setPage("sns");
      }
      if (posY < 4200) {
        const contact = document.getElementById("contact");
        contact.classList.add("active");
        return setPage("contact");
      }
    });
  }, []);

  return (
    <Fragment>
      <nav id={"nav"}>
        <ul>
          {pageList.length > 0 &&
            pageList.map((pageName, index) => (
              <li
                key={index}
                aria-current={page === pageName ? "page" : undefined}
                data-index={index}
                onClick={clickHandler}
              >
                <svg width={100} height={10} viewBox={"0 0 100 10"}>
                  <path
                    d={"M47 5, L50 0, L53 5, L50 10, L47 5"}
                    strokeWidth={"0.1"}
                  />
                </svg>
                <a href={"#" + pageName}>{pageName}</a>
              </li>
            ))}
        </ul>
      </nav>
    </Fragment>
  );
};

export default Nav;
