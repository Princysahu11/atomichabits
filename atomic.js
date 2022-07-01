function show() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });



  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();

}
show();

// $('#h1').textillate({ in: { effect: 'fadeInUp' } });

$('#h1').textillate({ 

  in: { effect: 'fadeInLeftBig' },
  out: { effect: 'flipInX', },
  loop: true
});
$('#h2').textillate({ 

  in: { effect: 'fadeInLeftBig' },
  out: { effect: 'flipInX', },
  loop: true
});
// $('#h2').textillate({ in: { effect: 'fadeInUp' } });
$('#h3').textillate({ 

  in: { effect: 'fadeInLeftBig' },
  out: { effect: 'flipInX', },
  loop: true
});
// $('#h3').textillate({ in: { effect: 'fadeInUp' } });



gsap.to("#rightpart1>img", {
  repeat: -1,
  duration: 1.5,
  ease: Power0.easeNone,

  y: -200,
})

gsap.to("#rightpart2>img", {
  repeat: -1,
  duration: 1.5,
  ease: Power0.easeNone,
  y: -200,
})

gsap.from("#page3>h3", {
  // skewY: 10,
  scale: 1.2,
  duration: 1.2,
  scrollTrigger: {
    trigger: "#page3>h3",
    scrub: true,
    scroller: "#main",

  }

})

gsap.from("#page4Img", {
  // skewX: -15,
  rotationX: -125,
  scale: 1,
  duration: 1.5,
  scrollTrigger: {
    trigger: "#page4Img",
    scrub: true,
    scroller: "#main",

  }

})

gsap.from("#page5Img", {
  // skewX: -15,
  rotationX: -125,
  scale: 1,
  duration: 1.5,
  scrollTrigger: {
    trigger: "#page5Img",
    scrub: true,
    scroller: "#main",

  }

})

gsap.from("#page6Text>h3", {
  // skewY: 10,
  scale: 1.3,
  duration: 1.2,
  scrollTrigger: {
    trigger: "#page6Text>h3",
    scrub: true,
    scroller: "#main",

  }

})
gsap.from("#page6Text>h4", {
  // skewY: 10,
  scale: 1.3,
  duration: 1.2,
  scrollTrigger: {
    trigger: "#page6Text>h3",
    scrub: true,
    scroller: "#main",

  }

})

gsap.from("#page7Img", {
  // skewX: -15,
  rotationX: -125,
  scale: 1.2,
  duration: 1.5,
  scrollTrigger: {
    trigger: "#page7Img",
    scrub: true,
    scroller: "#main",

  }

})

gsap.from("#page8Img", {
  // skewX: 15,

  rotationX: -125,
  scale: 1.2,
  duration: 1.5,
  scrollTrigger: {
    trigger: "#page8Img",
    scrub: true,
    scroller: "#main",

  }

})
gsap.from("#page9>h4", {
  // skewY: 10,
  scale: 0.7,
  duration: 1.2,
  y: -60,
  scrollTrigger: {
    trigger: "#page9>h4",
    scrub: true,
    scroller: "#main",

  }

})

gsap.to("#logo", {
  
  scrollTrigger:{
    trigger:"#logo",
    scrub: true,
    scroller: "#main",


  },duration:1,
  x:-160
  
})




 setTimeout(function(){
  document.querySelector("#overlay").style.transform = `translateY(-100%)`
 },2000)