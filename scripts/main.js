let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  let myName = prompt("Please enter your name。");
  localStorage.setItem("name", myName);
  myHeading.textContent = "我的web第一页！，" + myName;
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = "Jimmy is a good Man，" + storedName;
}

myButton.onclick = function () {
  setUserName();
};
