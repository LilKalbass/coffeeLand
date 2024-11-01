import React from 'react'
import Image from "next/image";

export const Separator = () => {
    // const imgSrc = bg == 'accent' ? '/assets/separator-accent.svg' : '/assets/separator-white.svg'

    return (
        <div className='relative mx-auto'>
            <Image src='/assets/separator-accent.svg' alt='coffeeDrops_img' width={168} height={26}/>
        </div>
    )
}
