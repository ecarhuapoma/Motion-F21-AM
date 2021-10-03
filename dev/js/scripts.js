// import { gsap } from "gsap";
import { gsap } from "gsap";

const mainTL = gsap.timeline();

mainTL.from("header",{duration:2,alpha:0});

// mainTL.from("#header",{duration:2, alpha:0, y:1000 })
//     .from ("#header h1",{duration:3, alpha:0, y:"+=200"})
//     .from ("#header h2",{duration:4, alpha:0, y:"+=200"});