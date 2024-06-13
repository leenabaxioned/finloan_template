/* Author: */
const accordionBtns = document.querySelectorAll(".uparrow");

accordionBtns.forEach((accordion) => {
  accordion.onclick = function () {
    accordionBtns.forEach((btn) => {
      if (btn !== this) {
        btn.classList.remove("is-open");
        btn.nextElementSibling.style.maxHeight = null;
      }
    });

    this.classList.toggle("is-open");

    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
      //this is if the accordion is open
      content.style.maxHeight = null;
    } else {
      //if the accordion is currently closed
      content.style.maxHeight = content.scrollHeight + "px";
    }
  };
});

var dropBtn1 = document.querySelector(".pages");
var dropBtn2 = document.querySelector(".blog");
dropBtn1.addEventListener("click", myFunction);
dropBtn2.addEventListener("click", myFunction);

function myFunction() {
  var dropbtn = document
    .querySelector(".dropdown-content")
    .classList.toggle("show");
  console.log(dropbtn);
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (e) {
  if (!e.target.matches(".dropbtn")) {
    var dropdownContent = document.querySelector(".dropdown-content");
    if (dropdownContent.classList.contains("show")) {
      dropdownContent.classList.remove("show");
    }
  }
};

const menu = document.querySelector(".nav-menu");
const menuItems = document.querySelectorAll(".nav-link");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);