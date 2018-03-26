// // Fonction d'activation du menu au click

// var menuButton = document.getElementById('menuButton');
// var menuList = document.getElementById('menuList');
// var menuItems = document.querySelectorAll('#menuList li a.btn-floating');
// var showStatus = menuList.getAttribute("data-show");

// menuButton.addEventListener('click', showMenu)

// function showMenu() {
//   if (showStatus === true) {
//     showStatus = false;
//     menuList.style.visibility = "hidden";
//     menuItems.forEach(function(item) {
//       item.style.opacity = 0;
//     })  
//   } else {
//     showStatus = true;
//     menuList.style.visibility = "visible";
//     menuItems.forEach(function(item) {
//       item.style.opacity = 1;
//     })  
//   }
// }

// // fonction d'ajout des liens du menu au clic
// var targets = document.querySelectorAll('#menuList li a');

// var data = {
//   emailLink: "mailto:hello@cooldev.xyz",
//   phoneLink: "tel:+33660613909"
// }

// targets.forEach(function(item) {
//   item.addEventListener('click', function() {
//     var key = item.getAttribute('data-link');
//     if (!key == "") {
//       var link = data[key];
//       item.setAttribute('href', link);  
//     }
//   })
// })




var elem = document.querySelector('.carousel');
// var instance = M.Carousel.init(elem, options);
 M.Carousel.init(elem,{
  fullWidth: true,
  indicators: true
});

