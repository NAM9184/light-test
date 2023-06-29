
gsap.registerPlugin (  ScrollTrigger );  

function startLoader() {
    let counterElement = document.querySelector(".counter");
    let currentValue = 0;
    let Body = document.querySelector("body")

    function updateCounter() {
        if(currentValue === 100){
            return;
        }

        currentValue += Math.floor(Math.random() *10) + 1;

        if (currentValue > 100){
            currentValue = 100;
        }

        if (currentValue === 100){
            Body.classList.remove("overflow");
        }

        counterElement.textContent = currentValue;

        let delay = Math.floor(Math.random() * 200) + 50;
        setTimeout(updateCounter , delay);

    }
    updateCounter();

}
startLoader();

gsap.to(".counter", 0.25, {
    delay: 3.5,
    opacity: 0,
    display: "none",
});

gsap.to(".bar", 1.5, {
    delay: 3.5,
    height: 0,
    stagger : {
        amount: 0.5,
    },
    ease: "power4.inOut",
});

gsap.to(".overlay", 0.5, {
    delay: 8,
    display: "none",
})

// loader

ScrollTrigger.create({
    animation: gsap.from(".logo",{
        y:"50vh",
        scale: 10,
        yPercent: -50,
    }),
    scrub: true,
    trigger: "#banner",
    start: "top bottom",
    endTrigger: "#banner"
})
gsap.from("h1",1.5, {
    delay: 4,
    y: 700,
    stagger: {
        amount: 0.5,
    },
    ease: "power4.inOut",
});

// logo scale transform




tl = new TimelineMax({
    
});
tl.reverse();

tl.to(".menu-left", 1, {
    left: 0,
    ease: Expo.easeInOut,
});
tl.to(".menu-right", 1, {
    right:0,
    ease: Expo.easeInOut,   
}, "-=1")

tl.staggerFrom(".menu-links > div", 0.8, {
    y: 100, 
    opacity: 0,
    ease: Expo.easeInOut,
}, "0.1", "-=0.4")
tl.staggerFrom(".mail > div", 0.8, {
    y: 100, 
    opacity: 0,
    ease: Expo.easeInOut,
}, "0.1", "-=0.1")


tl.from(".menu-close", 1 ,{
    scale: 0,
    opaicty: 1,
    ease: Expo.easeInOut,
} , "-=1")


tl.to(".hr", 0.5, {
    scaleY: 1,
    transformOrigin: "0% 50%",
    ease: Power2.ease,
}, "-=2");


$(document).on("click", ".menu-open", function(){
    tl.reversed(!tl.reversed());
    $('.menu-open').addClass('hide');
    $('.menu').removeClass('hide');
});
$(document).on("click", ".menu-close", function(){
    tl.reversed(!tl.reversed());
    $(".menu-open").removeClass('hide');
    $('.menu').addClass('hide');
});
// overlay menu