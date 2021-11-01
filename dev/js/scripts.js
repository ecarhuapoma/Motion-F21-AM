// import { gsap } from "gsap";
// import { gsap } from "gsap";
// import { GSDevTools } from "gsap/GSDevTools";
// import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
// import { MotionPathPlugin } from "gsap/MotionPathPlugin";
// gsap.registerPlugin(GSDevTools,DrawSVGPlugin, MotionPathPlugin);

import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { ExpoScaleEase, RoughEase, SlowMo } from "gsap/EasePack";
import { EaselPlugin } from "gsap/EaselPlugin";

gsap.registerPlugin(GSDevTools, EaselPlugin, ExpoScaleEase, RoughEase, SlowMo);

const mainTL = gsap.timeline();

//how do i center all the cone shapes so that they all line up better?

gsap.set("preloader #preloaderanimation", {x:0, y:0});

function icecream(){
  const tl=gsap.timeline();
  tl.to("#cone1", {duration:.1, autoAlpha: 1});
  tl.to("#cone2", {duration:.1, autoAlpha: 1});
  
  tl.to("#cone1", {duration:.2, autoAlpha: 0});
  tl.to("#cone3", {duration:.1, autoAlpha: 1});
  
  
  tl.to("#cone3", {duration:.1, autoAlpha: 1});
  tl.to("#cone2", {duration:.2, autoAlpha: 0});
  
  tl.to("#cone4", {duration:.1, autoAlpha: 1});
  tl.to("#cone3", {duration:.2, autoAlpha: 0});
  
  tl.to("#cone5", {duration:.1, autoAlpha: 1});
  tl.to("#cone4", {duration:.2, autoAlpha: 0});
  
  tl.to("#cone6", {duration:.1, autoAlpha: 1});
  tl.to("#cone5", {duration:.2, autoAlpha: 0});

  tl.to("#cone7", {duration:.1, autoAlpha: 1});
  tl.to("#cone6", {duration:.2, autoAlpha: 0});

  tl.to("#cone8", {duration:.1, autoAlpha: 1});
  tl.to("#cone7", {duration:.2, autoAlpha: 0});

  tl.to("#cone9", {duration:.1, autoAlpha: 1});
  tl.to("#cone8", {duration:.2, autoAlpha: 0});
  
  tl.to("#cone10", {duration:.1, autoAlpha: 1});
  tl.to("#cone9", {duration:.2, autoAlpha: 0});

  return tl;
}

function vanilla(){
  const tl=gsap.timeline();
  tl.to("#vanilla3", {duration:.5, autoAlpha:1});
  return tl;
}

mainTL.add(icecream)
.add(vanilla);



// //header appears
// mainTL.from("header ul #open",{duration:.1,alpha:0})
// .from("header ul #open h1",{duration:.3,alpha:0})
// .from("header ul #wiggy, #cream",{duration:.3,alpha:0,scale:.5})
// .from("header ul #cone",{duration:.2,alpha:0,scale:.5})

// //buttons appear
// .from("section ul #directions, #menu, #about, #events",{duration:.5,alpha:0})
// .from("#body",{duration:.5,alpha:0});

// //rotating image
// const storeTL = gsap.timeline({repeat:-1});
// storeTL.from("#open",{duration:120,backgroundPosition: "-2247px 0px", ease:"none"});


GSDevTools.create();