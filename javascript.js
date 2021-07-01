

const hamburger = document.querySelector(".hamburger-container img");
let hamCount = 0;

hamburger.addEventListener( "click",  () => {

    hamCount++;
    if( hamCount % 2 == 1 ) {
        gsap.set( ".nav-links" , {
            y : -20,
            opacity : 0,
        })

        gsap.to( ".nav-links", {
            y : 0,
            opacity : 1,
            ease : "back",
            duration : 0.25,
        })
    }
    else {
        gsap.to( ".nav-links", {
            y : -20,
            opacity : 0,
            duration : 0.25,
        })
    }
})

let cur = 0;

setInterval( () => {
    if( window.innerWidth < 600 && cur == 0 ) {
        gsap.set( ".nav-links" , {
            y : -20,
            opacity : 0,
        })
        hamCount = 0;
        cur = 1;
    }

    else if( window.innerWidth > 600 ) {

        gsap.set( ".nav-links", {
            y : 0,
            opacity : 1,
        })
        cur = 0;
        hamCount = 0;
    }

}, 10 );