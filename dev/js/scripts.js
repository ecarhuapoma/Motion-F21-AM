// import { gsap } from "gsap";
import { gsap } from "gsap";

const preloadTL = gsap.timeline();
const mainTL = gsap.timeline();

preloadTL.from("#preloader div",{duration:.4,alpha:0,scale:.5})


mainTL.from("header ul #open",{duration:.1,alpha:0})
.from("header ul #open h1",{duration:.3,alpha:0})
.from("header ul #wiggy, #cream",{duration:.3,alpha:0,scale:.5})
.from("header ul #cone",{duration:.2,alpha:0,scale:.5})


// mainTL.from("header ul #cone",{duration:.2,alpha:0,scale:.5});
// mainTL.from("header ul #wiggy",{duration:.5,alpha:0,scale:1.2});
// mainTL.from("header open ",{duration:.5,alpha:0});
// mainTL.from("header open",{duration:2,alpha:0,scale:2});

.from("section ul #directions, #menu, #about, #events",{duration:.5,alpha:0})
.from("#body",{duration:.5,alpha:0});

//mainTL.from("#open",60,{duration:-1,backgroundPosition: "-2247px 0px"});

const storeTL = gsap.timeline({repeat:-1});

storeTL.from("#open",{duration:120,backgroundPosition: "-2247px 0px", ease:"none"});


// sun animation broken

// const backTL = gsap.timeline({repeat:-1});
// backTL.from("base #body", 120,{duration:10,backgroundPosition: "-2247px 0px"});
