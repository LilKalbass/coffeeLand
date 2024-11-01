import React, {useLayoutEffect, useRef} from 'react'
import {Badge} from "@/components/Badge";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {Separator} from "@/components/Separator";
import Image from "next/image";

const aboutData = [
    {
      image: "/assets/about/photo-1.jpg",
      title: "Our Journey",
      desc:  "Founded in 2000, Zenbrew started as a small café with a vision for exceptional coffee. Now a beloved brand, we`re known for quality and sustainability. Driven by passion, we create memorable coffee experiences. Join us in exploring coffee, one cup at a time."
    },
    {
        image: "/assets/about/photo-2.jpg",
        title: "Our Promise",
        desc:  "At Zenbrew, we promise the finest coffee with a positive impact. We source beans from sustainable farms, respecting people and the planet. Our meticulous roasting ensures a rich, satisfying experience. We are committed to quality, sustainability, and community."
    },
    {
        image: "/assets/about/photo-3.jpg",
        title: "Our Team",
        desc:  "At Zenbrew, our dedicated team is behind every great cup. Our skilled baristas and expert roasters work with passion and precision, making each coffee experience special. Meet the people who bring creativity and care to every cup and learn their unique stories."
    },
]

export const About = () => {
    const scrollableSectionRef = useRef(null)
    const scrollTriggerRef = useRef(null)

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        const animation = gsap.fromTo(scrollableSectionRef.current,
            {
                translateX:0
            },
            {
                translateX: '-200vw',
                ease: 'none',
                duration: 1,
                scrollTrigger: {
                    trigger: scrollTriggerRef.current,
                    start: 'top top',
                    end: '2800vw top',
                    scrub: 0.6,
                    pin: true
                }
            }
        )
        return () => {
            animation.kill()
        }
    }, [])

    return (
        <section className='overflow-hidden bg-primary'>
            <div ref={scrollTriggerRef}>
                <div ref={scrollableSectionRef} className='h-screen w-[300vw] flex relative'>
                    {aboutData.map((item, index) => {
                        return (
                            <div key={index} className='w-screen h-screen flex flex-col justify-center items-center relative'>
                                <div className='container mx-auto'>
                                    <div className='flex gap-[30px] relative'>
                                        <div className='flex flex-1 flex-col justify-center items-center'>
                                            <Badge containerStyles='w-[180px] h-[180px]'/>
                                            <div className='max-w-[560px] text-center items-center flex flex-col'>
                                                <h2 className='h2 text-white mb-4'>
                                                    <span className='mr-4'>{item.title.split(" ")[0]}</span>
                                                    <span className='text-accent'>{item.title.split(" ")[1]}</span>
                                                </h2>
                                                <Separator/>
                                                <p className='leading-relaxed mb-16 px-8 xl:px-0'>{item.desc}</p>
                                                <button className='btn'>See more</button>
                                            </div>
                                        </div>
                                        <div className='hidden xl:flex flex-1 w-full h-[70vh] relative'>
                                            <Image src={item.image} alt='qwe' className='object-cover' fill priority/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
