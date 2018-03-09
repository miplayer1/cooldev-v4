// création de l'instance du controller
var controller = new ScrollMagic.Controller();

// définition des variables cibles pour les animations
var convItems = document.querySelectorAll('#conversation .conv');
var processItems = document.querySelectorAll('#process li');
var headerContainer = document.querySelectorAll('header');

// animation header
//var tlHeader = new TimelineMax();

//tlHeader.to(headerContainer, 1, {height: 0, ease: Linear.easeNone});

//var hideHeader = new ScrollMagic.Scene({
//    triggerElement: headerContainer,
//    triggerHook: 0,
//    duration: "10%",
//    reverse: true
//})
//.setTween(tlHeader)
//.addIndicators()
//.addTo(controller)

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
    tl.fromTo(item, 0.5, {opacity: 0}, {opacity: 1, ease: Linear.easeNone});
    
    new ScrollMagic.Scene({
    triggerElement: item,
    triggerHook: 0.7,
    reverse: false
    })
    .setTween(tl)
    .addTo(controller);
})

