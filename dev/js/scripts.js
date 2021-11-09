// import { gsap } from "gsap";
// import { gsap } from "gsap";
// import { GSDevTools } from "gsap/GSDevTools";
// import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
// import { MotionPathPlugin } from "gsap/MotionPathPlugin";
// gsap.registerPlugin(GSDevTools,DrawSVGPlugin, MotionPathPlugin);

import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(GSDevTools, MotionPathPlugin, MorphSVGPlugin); 

const mainTL = gsap.timeline();

//how do i center all the cone shapes so that they all line up better?

MorphSVGPlugin.convertToPath("circle");

// gsap.defaults({
//   ease: "power1"
// });

// mainTL.set("#cone2",{x:60,y:0});
// mainTL.set("#cone3",{x:60,y:0});
// mainTL.set("#cone4",{x:60,y:0});
// mainTL.set("#cone5",{x:50,y:0});
// mainTL.set("#cone6",{x:60,y:0});
// mainTL.set("#cone7",{x:50,y:0});
// mainTL.set("#cone8",{x:60,y:0});


mainTL.set("#cone6",{scale:0.75, x:20, y:0});

// mainTL.set("#newcream1",{autoAlpha:1});

mainTL.set(".cone", {scale: 0.75, x:60, y:0});
mainTL.set("#cone10", {scale: 0.75, x:60,y:0});
// mainTL.set("#newpath", {autoAlpha:0});
mainTL.set(".stack", {scale: 0.8, x:40,y:-30});
mainTL.set(".vanilla", {scale: 0.75, x:0,y:0});
mainTL.set(".choc", {autoAlpha:0, scale: 0.75, x:0,y:0});
mainTL.set(".straw", {scale: 0.75, x:0,y:0});
mainTL.set(".done", {scale: 0.75, x:0,y:0});
mainTL.set(".cher", {scale: 0.75, x:0,y:0});

mainTL.set(".arcs",{autoAlpha:0});

mainTL.set("#vpath",{autoAlpha:0, x:-80, y:50});
mainTL.set("#spath", {autoAlpha:0, x:720, y:20});
// mainTL.set("#spath",{autoAlpha:1, x:0, y:0});

function icecream(){
  const tl=gsap.timeline();
  tl.to(".cone", {stagger: .3, duration:.3, autoAlpha:1, ease:"steps (9)"});
  tl.to(".cone", {stagger: .3, duration:.3, autoAlpha:0, ease:"steps (9)"}, "-=2.5");
  tl.to("#cone10", {alpha:1});

  // tl.set(".cone", {stagger: .3, autoAlpha:1});
  // tl.set(".cone", {stagger: .4, autoAlpha:0},"-.02");
  return tl;
}

function coneTen(){
  const tl=gsap.timeline();
  tl.to(".cone10", {autoAlpha:1});
  return tl;
}

// function coneClose(){
//   const tl=gsap.timeline();
//   tl.to(".cone", {stagger: .3, duration:.2, autoAlpha:0, ease:"steps (10)"});
//   return tl;
// }

function vanilla(){
  const tl=gsap.timeline();

  // tl.to(".vanilla", {autoAlpha:1, duration:2, ease:"steps(1)"});
  tl.to("#vanilla1",{autoAlpha:1, ease:"power1", duration:1.5, motionPath:{
    path:"#vpath",
    align:"#vpath",
    alignOrigin: [0.5, 0.5],
    autoRotate:45
  }});
  // tl.to(".vanilla", {stagger: .2, duration:.3, autoAlpha:1, ease:"steps (1)"},"-=1");
  // tl.to(".vanilla", {duration:.1, autoAlpha:0, ease:"steps (1)"},"-=2");
  tl.to("#vanilla1",{autoAlpha:0, duration:.4},"-=.3");
  tl.to("#newcream1",{autoAlpha:1, duration:.3});
  

  //original stopmotion

  // tl.set("#vanilla1", {x: -500, y: -300});
  // tl.set("#vanilla2", {x: -250, y: -450});
  // tl.set("#vanilla3", {x: 0, y: -325});
  // tl.to(".vanilla", {stagger: 1, duration:.3, autoAlpha:1, ease:"steps (1)"});
  // tl.to(".vanilla", {stagger: 1, duration:.3, autoAlpha:0, ease:"steps (1)"},"-=1");

  // tl.to("#vanilla1", {stagger: .7, duration: .3, autoAlpha:0, ease:"steps (1)"}, "-=.95");
  return tl;
}

function vPlop(){
  const tl=gsap.timeline();
  // tl.to("#cream1", {autoAlpha:1});
  // tl.to("#cream1", {autoAlpha:0});
  tl.to("#newcream1", {autoAlpha:1});
  tl.set("#cone10", {duration:.3, autoAlpha:0},"-=.1");

  return tl;
}

