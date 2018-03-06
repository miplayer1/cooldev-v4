    var controller = new ScrollMagic.Controller();
    
    var convItems = document.querySelectorAll('#conversation .conv');

    var processItems = document.querySelectorAll('#process li');

    processItems.forEach(function(item) {
        var itemP = item.childNodes[3].firstElementChild;
        var tl = new TimelineMax();   
        tl.fromTo(item, 0.6, {opacity: 0}, {opacity: 1, ease: Power4.easeNone});
        tl.fromTo(itemP, 0.1, {opacity: 0}, {opacity: 1, ease: Power4.easeNone}, "-=0.3");
        
        new ScrollMagic.Scene({
        triggerElement: item,
        triggerHook: 0.6,
        reverse: false
        })
        .setTween(tl)
        // .addIndicators()
        .addTo(controller);
    })

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

