// création de l'instance du controller
var controller = new ScrollMagic.Controller();

var page = window.location.href;

if (page === "http://localhost/cooldev-v4/works.php") {
  // // define movement of panels
    var wipeAnimation = new TimelineMax()
        wipeAnimation.fromTo("section.panelWorks.two", 3, {x: "-100%", opacity: 0.5}, {x: "0%", opacity: 1, ease: Linear.easeNone}, "+=10")  // in from left
        wipeAnimation.fromTo("section.panelWorks.three", 3, {x: "100%", opacity: 0.5}, {x: "0%", opacity: 1, ease: Linear.easeNone}, "+=10")  // in from right
        wipeAnimation.fromTo("section.panelWorks.four", 3, {x: "-100%", opacity: 0.5}, {x: "0%", opacity: 1, ease: Linear.easeNone}, "+=10") // in from top
        wipeAnimation.fromTo("section.panelWorks.five", 3, {x: "100%", opacity: 0.5}, {x: "0%", opacity: 1, ease: Linear.easeNone}, "+=10") // in from top
        wipeAnimation.fromTo("section.panelWorks.six", 3, {x: "-100%", opacity: 0.5}, {x: "0%", opacity: 1, ease: Linear.easeNone}, "+=10") // in from top
        wipeAnimation.fromTo("section.panelWorks.seven", 3, {x: "100%", opacity: 0.5}, {x: "0%", opacity: 1, ease: Linear.easeNone}, "+=10"); // in from top

    // // create scene to pin and link animation
    new ScrollMagic.Scene({
        triggerElement: "#pinContainer",
        triggerHook: "onLeave",
        duration: "1000%"
       })
        .setPin("#pinContainer")
        .setTween(wipeAnimation)
        .addTo(controller);  
}


  
// définition des variables cibles pour les animations
var convItems = document.querySelectorAll('#conversation .conv');
var processItems = document.querySelectorAll('#process li');

// animation process
processItems.forEach(function(item) {
    var itemP = item.childNodes[3].firstElementChild;
    var tl = new TimelineMax();   
    tl.fromTo(item, 0.6, {opacity: 0}, {opacity: 1, ease: Linear.easeNone});
    tl.fromTo(itemP, 0.1, {opacity: 0}, {opacity: 1, ease: Linear.easeNone}, "-=0.3");
    
    new ScrollMagic.Scene({
    triggerElement: item,
    triggerHook: 0.6,
    reverse: false
    })
    .setTween(tl)
    // .addIndicators()
    .addTo(controller);
})

// animation conversation
convItems.forEach(function(item) {
    var tl = new TimelineMax();   
    tl.fromTo(item, 0.10, {opacity: 0}, {opacity: 1, ease: Linear.easeNone});
    
    new ScrollMagic.Scene({
    triggerElement: item,
    triggerHook: 0.7,
    reverse: false
    })
    .setTween(tl)
    .addTo(controller);
})

