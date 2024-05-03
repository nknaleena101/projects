const dBtn = document.querySelector(".darkModeBtn");
const hHT = document.querySelector(".hero-head-text");
const hPT = document.querySelector(".hero-p-text");
const hero = document.querySelector(".hero");

function darkMode(){
  hero.style.backgroundColor = "black";
  hHT.style.color = "white";
  hPT.style.color = "white";
};