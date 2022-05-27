// document.title = "Hello! From JS!";
const title = document.getElementById("title");
console.dir(title);

title.innerText = "Got you!";
console.log(title.id);
console.log(title.className);

const something = document.getElementsByClassName("something");
console.log(something);

const hello = document.querySelector(".hello h1");

console.log(hello);
// hello.innerText = "bye";

// hello.style.color = "blue";

function handleTitleClick() {
  console.log("title was clicked!");
  title.style.color = "blue";
}

function handleMouseEnter() {
  title.innerText = "mouse is here";
}

function handleMouseLeave() {
  title.innerText = "mouse is gone";
}

function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}
function handleWindowCopy() {
  alert("copier!");
}
function handleWindowOffline() {
  alert("SOS no Wifi!");
}
function handleWindowOnline() {
  alert("All Good!");
}

title.addEventListener("click", handleTitleClick);
// title.onClick = handleTitleClick;

title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);
// .removeEventListner

window.addEventListener("resize", handleWindowResize);

window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offLine", handleWindowOffline);
window.addEventListener("onLine", handleWindowOnline);
