const button = document.querySelector(".button");
const body = document.querySelector("body");
const buttonTxt = document.querySelector(".button-txt");

const on = document.querySelector(".on");
const off = document.querySelector(".off");

button.addEventListener("click", (e) => {
  if (document.title === "Good Night") {
    document.title = "Good Morning";
  } else {
    document.title = "Good Night";
  }
  button.classList.toggle("button-dark");
  body.classList.toggle("body-dark");
  on.classList.toggle("is-active");
  off.classList.toggle("is-active");
});
