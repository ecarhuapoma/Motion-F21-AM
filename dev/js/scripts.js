// import { gsap } from "gsap";
import { gsap } from "gsap";

//instantiates the timelines
const preloadTL = gsap.timeline();
const mainTL = gsap.timeline();

//preloader appears
preloadTL.from("#preloader div",{duration:.4,alpha:0,scale:.5})

//header appears
mainTL.from("header ul #open",{duration:.1,alpha:0})
.from("header ul #open h1",{duration:.3,alpha:0})
.from("header ul #wiggy, #cream",{duration:.3,alpha:0,scale:.5})
.from("header ul #cone",{duration:.2,alpha:0,scale:.5})

//buttons appear
.from("section ul #directions, #menu, #about, #events",{duration:.5,alpha:0})
.from("#body",{duration:.5,alpha:0});

//rotating image
const storeTL = gsap.timeline({repeat:-1});
storeTL.from("#open",{duration:120,backgroundPosition: "-2247px 0px", ease:"none"});

