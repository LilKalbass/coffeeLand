import React from 'react'
import Image from "next/image";

export const MenuItem = ({imagePath, name, description, price}) => {
    return (
        <div className='flex items-center gap-4'>
            <div className='relative w-[60px] h-[60px] xl:w-[72px] xl:h-[72px] rounded-full'>
                <Image src={imagePath} alt='skip' fill className='object-cover' priority quality={100}/>
            </div>
            <div className='flex flex-col flex-1 gap-2'>
                <div className='flex justify-between gap-4 items-baseline'>
                    <h6 className='uppercase font-primary text-[22px] font-semibold text-primary leading-none'>{name}</h6>
                    <div className='flex-1 border-b border-dashed border-primary'/>
                    <p className='leading-none font-primary font-semibold text-[30px] text-primary'>{price.toFixed(2)}</p>
                </div>
                <p>{description}</p>
            </div>
        </div>
    )
}
