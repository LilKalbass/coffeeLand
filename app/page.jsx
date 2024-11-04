'use client'
import {Hero} from "@/components/Hero";
import {useEffect} from "react";
import {Explore} from "@/components/Explore";
import {About} from "@/components/About";
import {Menu} from "@/components/Menu";
import {Testimonials} from "@/components/Testimonials";
import {ContactUs} from "@/components/ContactUs";

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
            <Menu/>
            <ContactUs/>
            <Testimonials/>
        </main>
  );
}
