import React from 'react'
import Image from "next/image";
import {Badge} from "@/components/Badge";
import {Separator} from "@/components/Separator";

export const ContactUs = () => {
    return (
        <section className='flex bg-primary h-[60vh] xl:h-[80vh] w-screen'>
            <div className='hidden relative xl:flex flex-1 justify-center items-center'>
                <Image src='/assets/opening-hours/img.png' alt='ContactUs_IMG' quality={100} fill priority className='object-cover'/>
                <Badge containerStyles='w-[320px] h-[320px] absolute z-20'/>
            </div>
            <div className='flex-1 bg-opening_hours bg-cover bg-no-repeat flex flex-col justify-center items-center relative z-10'>
                <div className='w-full h-full absolute top-0 bg-black/[0.85] z-10'/>
                <div className='z-20 flex flex-col items-center justify-center'>
                    <h2 className='h2 text-white mb-4'>Opening Hours</h2>
                    <Separator/>
                    <div className='mt-12 relative w-[300px] h-[220px] xl:w-[470px] xl:h-[280px]'>
                        <Image src='/assets/opening-hours/program-badge.svg' alt='q' fill quality={100} priority className='object-contain'/>
                    </div>
                </div>
            </div>
        </section>
    )
}
