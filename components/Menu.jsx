import React from 'react'
import {Separator} from "@/components/Separator";
import {MenuItem} from "@/components/MenuItem";
import {menuData} from "@/lib/data";

export const Menu = () => {
    return (
        <section className='pt-12 pb-16'>
            <div className='container mx-auto'>
                <div className='flex flex-col gap-4 mb-12 xl:mb-16'>
                    <div className='flex flex-col items-center gap-y-2'>
                        <h2 className='h2 text-center'>Our Menu</h2>
                        <Separator/>
                    </div>
                    <p className='text-center max-w-[620px] mx-auto'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Expedita adipisci alias laudantium impedit deleniti quis eos odio explicabo quo sapiente!
                    </p>
                </div>
                <div className='flex flex-col items-center gap-12 xl:gap-24'>
                    <div className='w-full grid grid-cols-1 xl:grid-cols-2 gap-y-8 gap-x-16 place-content-center'>
                        {menuData.map((menuItem, index) => {
                            return (
                                <MenuItem key={index} imagePath={menuItem.image} name={menuItem.name} description={menuItem.desc} price={menuItem.price}/>
                            )
                        })}
                    </div>
                    <button className='btn'>View All</button>
                </div>
            </div>
        </section>
    )
}
