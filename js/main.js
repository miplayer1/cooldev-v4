var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
  triggerElement: "#section1",
  triggerHook: 0,
  duration: 400
})
    .setPin("#section1")
    .addIndicators()
    .addTo(controller)

// Fonction d'activation du menu au click

var menuButton = document.getElementById('menuButton');
var menuList = document.getElementById('menuList');
var menuItems = document.querySelectorAll('#menuList li a.btn-floating');
var showStatus = menuList.getAttribute("data-show");

menuButton.addEventListener('click', showMenu)

function showMenu() {
  if (showStatus === true) {
    showStatus = false;
    menuList.style.visibility = "hidden";
    menuItems.forEach(function(item) {
      item.style.opacity = 0;
    })  
  } else {
    showStatus = true;
    menuList.style.visibility = "visible";
    menuItems.forEach(function(item) {
      item.style.opacity = 1;
    })  
  }
}