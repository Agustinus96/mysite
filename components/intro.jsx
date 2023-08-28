"use client"

import React from "react";
import Image from "next/image";
import { useLayoutEffect } from "react";

export default function Intro() {

    useLayoutEffect( () => {
        (
          async () => {
              const LocomotiveScroll = (await import('locomotive-scroll')).default
              const locomotiveScroll = new LocomotiveScroll();
          }
        )()
      }, [])


    
  return (
    <div class="h-screen">
      <div class="flex-col pt-[25vh] pb-[40vh] pl-[3vw] max-w-[90vw]">
        <h1 class="text-black text-[7vw] lg:text-[8vh] font-serif lg:h-[12vh]">
          <div class="flex flex-row">
            <div class="animate-fade-up animate-delay-200 animate-duration-1000">
              Hi,
            </div>
            <div class="animate-fade-up animate-delay-300 animate-duration-1100 pl-4">
              {" "}
              I am{" "}
            </div>
            <div class="animate-fade-up animate-delay-[400ms] animate-duration-1200 pl-6">
              {" "}
              Agustinus!
            </div>
          </div>
        </h1>
        <h2 class="text-black text-[4vw] lg:text-[5vh] font-serif">
        <div class="flex flex-row">
          <div class="animate-fade-up animate-delay-[700ms] animate-duration-1100">
            {" "}
            A corporate planner & strategist.
          </div>
          </div>
        </h2>
        <h2 class="text-black text-[4vw] lg:text-[4vh] font-serif">
        <div class="flex flex-row">
          <div class="animate-fade-up animate-delay-[900ms] animate-duration-1100">
            {" "}
            I am fluent in English, Japanese, and Indonesian.
          </div>
</div>
        </h2>
        <h3 class="text-black text-[4vw] lg:text-[4vh] font-serif">
            <div class="animate-fade-up animate-delay-[1100ms] animate-duration-1100">Currently learning web development and design in my spare time.</div></h3>
      </div>
    </div>
  );
}

// <div className="snap-center animate-fade-up animate-once animate-duration-[1200ms] animate-delay-500 animate-ease-in-out animate-fill-both w-8/12 md:flex flex-row items-center justify-center py-40 px-[auto] m-[auto] max-h-[100vh] h-[100vh] min-h-[720px]">
// <div className="md:basis-1/2 px-[10%] md:py-[10px] py-[30px]">
//   <Image
//     className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] rounded-full md:min-w-[360px]"
//     src="/images/profile.jpg"
//     alt="Next.js Logo"
//     width={360}
//     height={360}
//   />
// </div>
// <div className="md:basis-1/2 px-[10%] md:text-left text-center">
//   {/* <div class="text-left">
//           <h1 class="animate-typing overflow-hidden whitespace-nowrap pr-1 font-bold text-4xl text-white">
//           Hi, I am Agustinus!
//           </h1>
//         </div> */}
//   <h1 class="font-bold text-5xl">Hi I am Agustinus!</h1>
//   <h2 class="font-med text-2xl pb-3">
//     I am a corporate planner/strategist, translator (EN/JP/ID) and a
//     software-engineer.
//   </h2>
// </div>
// </div>
