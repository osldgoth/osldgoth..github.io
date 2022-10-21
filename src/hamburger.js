
const menu = document.querySelector(".menu"); //hamburger
const nav = document.querySelector(".navigation"); //why again?

menu.addEventListener("click", () => {
  menu.classList.toggle("active");
  nav.classList.toggle("active") //not yet used?
})