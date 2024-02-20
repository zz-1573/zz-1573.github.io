let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  let myName = prompt("Please enter your name。");
  localStorage.setItem("name", myName);
  myHeading.textContent = "Jimmy is a Good Man，" + myName;
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = "Jimmy is a Bad Man，" + storedName;
}

myButton.onclick = function () {
  setUserName();
};
