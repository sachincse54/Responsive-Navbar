
/* CHANGE BACKGROUND HEADER */ 
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


/* SCROLL SECTIONS ACTIVE LINK */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav_links a");

window.addEventListener("scroll", function () {
  let navbar = document.querySelector("nav");
  let current = "";
  sections.forEach(function (section) {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - sectionHeight / 3) {
      current = `#${section.getAttribute("id")}`;
    }
    navLinks.forEach(function (each) {
      // add/remove active class
      each.classList.remove("active-link");
      if (each.getAttribute("href") == current) {
        each.classList.add("active-link");
      }
    });
  });
});







