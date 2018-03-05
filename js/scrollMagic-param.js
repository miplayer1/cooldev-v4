    var controller = new ScrollMagic.Controller();
    
    var convItems = document.querySelectorAll('#conversation .conv');

    var processItems = document.querySelectorAll('#process .process-img');

    convItems.forEach(function(item) {
        var tl = new TimelineMax();   
        tl.fromTo(item, 1, {opacity: 0, left: -100}, {opacity: 1, left:0, ease: Linear.easeNone}, 0.5);
        
        new ScrollMagic.Scene({
        triggerElement: item,
        triggerHook: 0.7,
        duration: 50,
        reverse: false
        })
        .setTween(tl)
        .addTo(controller);
    })

    processItems.forEach(function(item) {
        var tl = new TimelineMax();   
        tl.fromTo(item, 1, {left: 0}, {left: 20, ease: Linear.easeNone});
        tl.to(item, 1, {left: 0, ease: Linear.easeNone});
        
        new ScrollMagic.Scene({
        triggerElement: item,
        triggerHook: 0.6,
        duration: "10%"
        })
        .setTween(tl)
        .addTo(controller);
    })
