const javaButton = document.querySelector("#javah2");
const portButton = document.querySelector("#porth2");
const olesButton = document.querySelector("#olesh2");

const javaContent = document.querySelector("#prj1_all");
const portContent = document.querySelector("#prj2_all");
const olesContent = document.querySelector("#prj3_all");

javaButton.addEventListener("click", () => {
  toggleContent(javaContent);
});

portButton.addEventListener("click", () => {
  toggleContent(portContent);
});

olesButton.addEventListener("click", () => {
  toggleContent(olesContent);
});

function toggleContent(content) {
  if (content.style.maxHeight) {
    content.style.maxHeight = null;
    console.log("Closed");
  } else {
    content.style.maxHeight = "1000px";
    console.log("Opened");
  }
}
document.addEventListener("mousemove", function (e) {
  var cursor = document.getElementById("custom-cursor");

  cursor.style.left = e.pageX - cursor.offsetWidth / 2 + "px";
  cursor.style.top = e.pageY - cursor.offsetHeight / 2 + "px";
});

// js.js

const sections = document.querySelectorAll(".fade-in-section");

function handleScroll() {
  const windowHeight = window.innerHeight;

  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const sectionBottom = section.getBoundingClientRect().bottom;

    const isHalfShown =
      sectionTop < windowHeight / 2 && sectionBottom >= windowHeight / 2;
    const isNotScrolledPast = sectionTop >= 0 || sectionBottom > 0;

    if (isHalfShown && isNotScrolledPast) {
      section.classList.add("visible");
    } else {
      section.classList.remove("visible");
    }
  });
}

window.addEventListener("scroll", handleScroll);
document.addEventListener("DOMContentLoaded", handleScroll);

document.addEventListener("mousemove", function (e) {
  var cursor = document.getElementById("custom-cursor");

  cursor.style.left = e.pageX - cursor.offsetWidth / 2 + "px";
  cursor.style.top = e.pageY - cursor.offsetHeight / 2 + "px";
});

