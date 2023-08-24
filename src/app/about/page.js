// "use client"

// import { useEffect } from "react";
// import { gsap } from "gsap/dist/gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function IndexPage() {
//   useEffect(() => {
//     const sections = gsap.utils.toArray(".panel");

//     gsap.to(sections, {
//       xPercent: -100 * (sections.length - 1),
//       ease: "none",
//       scrollTrigger: {
//         trigger: ".container",
//         pin: true,
//         invalidateOnRefresh: true,
//         anticipatePin: 0,
//         scrub: 1.23,
//         end: () => "+=" + document.querySelector(".container").offsetWidth
//       }
//     });
//   }, []);

//   return (
//     <div className="snap-mandatory snap-x flex flex-nowrap container m-[10%]">
//       <section className="snap-always snap-center min-w-[80vw] bg-black h-[80vh] m-[10%] panel">
//         <h1>Here</h1>
//       </section>
//       <section className="snap-always snap-center min-w-[80vw] bg-gray-900 h-[80vh] m-[10%] panel">
//       </section>
//       <section className="panel">
//       </section>
//       </div>
//   );
// }
