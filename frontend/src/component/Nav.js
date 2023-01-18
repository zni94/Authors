import { Fragment, useEffect, useState } from "react";

const Nav = () => {
  const pageList = ["about", "gallery", "sns", "contact"];
  const [page, setPage] = useState(null);

  useEffect(() => {
    // window.addEventListener("scroll", () => {
    //   const posY = window.scrollY;
    //
    //   const part = {
    //     html: document.querySelector("html"),
    //     header: document.querySelector("header"),
    //     section: document.querySelector("section"),
    //     footer: document.querySelector("footer"),
    //     top: document.querySelector("a#topBtn"),
    //   };
    //
    //   const section = {
    //     about: document.getElementById("about"),
    //     gallery: document.getElementById("gallery"),
    //     sns: document.getElementById("sns"),
    //     contact: document.getElementById("contact"),
    //   };
    //
    //   // PAGE: MAIN
    //   if (posY < section.about.offsetTop - 80) {
    //     part.header.classList.remove("transform");
    //     part.top.classList.remove("active");
    //     part.top.classList.remove("transform");
    //     return setPage(null);
    //   }
    //   // PAGE: ABOUT
    //   if (posY < section.gallery.offsetTop - 80) {
    //     section.about.classList.add("active");
    //     part.top.classList.add("active");
    //     return setPage("about");
    //   }
    //   // PAGE: GALLERY
    //   if (posY < section.sns.offsetTop - 80) {
    //     part.header.classList.remove("transform");
    //     part.top.classList.remove("transform");
    //     return setPage("gallery");
    //   }
    //   // PAGE: SNS
    //   if (posY < section.contact.offsetTop - 80) {
    //     part.header.classList.add("transform");
    //     part.top.classList.add("transform");
    //
    //     section.sns.classList.add("active");
    //     return setPage("sns");
    //   }
    //   // PAGE: CONTACT
    //   if (posY < part.footer.offsetTop - 80) {
    //     part.header.classList.add("transform");
    //
    //     section.contact.classList.add("active");
    //     return setPage("contact");
    //   }
    //   // PAGE: FOOTER
    //   if (posY < part.html.offsetHeight) {
    //     part.header.classList.remove("transform");
    //     part.top.classList.remove("transform");
    //     return setPage(null);
    //   }
    // });
  }, []);

  return (
    <Fragment>
      <nav></nav>
    </Fragment>
  );
};

export default Nav;
