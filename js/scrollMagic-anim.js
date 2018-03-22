// création de l'instance du controller
var controller = new ScrollMagic.Controller();

var page = window.location.href;

if (page === "http://localhost/cooldev-v4/works.php") {

// définition des variables cibles pour les animations
var convItems = document.querySelectorAll('#conversation .conv');
var processItems = document.querySelectorAll('#process li');
var pins = document.querySelectorAll('.panelWorks');


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

// animation works
pins.forEach(function(pin) {
    new ScrollMagic.Scene({
        triggerElement: pin,
        triggerHook: 0,
        duration: "50%",
       })
        .setPin(pin)
        .addIndicators()
        .addTo(controller);      
})
}

