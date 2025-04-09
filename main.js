// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello world!";

// document.querySelector("html").addEventListener("click", function () {
//     alert("Ouch! Stop poking me!");
//   });
  
const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/ghiblifoto.png") {
    myImage.setAttribute("src", "images/puppy.png");
  } else {
    myImage.setAttribute("src", "images/ghiblifoto.png");
  }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Sonal is so cool, ${myName}`;
  }
}

  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Sonal is so cool, ${storedName}`;
  }
  
  myButton.addEventListener("click", () => {
    setUserName();
  });
  
  