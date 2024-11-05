'use client'
import React, {useState} from 'react'
import Image from "next/image";
import Link from "next/link"
import {AnimatePresence} from "framer-motion"
import { AiOutlineAlignRight, AiOutlineClose } from "react-icons/ai";
import {Nav} from "@/components/Nav";
export const Header = () => {
    const [navActive, setNavActive] = useState(false)

    return (
        <header className='absolute top-[40px] xl:left-0 xl:right-0 -right-20 -left-20 z-40'>
            <div className='container mx-auto'>
                <div className='flex justify-between items-center ph:'>
                    <Link href='/' className='relative w-[100px] h-[40px] xl:w-[120px] xl:h-[40px] z-50'>
                        <Image src='/assets/logo.svg' alt='logo_img' className='object-contain' fill/>
                    </Link>
                    <button className='text-accent relative transition-all z-40 text-3xl lg:text-4xl cursor-pointer hover:text-white duration-300'
                            onClick = {() => setNavActive(!navActive)}>
                        {navActive ? (
                            <AiOutlineClose/>
                        ) : (
                            <AiOutlineAlignRight/>
                        )}
                    </button>
                </div>
            </div>
            <AnimatePresence mode='wait'>
                {navActive && <Nav/>}
            </AnimatePresence>
        </header>
    )
}
