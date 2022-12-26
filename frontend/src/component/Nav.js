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

      if (posY < 850) {
        return setPage(null);
      }

      if (posY < 1750) {
        document.getElementById("about").classList.add("active");
        return setPage("about");
      }
      if (posY < 2650) {
        //document.getElementById("previewBox").classList.add("active");
        return setPage("gallery");
      }
      if (posY < 3550) {
        //document.getElementById("previewBox").classList.add("active");
        return setPage("sns");
      }
    });
  }, []);

  return (
    <Fragment>
      <div id={"linkToPage"}>
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
                    stroke={"white"}
                    strokeWidth={"0.1"}
                    fill={"rgba(255,255,255,.7)"}
                  />
                </svg>
                <a href={"#" + pageName}>{pageName}</a>
              </li>
            ))}
        </ul>
      </div>
    </Fragment>
  );
};

export default Nav;
