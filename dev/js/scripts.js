// import { gsap } from "gsap";
import { gsap } from "gsap";

const mainTL = gsap.timeline();

mainTL.from("header ul #open",{duration:.1,alpha:0});
mainTL.from("header ul #open h1",{duration:.3,alpha:0});
mainTL.from("header ul #wiggy, #cream",{duration:.3,alpha:0,scale:.5});
mainTL.from("header ul #cone",{duration:.2,alpha:0,scale:.5});

// mainTL.from("header ul #cone",{duration:.2,alpha:0,scale:.5});
// mainTL.from("header ul #wiggy",{duration:.5,alpha:0,scale:1.2});
// mainTL.from("header open ",{duration:.5,alpha:0});
// mainTL.from("header open",{duration:2,alpha:0,scale:2});

mainTL.from("section ul #directions, #menu, #about, #events",{duration:.5,alpha:0});
mainTL.from("#body",{duration:.5,alpha:0})

// mainTL.from("#header",{duration:2, alpha:0, y:1000 })
//     .from ("#header h1",{duration:3, alpha:0, y:"+=200"})
//     .from ("#header h2",{duration:4, alpha:0, y:"+=200"});