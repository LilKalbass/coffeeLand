import React from 'react'
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";

import 'swiper/css'
import 'swiper/css/navigation'
import {IoMdQuote} from "react-icons/io";
import {testimonialData} from "@/lib/data";



export const Testimonials = () => {
    return (
        <section className='h-[50vh] xl:h-[60vh] pb-4'>
            <div className='container mx-auto h-full flex items-center'>
                <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    className='h-[400px]'
                >
                    {testimonialData.map((comment, index) => {
                        return (
                            <SwiperSlide key = {index} className='h-full w-full'>
                                <div className='flex justify-center h-full xl:pt-14'>
                                    <div className='max-w-[60%] text-primary'>
                                        <IoMdQuote className='text-6xl text-primary mb-12 mx-auto'/>
                                        <p className='text-2xl font-secondary text-center mb-8'>{comment.text}</p>
                                        <h6 className='text-xl font-bold text-center'>{comment.authorName}</h6>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </section>
    )
}
