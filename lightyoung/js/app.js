$(window).on('load', function(){
  $('html, body').scrollTop(0);
});


gsap.registerPlugin(ScrollTrigger , ScrollToPlugin);  


// intro  ================================================================================================================================


function startLoader() {
    let counterElement = document.querySelector(".counter");
    let currentValue = 0;
    let Html = document.querySelector("html")

    function updateCounter() {
        if(currentValue === 100){
            return;
        }

        currentValue += Math.floor(Math.random() *10) + 1;

        if (currentValue > 100){
            currentValue = 100;
        }

        if (currentValue === 100){
          Html.classList.remove("overflow");
        }

        counterElement.textContent = currentValue;

        let delay = Math.floor(Math.random() * 200) + 50;
        setTimeout(updateCounter , delay);

    }
    updateCounter();

}
startLoader();

gsap.to(".counter", 0.25, {
    delay: 4.5,
    autoAlpha: 0,
    display: "none",
});


gsap.to(".bar", 1.5, {

  delay: 4.5,
    autoAlpha: 0,
    stagger : {
        amount: 0.5,
    },
    ease: "power4.inOut",
});

gsap.to(".overlay", 0.5, {
    delay: 4.5,
    autoAlpha: 0,
    display: "none",
})

$(window).on('load', function(){
    $('.overlay', '.counter').hide();
});

// intro  ================================================================================================================================



// overlay menu ================================================================================================================================
const tl = gsap.timeline({paused : true});

const openNav = () => {
  animateOpenNav();
  const navBtn = document.getElementById('menu-toggle-btn');
  navBtn.onclick = function(e){
    navBtn.classList.toggle('active');
    tl.reversed(!tl.reversed());
  }
}
openNav();

function animateOpenNav() {
  tl.to('#nav-container', 0.2, {
    autoAlpha: 1,
    delay: 0.1,
  });

  tl.to('.site-img', 0.2,
    {
      opacity: 1,
    },
    "-=0.1"
  );  
}
tl.from(".flex > div", 0.4, {
  opacity: 0,
  y: 10,
  stagger: {
    amount: 0.04,
  }
})

tl.to(".nav-link > a", 0.8 ,{
  top: 0,
  ease: "power2.inOut",
  stagger: {
    amount: 0.1
  }
}, "-=0.4").reverse();
// overlay menu ================================================================================================================================



// Banner ================================================================================================================================

gsap.from(".hero-video",{
  filter: "blur(20px)",
  opacity: 0.2,
  delay: 0.5,
  ease: Circ.easeInOut,
});

gsap.from('.our_wish', 1.2,{
  filter: "blur(100px)",
  opacity: 0,
  delay: 4.2,
  ease: Circ.easeInOut,
});

gsap.from('.marque_box', 1.4,{
  filter: "blur(100px)",
  opacity: 0,
  delay: 4.8,
  ease: Circ.easeInOut,
});


// gsap.to(".hero_box", 1.5,{
//   scale : 0.2,
//   opacity: 0.1,
//   scrollTrigger: {
//     ease: Circ.easeInOut,
//     trigger: "body",
//     start: "top top",
//     end: "bottom bottom",
//     scrub: true,
    
//   }
// })

// gsap.to(".marque2", {
//   x: 10000,
//   scrollTrigger: {
//     trigger: "body",
//     start: 'top top',
//     scrub: '1',
//     ease: Expo.ease,
//     end: '+=4000',
//   }
// });
// gsap.to(".marque1", {
//   x: -10000,
//   scrollTrigger: {
//     trigger: "body",
//     start: 'top top',
//     scrub: '1',
//     ease: Linear,
//     end: '+=2000',
//   }
// });

// gsap.to('.bulb', {
//   opacity: 1,
//   scrollTrigger: {
//     trigger: "body",
//     scrub: '1',
//     start: '+=3000',
//     end: '+=5000',
//   }
// })



// Banner ================================================================================================================================


// Content1 ================================================================================================================================




// Content1 ================================================================================================================================

// Content2 ================================================================================================================================
let headings = gsap.utils.toArray("span");

headings.forEach(function (element, index) {
  gsap.to(element, {
    opacity: 1,
    duration: 5,
    scrollTrigger: {
      trigger: element,
      start: "-=200",
      end: "+=1000",
    }
  });
});  

gsap.to(".our_box", {
  scrollTrigger: {
    trigger: ".our_box",
    start: "-=200",
    end : "+=1000",
    pin: true,
    scrub: 0.3,

  },
  backgroundPosition: "0 -1000px",
});


const PinWrap = document.querySelectorAll('.pin_wrap');
const nums = document.querySelectorAll('.scroll-num');
const numOfTransitions = PinWrap.length
const singleDuration = 1000;
const totalDuration = singleDuration * numOfTransitions;

gsap.to('.info_ly', {
  scrollTrigger: {
    pin: '.info_ly',
    end: '+=' + `${totalDuration}s`,
    pinSpacing: true,
  },
});

PinWrap.forEach((pininfo, i) => {
  let pinlite = gsap.timeline({
    scrollTrigger: {
      trigger: pininfo,
      toggleActions: 'play reverse play reverse',
      start: '+=' + `${singleDuration * i}s`,
      end: '+=' + `${singleDuration}s`,
  
      onEnter: () => { gsap.to([pininfo, nums[i]],{opacity: 1})},
      onLeave: () => {  gsap.to([pininfo, nums[i]],{opacity: 0})},
      onEnterBack: () => {  gsap.to([pininfo, nums[i]],{opacity: 1})},
      onLeaveBack: () => {  
        if(i === 0 ) return;
        gsap.to([pininfo, nums[i]],{opacity: 0})
      }
    }
  });
});



// Content2 ================================================================================================================================

// slide_content ===========================================================================================================================

let SlideContent = document.getElementById('slide_content');

gsap.to(SlideContent, {
  scrollTrigger: {
    trigger: SlideContent,
    start: "20%",
    end: "+=1000",
    pin: true,
  }
});

// slide_content ===========================================================================================================================
gsap.to('.text_stripe',{
  opacity: 1,
  display: 1,
  scrollTrigger: {
    trigger: '#content3',
    start: 'top top',
    bottom: "end end"
  },
  onComplete: function() {
    $('.text_stripe').addClass('active'); // then only replace with blue div with new height and width
  }
})

// Content3 ================================================================================================================================
// let Sections = gsap.utils.toArray(".panel");

// gsap.to(Sections, {
//   xPercent: -100 * (Sections.length - 1),
//   ease: "none",
//   scrollTrigger: {
//     trigger: "#content3",
//     pin: true,
//     scrub: 1,
//     snap: 1 / (Sections.length - 1),
//     end: () => "+=" + document.querySelector("#content3").offsetWidth,
//   }
// });

// section3 end


function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var randomOrder = function(element) {
  
  // Viewport Dimensions
  var vpHeight = window.innerHeight;
  var vpWidth = window.innerWidth;
  
  // Image Position
  var xPos = getRandomInt(0, vpWidth - element.offsetWidth);
  var yPos = getRandomInt(0, vpHeight - element.offsetHeight);
  var zIndex = getRandomInt(0,13);
  
  element.style.cssText += '--x-position:' + xPos + 'px; --y-position:' + yPos + 'px; z-index:' + zIndex;
};

//Setup
var imgs = document.querySelectorAll('.h_image');

imgs.forEach((the_img) => {

window.addEventListener('load', function() {
  randomOrder(the_img);
});

});
// Content3 ================================================================================================================================



