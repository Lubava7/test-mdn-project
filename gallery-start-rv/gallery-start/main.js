var displayedImage = document.querySelector(".displayed-img");
var thumbBar = document.querySelector(".thumb-bar");

btn = document.querySelector("button");
var overlay = document.querySelector(".overlay");

/* Looping through images */

let a = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];

for (let i = 0; i < a.length; i++) {
  console.log(i);
  var newImage = document.createElement("img");
  newImage.setAttribute("src", "images/" + a[i]);
  thumbBar.appendChild(newImage);
  newImage.onclick = function (event) {
    displayedImage.src = event.target.src;
  };
}

/* Wiring up the Darken/Lighten button */
btn.onclick = function () {
  if (btn.className == "dark") {
    btn.setAttribute("class", "light");
    btn.textContent = "светлее";
    overlay.style.backgroundColor = "rgba(000, 000, 000, 0.5)";
  } else if (btn.className == "light") {
    btn.setAttribute("class", "dark");
    btn.textContent = "темнее";
    overlay.style.backgroundColor = "rgba(000, 000, 000, 000)";
  }
};