function chocolate(){
  const tl=gsap.timeline();
  tl.set("#chocolate1", {x:40,y:-400});
  tl.set("#chocolate2", {x:40,y:-300});

  tl.to("#chocolate1",{autoAlpha:1, ease:"power1", duration:.5, motionPath:{
    path:[{x:40,y:-400}, {x:40,y:-300}]}
  });

  tl.to("#chocolate1", {duration:.1, autoAlpha:0});

  // tl.to("#chocolate1", {duration: .3, autoAlpha:1});
  // tl.to("#chocolate2", {duration: .3, autoAlpha:1},"+=1");
  // tl.to("#chocolate1", {duration: .3, autoAlpha:0});
  return tl;
}

function cPlop(){
  const tl=gsap.timeline();
  tl.set("#cream2",{x:50,y:-47});
  tl.to("#cream2",{duration:.3,autoAlpha:1});
  tl.to("#chocolate2",{duration: .3, autoAlpha:0});
  tl.to("#cream1",{duration:.3 ,autoAlpha:0});

  return tl;
}

function strawberry(){
  const tl=gsap.timeline();

  
  tl.to("#strawberry3",{autoAlpha:1, ease:"power1", duration:1.5, motionPath:{
    path:"#spath",
    align:"#spath",
    autoRotate:225,
    alignOrigin: [0.5, 0.5]
    }});
  
    tl.to("#strawberry3",{autoAlpha:0, duration:.4},"-=.3");


  // tl.set("#strawberry1",{x:500,y:-300});
  // tl.set("#strawberry2",{x:250,y:-450});
  // tl.set("#strawberry3",{x:50,y:-350});
  // tl.to(".straw", {stagger: 1, duration:.3, autoAlpha:1, ease:"steps (1)"});
  // tl.to(".straw", {stagger: 1, duration:.3, autoAlpha:0, ease:"steps (1)"},"-=1");

  return tl;
}

function sPlop(){
  const tl=gsap.timeline();

  tl.set("#cream3",{x:49,y:-64});
  tl.to("#cream3",{duration:.3,autoAlpha:1});
  // tl.to("#strawberry3",{duration: .3, autoAlpha:0});
  tl.to("#cream2",{duration:.3 ,autoAlpha:0});

  return tl;
}

function bigStack(){
  const tl=gsap.timeline();
//  tl.set("#newpath", {x:20,y:-150});
 tl.set("#newpath", {x:716,y:45});
 tl.set("#cherry-plop1",{scale:.8,x:50,y:-72});
//  tl.to("#cherry",{autoAlpha:1});
  // tl.to("#cherry",{
  //   duration: 1,
  //   ease:"power.inOut",
  //   // motionPath:{
  //   //   path:"#motionpather",
  //   //   align:"#motionpather",
  //   //   autoRotate: true
      
  //   // }

  // });

  tl.to("#cherry", {autoAlpha:1, duration:2, ease:"power4",
    motionPath:{
      start:1,
      end:0,
      path:"#newpath",
      align:"#newpath",
      alignOrigin: [0.5, 0.5],
      autoRotate:260}});
      
      
      
      tl.to("#cherry-plop1",{duration:.1,autoAlpha:1},"-=.7");
      tl.to("#cherry", {duration:.1, autoAlpha:0});
      tl.to("#cream3",{duration: .1, autoAlpha:0},"-=.5");


  return tl;
}

function finalForm(){
  const tl=gsap.timeline();

  // // tl.to("#cherry-plop1",{duration:1,autoAlpha:0});
  // tl.to("#cherry-plop1",{duration:.2,autoAlpha:0});
  tl.set("#done",{scale:.8,x:51,y:-70});
  // // tl.to("#done",{duration:1,autoAlpha:0});
  tl.to("#done",{duration:.1,autoAlpha:1});
  tl.to("#cherry-plop1",{duration:.1,autoAlpha:0},"-=.1");

  return tl;
}

function transitionTime(){
  const tl=gsap.timeline();

  tl.to("#done",{duration:2, motionPath:{path:[{x:51,y:-600}]}});

  tl.to("#preloader",{duration:2, autoAlpha:0},"-=2");

  // tl.to("done",{duration:3, ease:"power1",motionPath:{
  //   path:[{x:51,y:-400}, {x:51,y:-300}]}
  // });
  
  // tl.to("#preloader",{duration:2,autoAlpha:0});


  return tl;
}



// tl.to("#vanilla1", {stagger: .7, duration:.3, autoAlpha:1, ease:"steps (1)"});
//   tl.to("#vanilla1", {stagger: .7, duration: .3, autoAlpha:0, ease:"steps (1)"}, "-=.95");
//   tl.to("#vanilla2", {stagger: .7, duration:.3, autoAlpha:1, ease:"steps (1)"});
//   tl.to("#vanilla2", {stagger: .7, duration: .3, autoAlpha:0, ease:"steps (1)"}, "-=.95");



mainTL
.add(icecream())
.add(coneTen(),"-=.7")
// .add(coneClose())
.add(vanilla(),"+=1")
.add(vPlop(),"-=.3")
.add(chocolate())
.add(cPlop(),"-=.3")
.add(strawberry())
.add(sPlop(),"-=.3")
.add(bigStack())
.add(finalForm())
.add(transitionTime());



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
MotionPathPlugin.create();
MorphSVGPlugin.create();