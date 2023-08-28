"use client"

import React, { useRef, useLayoutEffect } from 'react'
import { gsap} from 'gsap';
import  ScrollTrigger from 'gsap/ScrollTrigger'
import styles from './body.module.css'


export default function BodyJP() {

    const entryView = useRef(null);
    const endView = useRef(null);

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

        const timeline =  gsap.timeline({
            scrollTrigger: {
                trigger: entryView.current,
              start: "top +=30%",
              end: "bottom +=100%",
                scrub: true,
                markers: true
            }
        })
        timeline
            .from(entryView.current , {opacity: "0", transform: "translateX(-20vw)"})
            .to(endView.current , {
                start: "top",
                markers: true,
                opacity: "1"}, 0)
    }, [])

  return (
    <div data-scroll-container>
        <div ref={entryView} class="flex h-30vh min-h-[30vh] py-[40vh] mx-[30vw] mb-[10vh]">
            <div class="rounded-[15px] bg-pink-900/30 max-w-[40vw] px-[10%] py-[5%] text-center">
        <h1 class="font-bold text-5xl text-white">Life story....</h1>
        <h2 class="py-2">
          I was born and raised in Bandung Indonesia, went to an international
          highschool in Singapore and graduated from one of the seven Imperial
          Universities in Japan.
        </h2>
        <h2>
          {/* I studied natural science and social science throughout my education including business managements, physics, chemistry and Japanese literature. 
          I am a fast learner and can work well under pressure and tight deadlines. I have worked for Japanese companies in different industries with many subsidiaries
           all over the worlds. In one of my earlier job, I was responsible in managing and had to work with top level managements from both parent companies and oversea 
           subsidiaries. I was able to identify a crucial problem and turned it into an opportunity for the company. Through this we manage to achieve a big turn around and 
           recovered 3-years of cummulative loss in 1 year.  */}
          coming...</h2>  
          </div>
                </div>
                </div>

  )
}

