import React from 'react'
import {motion} from "framer-motion";
import Link from "next/link";

const heightAnimation = {
    initial: {
        height: 0
    },
    open: {
        height: '85vh',
        transition: {
            duration: 1,
            ease: [0.75, 0, 0.23, 1]
        }
    },
    close: {
        height: 0,
        transition: {
            duration: 1,
            ease: [0.75, 0, 0.23, 1]
        }
    }
}

const letterAnimation = {
    initial: {
        y: '100%',
        opacity: 0
    },
    enter: (i) => ({
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
            ease: [0.60, 0, 0.20, 1],
            delay: i[0]
        }
    }),
    close: (i) => ({
        y: '100%',
        opacity: 1,
        transition: {
            duration: 1,
            ease: [0.60, 0, 0.20, 1],
            delay: i[1]
        }
    })
}

const links = [
    {href: '/', name: 'Home'},
    {href: '/', name: 'Explore'},
    {href: '/', name: 'About'},
    {href: '/', name: 'Menu'},
    {href: '/', name: 'Contact'},
]


const getWordByLetter = (name) => {
    let word = []
    name.split('').forEach((letter, index) => {
        word.push(
            <motion.span key={index} variants={letterAnimation} initial='initial' animate='enter' exit='exit'
                         custom={[index * 0.06, (name.length - index) * 0.01]}>
                {letter}
            </motion.span>
        )
    })
    return word
}


export const Nav = () => {
    return (
        <motion.nav variants={heightAnimation} initial='initial' animate='open' exit='close'
                    className='bg-primary overflow-hidden absolute z-20 -top-full w-full'>
            <div className='container mx-auto h-full flex items-center justify-center'>
                <ul className='flex flex-col gap-8 font-primary text-4xl font-semibold text-accent items-center'>
                    {links.map((link, index) => {
                        return (
                            <Link href={link.href} key={index} className='flex overflow-hidden hover:text-white transition-all duration-300'>
                                {getWordByLetter(link.name)}
                            </Link>
                        )
                    })}
                </ul>
            </div>
        </motion.nav>
    )
}
