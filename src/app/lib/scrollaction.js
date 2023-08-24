import React, { useEffect } from 'react'
import { gsap } from 'gsap/dist/gsap'
import { scrollTrigger } from 'gsap/dist/ScrollTrigger'
import Blog from '../../../components/blog'

export default function scrollAction() {
    const triggerRef = useRef(null);
    const sectionRef = useRef(null);

    gsap.registerPlugin(scrollTrigger);

    useEffect (() => {

        const pin = gsap.fromTo(sectionRef.current, {
            translateX: 0
        }, {
            translateX: '-300vw',
            ease: "none",
            duration: 1,
            scrollTrigger: {
                trigger: triggerRef.current,
                start: "top top",
                end: "2000 top",
                scrub: 0.6,
                pin: true
            }
        })

        return () => {
            pin.kill();
        }

    })

  return (
    <section class="scroll-section-outer">
        <div ref={triggerRef}>
            <div ref={sectionRef} class="scroll-section-inner">
                <Blog class="scroll-section" />
            </div>
        </div>
    </section>
  )
}
