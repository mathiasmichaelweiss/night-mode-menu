"use strict";

const modBtn = document.querySelector(".dark-mode-circle"),
  nightModItems = document.querySelectorAll(".night-mod"),
  svgColor = document.querySelectorAll("svg path");

modBtn.addEventListener("click", () => {
  nightModItems.forEach(item => {
    svgColor.forEach(color => {
      if (!modBtn.classList.contains("modOff")) {
        document.body.style = "background: #fff";
        item.style = "background: #fff";
        modBtn.style =
          "left: 5.7rem; background: #fff; background-image: url(src/img/sun_day.svg); background-repeat: no-repeat; background-position: center; background-size: 40%;";
        color.style = "fill: #767676";
      } else {
        modBtn.style = "";
        document.body.style = "";
        item.style = "";
        color.style = "";
      }
    });
  });
  modBtn.classList.toggle("modOff");
});
