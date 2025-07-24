      
        // Section 1 starting------
        

Shery.imageEffect("#back", {
  style: 5,
  config:{"a":{"value":1.6,"range":[0,30]},"b":{"value":-0.89,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.47972643348887684},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.4,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":false},"onMouse":{"value":1},"noise_speed":{"value":1.6,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":3}},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":17.56,"range":[0,100]},
  },
gooey: true
});


var elems = document.querySelectorAll(".elem");

  elems.forEach(function(elem){
    var h1s = elem.querySelectorAll("h1");
    var index = 0;
    var animating = false;
  document.querySelector("#main")
 .addEventListener("click", function(){
     if(!animating){
       animating = true;
       gsap.to(h1s[index], {
        top: "-=100%",
        ease: Expo.easeInOut,
        duration: 1,
  onComplete: function (){
    gsap.set(this._targets[0], {top: "100%"});
    animating = false;
  },
});
index === h1s.length - 1 ? (index = 0) : index++;
  gsap.to(h1s[index], {
    top: "-=100%",
    ease: Expo.easeInOut,
    duration: 1,
  });
  }
 }); 
});


       // section 1 ending-----
       
       // section 2 starting-----
gsap.registerPlugin(ScrollTrigger);

gsap.to(".wrap", {
  
  x: "-200vw", // Left ki taraf scroll hoga
  ease: "none",
  scrollTrigger: {
    trigger: ".wrap h1",
    start: "top 95%",
    end: "bottom 5%",
    scrub: true
  }
});
       
        // section 2 ending-----
     
       // section 3 starting-----
 
 gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", function() {
  const slides = gsap.utils.toArray(".slide-3");
  const activeSlideImages = gsap.utils.toArray(".active-slide-3 img");
  
  // पहले सभी एक्टिव इमेजेस को हाइड करें
  gsap.set(activeSlideImages, {opacity: 0});
  
  slides.forEach((slide, index) => {
    const isLeft = index % 2 === 1;
    const startX = isLeft ? "-20%" : "-80%";
    
    // GSAP एनिमेशन सेटअप
  gsap.to(slide, {
      z: 3000,
      opacity: 1,
      scrollTrigger: {
        trigger: ".container",
        start: "29% top",
        end: "bottom bottom",
        scrub: true,
        invalidateOnRefresh: true
      }
    });
    
    // स्लाइड एक्जिट एनिमेशन
    gsap.to(slide, {
      x: isLeft ? "-30%" : "-30%",
      scale: 1.5,
      opacity: 1,
      scrollTrigger: {
        trigger: ".container",
        start: `${index * 100}% top`,
        end: `${(index + 1) * 100}% top`,
        scrub: true
      }
    });
    
    // एक्टिव स्लाइड इमेज अपडेट
    ScrollTrigger.create({
      trigger: ".container-3",
      start: `${index * 10}% top`,
      end: `${(index + 1) * 10}% top`,
      onEnter: () => {
        gsap.to(activeSlideImages, {opacity: 0, duration: 0.0});
        gsap.to(activeSlideImages[index], {opacity: 1, duration: 0.0});
      },
      onEnterBack: () => {
        gsap.to(activeSlideImages, {opacity: 0, duration: 1.5});
        gsap.to(activeSlideImages[index], {opacity: 1, duration: 1.5});
      }
    });
  });
});
 
 
       // section 3 ending-----  

       // section alert-----

  
window.onload = function () {
      if (window.innerWidth < 1024) {
        document.getElementById("main-content").style.display = "none";
        document.getElementById("mobile-blocker").style.display = "flex";
        alert("Please open desktop version");
      }
    };
