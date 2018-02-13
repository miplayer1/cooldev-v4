var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
  triggerElement: "#section1",
  triggerHook: 0,
  duration: 400
})
    .setPin("#section1")
    .addIndicators()
    .addTo(controller)

var menuButton = document.getElementById('menuButton');
var menuList = document.getElementById('menuList');
menuButton.addEventListener('click', function() {
  menuList.style.visibility = 'visible';
})