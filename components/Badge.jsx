import React from 'react'
import Image from "next/image";

export const Badge = ({containerStyles}) => {
    return (
        <div className={`relative ${containerStyles}`}>
            <Image src='/assets/badge.svg' alt='badge_img' fill className='object-contain'/>
        </div>
    )
}
