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
