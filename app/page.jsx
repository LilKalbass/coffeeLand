'use client'
import Image from "next/image";
import {Hero} from "@/components/Hero";
import {useEffect} from "react";
import {Explore} from "@/components/Explore";
import {About} from "@/components/About";

export default function Home() {
    useEffect(() => {
        const loadLocomotiveScroll = async () => {
            const LocomotiveScroll = (await import('locomotive-scroll')).default
            new LocomotiveScroll()
        }

        loadLocomotiveScroll()
    },[])

    return (
        <main className='h-full overflow-x-hidden'>
            <Hero/>
            <Explore/>
            <About/>
            <div className='h-[4000px]'/>
        </main>
  );
}
