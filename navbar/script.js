const btn = document.querySelector(".btn");
const items = document.querySelectorAll(".items"); 
const li = document.querySelectorAll("li");
btn.addEventListener("click", function(){
  items.forEach(items => {
    items.classList.toggle("show");
  });
});

