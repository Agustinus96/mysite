"use client";

import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import styles from "./body.module.css";
import Image from "next/image";

export default function Body() {
  const entryView1 = useRef(null);
  const endView = useRef(null);
  const entryView2 = useRef(null);

  // useLayoutEffect(() => {
  //     gsap.registerPlugin(ScrollTrigger);
  //     gsap.from(entryView.current, {
  //         scrollTrigger: {
  //         trigger: entryView.current,
  //           scrub: true,
  //           start: "top +=30%",
  //           end: "bottom +=100%",
  //           markers: true,
  //         },
  //         opacity: 0,
  //         left: "-600px",
  //         ease: "power3.Out"
  //       }, []);
  //     })

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: "+=130% +=80%",
        end: "+=100% +=30%",
        scrub: true,
      },
    });
    timeline.from(entryView1.current, {
      opacity: "0",
      transform: "translateX(-20vw)",
    });
    timeline.from(entryView2.current, {
      opacity: "0",
      transform: "translateX(20vw)",
    });
  }, []);

  

function handleClick() {
    console.log("hello");
  }

  return (
    <div data-scroll-container class="flex">
      <div class="h-[1px] border-t-[1px] bg-white border-t-black absolute w-[90vw] left-[5vw] z-10"></div>
      <div
        ref={entryView1}
        class="flex-none w-[40vw] h-[80vh] ml-[5vw] mr-[5vw] mb-[10vh] mt-[50px] hover:drop-shadow-lg"
      >
        <div class="flex flex-col h-[100%] bg-white px-[10%] mx-auto justify-center">
          <Image
            class="rounded-15px max-h-[360px] justify-center object-cover mx-auto mb-[10%] mt-auto"
            src="/images/profile.jpg"
            width={360}
            height={360}
            alt="Agustinus"
          />
           <h1 class="m-auto">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid dolorem fugit obcaecati officiis asperiores at ipsam. Reprehenderit harum consequatur animi sint saepe sed molestias nihil numquam perspiciatis, possimus corrupti fugiat.</h1>
           <a href="/about" class="bg-teal-500 rounded-[15px] hover:scale-105 active:scale-95 w-[150px] h-[50px] m-auto text-center pt-[12px]">click here</a>
        </div>
      </div>
      <div
        ref={entryView2}
        class="flex-none w-[40vw] h-30vh min-h-[80vh] ml-[5vw] mr-[5vw] mb-[10vh] mt-[50px] hover:drop-shadow-lg"
      >
        <div class="flex flex-col h-[100%] bg-white m-auto justify-center">
          <Image
            class="rounded-15px max-h-[360px] max-w-[100%] justify-center object-cover mx-[0] mb-[10%] mt-auto"
            src="/images/background.jpg"
            width={1200}
            height={1200}
            alt="TY harbour"
          />
          <h1 class="m-auto px-[10%]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid dolorem fugit obcaecati officiis asperiores at ipsam. Reprehenderit harum consequatur animi sint saepe sed molestias nihil numquam perspiciatis, possimus corrupti fugiat.</h1>
          <a href="/about" class="bg-teal-500 rounded-[15px] hover:scale-105 active:scale-95 w-[150px] h-[50px] m-auto text-center pt-[12px]">click here</a>
        </div>
      </div>
    </div>
  );
}
