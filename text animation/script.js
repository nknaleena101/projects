const text = document.querySelector(".sec-text");

const textLoad = () => {
  setTimeout(() => {
    text.textContent = "Student"
  }, 0);
  setTimeout(() => {
    text.textContent = "Freelancer"
  }, 4000);
}

textLoad();
setInterval(textLoad, 12000)