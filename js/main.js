

    var horizontalController = new ScrollMagic.Controller();
    // define movement of panels
    var wipeAnimation = new TimelineMax()
      .fromTo("section.panelTest.two", 1, {x: "100%", opacity: 0}, {x: "0%",opacity: 1, ease: Linear.easeNone})  // in from left
      .fromTo("section.panelTest.three",    1, {x:  "100%"}, {x: "0%", ease: Linear.easeNone})  // in from right
      .fromTo("section.panelTest.four", 1, {x: "100%"}, {x: "0%", ease: Linear.easeNone}); // in from top
    // create scene to pin and link animation
    new ScrollMagic.Scene({
        triggerElement: "#pinContainer",
        triggerHook: "onLeave",
        duration: "300%"
      })
      .setPin("#pinContainer")
      .setTween(wipeAnimation)
      .addIndicators() // add indicators (requires plugin)
      .addTo(horizontalController);

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

// fonction d'ajout des liens du menu au clic
var targets = document.querySelectorAll('#menuList li a');

var data = {
  emailLink: "mailto:hello@cooldev.xyz",
  phoneLink: "tel:+33660613909"
}

targets.forEach(function(item) {
  item.addEventListener('click', function() {
    var key = item.getAttribute('data-link');
    if (!key == "") {
      var link = data[key];
      item.setAttribute('href', link);  
    }
  })
})

