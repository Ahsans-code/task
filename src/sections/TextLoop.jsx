"use client"
import InfiniteSlider from '@/components/InfiniteSlider'
import React from 'react'

export default function TextLoop() {
    const titles = [
        { node: <h1 className='text-white'>PROFILIC STUDIO .</h1>, title: "React", },
        { node: <h1 className='text-white'>PROFILIC STUDIO .</h1>, title: "Next.js", },
        { node: <h1 className='text-white'>PROFILIC STUDIO .</h1>, title: "Next.js", },
        { node: <h1 className='text-white'>PROFILIC STUDIO .</h1>, title: "Next.js", },
    ];
    return (
        <div className='py-8 bg-primary pointer-events-none flex flex-col gap-2'>
            <InfiniteSlider
                logos={titles}
                speed={50}
                direction="left"
                logoHeight={70}
                gap={40}
                hoverSpeed={50}
                ariaLabel="partners"
            />
            <InfiniteSlider
                logos={titles}
                speed={50}
                direction="right"
                logoHeight={70}
                gap={40}
                hoverSpeed={50}
                ariaLabel="partners"
            />
        </div>
    )
}
