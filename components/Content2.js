import React, { useState, useEffect } from 'react'
import { ArrowCircleLeftIcon, ArrowCircleRightIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import brl from '../public/BRL.png'
import admittedCarrier from '../public/admitted-carrier.png'
import threeReasons from '../public/three-reasons.png'


const Content = () => {
    const [index, setIndex] = useState(0)
    const [index1, setIndex1] = useState(1)

    const [transR, setTransR] = useState(false)
    const [transL, setTransL] = useState(false)

    useEffect(() => {
        if(transR) {
            setTimeout(() => {
                setTransR(false)
            }, 800)
        }

        if(transL) {
            setTimeout(() => {
                setTransL(false)
                setIndex((index + 1) % images.length)
                setIndex1((index1 + 1) % images.length)
            }, 800 )
        }
    }, [ transL, transR])

    const images = [
        'BRL.png',
        'admitted-carrier.png',
        'three-reasons.png'
    ]

    const handlePrev = () => {
        setTransR(true)
        setTransL(false)

        const nextIndex = index - 1
        const nextIndex1 = index1 - 1

        if (nextIndex < 0) {
            setIndex(images.length - 1)
        } else {
            setIndex(nextIndex)
        }

        if(nextIndex1 < 0) {
            setIndex1(images.length - 1)
        } else {
            setIndex1(nextIndex1)
        }
    }

    const handleNext = () => {
        setTransL(true)
        setTransR(false)
        setIndex((index + 1) % images.length)
        setIndex1((index1 + 1) % images.length)
    }

    return (
        
        <div className="w-full mx-auto bg-gray-100 py-32 flex flex-col">
            <h1 className="text-3xl font-bold md:text-4xl mb-6">Content</h1>
            <div className="flex mx-auto max-w-5xl w-11/12 items-center">
                <ArrowCircleLeftIcon 
                    className="h-8 w-8 mr-4 md:mr-6 lg:mr-10 lg:h-12 lg:w-12 cursor-pointer"
                    onClick={handlePrev}
                />
                    <div className="w-96 h-56 relative overflow-hidden mx-auto max-w-5xl rounded-xl">
                        
                        <img className={` absolute object-contain z-20 w-full h-full rounded-xl ${transL ? 'transition duration-500 ease-linear transform -translate-x-full' : transR ? 'animate-slideL' : ' '}}`} src={images[index]} alt=""/>
                        
                        <img className={` absolute object-contain z-0 w-full h-full rounded-xl ${transL ? 'animate-slideR' : transR ? 'transition duration-500 ease-linear transform translate-x-full' : ' '}`} src={images[index1]} alt=""/>
                    </div>
                <ArrowCircleRightIcon 
                    className="h-8 w-8 ml-4 md:ml-6 lg:ml-10 lg:h-12 lg:w-12 cursor-pointer"
                    onClick={handleNext}
                />
            </div>    
        </div>
    )

}

export default Content
