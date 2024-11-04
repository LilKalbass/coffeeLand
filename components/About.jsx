import React, {useLayoutEffect, useRef} from 'react'
import {Badge} from "@/components/Badge";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {Separator} from "@/components/Separator";
import Image from "next/image";
import {aboutData} from "@/lib/data";



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
